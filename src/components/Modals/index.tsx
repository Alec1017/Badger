import React from 'react'

import { ModalContainer, Hamburger, HamburgerLine, ModalHeader, ModalContent, ModalTitle, ModalBackground } from './style'


type ModalProps = { 
    children?: any, 
    title: string, 
    visible: boolean, 
    setVisible: (v: boolean) => any 
}

const Modal = ({ children, title, visible, setVisible }: ModalProps) => (
    <>
        <ModalBackground visible={visible} />
        <ModalContainer visible={visible}>
            <ModalHeader>
                <ModalTitle>{title}</ModalTitle>
                <Hamburger onClick={() => setVisible(false)}>
                    <HamburgerLine />
                    <HamburgerLine />
                </Hamburger>
            </ModalHeader>
            <ModalContent>{ children }</ModalContent>
        </ModalContainer>
    </>
)


export default Modal