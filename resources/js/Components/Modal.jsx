import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem 0rem;
`;

function Modal({ onClose, children }) {
    const closeModal = (e) => {
        e.preventDefault();
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <ModalContainer onClick={(e) => closeModal(e)}>
            {children}
        </ModalContainer>
    );
}

export default Modal;
