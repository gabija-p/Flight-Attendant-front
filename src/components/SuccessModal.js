import React from 'react'
import { Modal, Button} from "react-bootstrap";

const SuccessModal = ({ showModal, hideModal}) => {
return (
    <Modal show={showModal} onHide={hideModal}>
        <Modal.Body><div className="alert alert-success">Vartotojas sukurtas sėkmingai!</div></Modal.Body>
        <Modal.Footer>
        <Button variant="default" onClick={hideModal}>
                Uždaryti
        </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default SuccessModal;