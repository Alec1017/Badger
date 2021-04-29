import styled from 'styled-components'
import { darken, lighten } from 'polished'


export const NetworkCard = styled.button`
    color: ${props => props.theme.colors.tango};
    background: ${props => lighten(0.4, props.theme.colors.tango)};
    padding: 0 1rem;
    height: 2.5rem;
    font-size: 1.2rem;
    border-radius: 0.7rem;
    border: 2px solid ${props => props.theme.colors.tango};
    margin-right: 1rem;
`


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
        cursor: pointer;
    }

    &:active {
        background: ${props => darken(0.2, props.theme.buttonPrimary)}
    }
`