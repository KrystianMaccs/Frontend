import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";

const ActionModal = ({
  isOpen,
  toggleModal,
  title,
  children,
  callback,
  type,
  disabled,
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggleModal}>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggleModal}>
          Cancel
        </Button>
        <Button color="warning" onClick={callback} disabled={disabled}>
          {type}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ActionModal;
