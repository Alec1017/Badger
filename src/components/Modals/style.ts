import styled from 'styled-components'

import { colors } from './../../theme'


export const Hamburger = styled.div`
    width: 18px;
    height: 18px;
    z-index: 4;
    cursor: pointer;
    position: relative;
`


export const HamburgerLine = styled.div`
    display: block;
    width: 25px;
    height: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: ${colors.black};

    border-radius: 3px;

    z-index: 1;

    &:nth-child(1) {
        transform: translate(-50%,-50%) rotate(45deg);
    }

    &:nth-child(2) {
        transform: translate(-50%,-50%) rotate(-45deg);
    }
`


export const ModalBackground = styled.div<{visible: boolean}>(
    ({ visible }) => `
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: ${colors.black};
        opacity: 0.2;

        display: ${visible ? 'block' : 'none'};
        visibility: ${visible ? 'visible' : 'hidden'};
    `
)


export const ModalContainer = styled.div<{visible: boolean}>(
    ({ visible }) => `
        width: 25rem;
        // height: 25rem;
        border-radius: 0.7rem;
        border: 1px solid  ${colors.black};
        background-color: ${colors.white};

        padding: 1rem;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        display: ${visible ? 'block' : 'none'};
        visibility: ${visible ? 'visible' : 'hidden'};

        z-index: 1;
    `
)


export const ModalTitle = styled.div`
    font-size: 1.3rem;
    color: ${colors.black};
`


export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`

export const ModalContent = styled.div`

`
