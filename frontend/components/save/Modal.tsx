import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  HStack,
  Progress,
  Link,
} from "@chakra-ui/react";
import React from "react";
import humanizeDuration from "humanize-duration";
import { IArchive } from "@/interfaces";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const ResaveModal = ({
  onClose,
  isOpen,
  archive,
  save,
}: {
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
  archive: IArchive;
  save: (url: string) => Promise<void>;
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <>
      <Modal onClose={onClose} size="xl" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            This page was archived{" "}
            {humanizeDuration(
              new Date().getTime() - parseInt(archive.timestamp) * 1000,
              { largest: 2 }
            )}{" "}
            ago
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Link href={"/search/" + archive.contentID} isExternal>
              View <ExternalLinkIcon mx="2px" />
            </Link>
            <HStack spacing={4}>
              <p>Would you like to resave it?</p>
              {isLoading && <Progress size="xs" isIndeterminate />}
            </HStack>
          </ModalBody>
          <ModalFooter>
            <HStack spacing={2}>
              <Button colorScheme="red" onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                onClick={async () => {
                  setIsLoading(true);
                  await save(archive.contentURL);
                  setIsLoading(false);
                  onClose();
                }}
                isLoading={isLoading}
              >
                Save
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
