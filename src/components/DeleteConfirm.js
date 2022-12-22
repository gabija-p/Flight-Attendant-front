import React from 'react'
import { Modal, Button } from "react-bootstrap";

const DeleteConfirmation = ({ showModal, hideModal, confirmModal, id, message, airlineId, flightId }) => {
return (
    <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
            <Modal.Title>Patvirtinimas</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-danger">{message}</div></Modal.Body>
        <Modal.Footer>
            <Button variant="default" onClick={hideModal}>
                Atšaukti
            </Button>
            <Button variant="danger" onClick={() => confirmModal(id, airlineId, flightId) }>
                Ištrinti
            </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default DeleteConfirmation;