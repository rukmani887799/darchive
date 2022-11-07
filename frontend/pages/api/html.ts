import type { NextApiRequest, NextApiResponse } from "next";
import { Web3Storage, getFilesFromPath, Filelike } from "web3.storage";
import { temporaryDirectory } from "tempy";
import { execFile } from "promisify-child-process";
import { resolve } from "path";
import fsPromises from "node:fs/promises";
import { getErrorMessage } from "@/parser";

type Data = {
  status: string;
  message: string;
  contentID: string;
  title: string;
};

const SINGLEFILE_EXECUTABLE = "single-file"
const BROWSER_PATH = "/usr/bin/google-chrome";
const BROWSER_ARGS = '["--no-sandbox"]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    let tempDirectory = temporaryDirectory();
    const url = req.body.url;
    try {
      const command = [
        `--browser-executable-path=${BROWSER_PATH}`,
        `--browser-args='${BROWSER_ARGS}'`,
        url,
        `--output=${resolve(tempDirectory, "index.html")}`,
        `--base-path=${tempDirectory}`,
        `--localhost=${process.env.AWS_LAMBDA_FUNCTION_VERSION ? false : true}`,
      ];
      const { stderr } = await execFile(SINGLEFILE_EXECUTABLE, command);
      if (stderr) {
        console.error(stderr);
        return res.status(500).json({
          status: "error",
          message: stderr as string,
          contentID: "",
          title: "",
        });
      }
      const client = new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN!, endpoint: new URL('https://api.web3.storage') });
      const files = await getFilesFromPath(tempDirectory);
      // console.log(files);
      const cid = await client.put(files as Iterable<Filelike>, {
        wrapWithDirectory: false,
        maxRetries: 3,
      });
      const data = await (await fsPromises.readFile(resolve(tempDirectory, "metadata.json"))).toString();
      const {title} = JSON.parse(data);
      await fsPromises.rm(tempDirectory, { recursive: true, force: true });
      return res.status(200).json({
        status: "success",
        message: "Uploaded to Web3.Storage!",
        contentID: cid,
        title,
      });
    } catch (error) {
      console.error(error);
      if (tempDirectory) {
        await fsPromises.rm(tempDirectory, { recursive: true, force: true });
      }
      return res.status(500).json({
        status: "error",
        message: getErrorMessage(error),
        contentID: "",
        title: "",
      });
    }
  }
}
