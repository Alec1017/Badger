import styled from 'styled-components'
import { darken } from 'polished'

import { colors } from '../../../theme'


export const DonateButton = styled.button`
    background: ${props => props.theme.buttonSecondary};
    border-radius: 0.7rem;
    border: 2px solid ${props => props.theme.colors.emerald};
    color: ${props => props.theme.colors.emerald};
    width: 100%;
    height: 3rem;
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

export const DonateInputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem;
    align-items: center;
    margin-top: 2rem;

    border-radius: 0.7rem;
    border: 2px solid ${colors.athens};

    &:hover {
        border-color: ${colors.ghost};
    }
`

export const DonateInputCurrency = styled.div`
    font-size: 1.7rem;
    padding-right: 1rem;
`

export const DonateInput = styled.input`
    text-align: right;
    font-size: 2rem;
    width: 100%;
    font-weight: bold;
    border: none;
    outline: none;

`