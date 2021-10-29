import ContactForm from "./ContactForm";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import "./ContactForm.css";

export default function ContactModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const handleSizeClick = (size) => {
    setSize(size);
    onOpen();
  };

  return (
    <>
      {/* <PrimaryButton text="Contact" /> */}
      <Button
        className="contact-btn"
        onClick={() => handleSizeClick(size)}
        key={size}
        variant="#0f1230"
        color="#0f1230"
        textColor="white"
      >{`Contact`}</Button>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <ContactForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
