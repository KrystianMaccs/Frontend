import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";

const QuestionModal = ({ isOpen, toggleModal, title, content, callback }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggleModal}>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>{content}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggleModal}>
          No
        </Button>
        <Button color="warning" onClick={callback}>
          Yes
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default QuestionModal;
