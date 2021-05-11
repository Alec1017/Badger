import styled from 'styled-components'
import { darken } from 'polished'


export const CardContainer = styled.div`
    width: 25rem;
    border-radius: 0.7rem;
    border: 1px solid  ${props => props.theme.colors.black};

    margin-left: 2rem; // TODO: remove this after testing
    margin-top: 2rem;  // TODO: remove this after testing

    padding: 1rem;
`

export const CardContent = styled.div`
    display: flex;
    align-items: center;
`

export const CardTitle = styled.div`
    padding-left: 1rem;
    font-weight: bold;
    font-size: 1.4rem;
`

export const CardDescription = styled.div`
    padding-top: 2rem;
`

export const CardDonateButton = styled.button`
    background: ${props => props.theme.buttonSecondary};
    border-radius: 0.7rem;
    border: 2px solid ${props => props.theme.colors.emerald};
    color: ${props => props.theme.colors.emerald};
    width: 7rem;
    height: 2.5rem;
    font-size: 1.2rem;

    transition: all 0.2s;

    &:hover {
        background: ${props => props.theme.colors.emerald};
        color: ${props => props.theme.buttonSecondary};
        cursor: pointer;
    }

    &:active {
        background: ${props => darken(0.2, props.theme.colors.emerald)};
        border-color: ${props => darken(0.2, props.theme.colors.emerald)};
    }
`

export const CardClaimNFT = styled.button`
    background: ${props => props.theme.buttonSecondary};
    border-radius: 0.7rem;
    border: 2px solid ${props => props.theme.colors.tango};
    color: ${props => props.theme.colors.tango};
    width: 7rem;
    height: 2.5rem;
    font-size: 1.2rem;

    transition: all 0.2s;

    &:hover {
        background: ${props => props.theme.colors.tango};
        color: ${props => props.theme.buttonSecondary};
        cursor: pointer;
    }

    &:active {
        background: ${props => darken(0.2, props.theme.colors.tango)};
        border-color: ${props => darken(0.2, props.theme.colors.tango)};
    }
`

