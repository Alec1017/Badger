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