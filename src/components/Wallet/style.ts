import styled from 'styled-components'


export const WalletButton = styled.button`
    background: ${props => props.theme.buttonSecondary};
    border-radius: 0.7rem;
    border: 2px solid ${props => props.theme.buttonPrimary};
    color: ${props => props.theme.buttonPrimary};
    width: 10rem;
    height: 2.5rem;
    font-size: 1.2rem;

    transition: all 0.2s;

    &:hover {
        background: ${props => props.theme.buttonPrimary};
        color: ${props => props.theme.buttonSecondary};
        border: 2px solid ${props => props.theme.buttonSecondary};
    }
`