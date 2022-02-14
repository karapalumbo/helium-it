import ContactForm from "./ContactForm";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const ContactModal = ({ ...elemProps }) => {
  return (
    <>
      <Modal size="xl" {...elemProps}>
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
};

export default ContactModal;
