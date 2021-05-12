import React, { useState } from 'react'

import { ModalContainer, Hamburger, HamburgerLine, ModalHeader, ModalContent, ModalTitle, ModalBackground } from './style'

const Modal = ({ children }: { children?: any }) => {
    const [modalVisibility, setModalVisibility] = useState(true)
    
    return (
        <>
            <ModalBackground visible={modalVisibility} />
            <ModalContainer visible={modalVisibility}>
                <ModalHeader>
                    <ModalTitle>some title</ModalTitle>
                    <Hamburger onClick={() => setModalVisibility(!modalVisibility)}>
                        <HamburgerLine />
                        <HamburgerLine />
                    </Hamburger>
                </ModalHeader>
                <ModalContent>{ children }</ModalContent>
            </ModalContainer>
        </>
    )
}

export default Modal