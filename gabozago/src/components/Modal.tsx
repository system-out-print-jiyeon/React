import React, { FC, useCallback, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useStore, useDispatch, useSelector } from 'react-redux';


function MyVerticallyCenteredModal() {
    
    const openModal = useSelector((state) => state);
    
    /* return (
        {
            openModal.modalReducer === true
            ? 
            (
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={}>Close</Button>
                    </Modal.Footer>
                </Modal>
            )
            :
            null
        }
      
    ); */
  }
  