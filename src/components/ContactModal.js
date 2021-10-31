import ContactForm from "./ContactForm";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import "./ContactForm.css";

export default function ContactModal({ ...elemProps }) {
  return (
    <>
      <Modal size="md" {...elemProps}>
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
