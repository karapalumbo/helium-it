import ContactForm from "./ContactForm";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import "./ContactForm.css";

export default function ContactModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("full");

  const handleSizeClick = (size) => {
    setSize(size);
    onOpen();
  };

  return (
    <>
      <Button
        className="contact-btn"
        onClick={() => handleSizeClick(size)}
        key={size}
        m={4}
        variant="ghost"
      >{`Contact`}</Button>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <ContactForm />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}