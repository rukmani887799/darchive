import { crypto, ByteArray } from "@graphprotocol/graph-ts";
import { ArchiveAdded as ArchiveAddedEvent } from "../generated/DArchive/DArchive";
import { Archive, Url } from "../generated/schema";

export function handleArchiveAdded(event: ArchiveAddedEvent): void {
  const contentURL = event.params.contentURL.toString();
  let urlID = crypto.keccak256(ByteArray.fromUTF8(contentURL)).toHex();
  let archiveID = crypto
    .keccak256(ByteArray.fromUTF8(event.params.contentID))
    .toHex();

  let archive = Archive.load(archiveID);
  let url = Url.load(urlID);

  if (!url) {
    url = new Url(urlID);
    url.url = contentURL;
    url.save();
  }

  if (!archive) {
    archive = new Archive(archiveID);
    archive.title = event.params.title.toString();
    archive.timestamp = event.block.timestamp;
    archive.contentID = event.params.contentID;
    archive.urlID = urlID;
    archive.save();
  }
}
