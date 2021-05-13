import styled from 'styled-components'
import { darken } from 'polished'

import { colors } from '../../../theme'


export const DonateButton = styled.button`
    background: ${props => props.theme.buttonSecondary};
    border-radius: 0.7rem;
    border: 2px solid ${props => props.theme.colors.emerald};
    color: ${props => props.theme.colors.emerald};
    width: 100%;
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

export const CharitySelect = styled.div`
    background: ${colors.lightGray};
    border-radius: 0.7rem;
    color: ${colors.black};

    border: 2px solid ${darken(0.2, colors.lightGray)};

    width: calc(100% - 4px);
    height: calc(2.5rem - 4px);
    font-size: 1.2rem;

    transition: all 0.2s;

    &:hover {
        // background: ${props => props.theme.colors.emerald};
        // color: ${props => props.theme.buttonSecondary};
        cursor: pointer;
    }

    &:active {
        background: ${darken(0.2, colors.lightGray)};
    }

    &:not(:last-child) {
        margin-bottom: 0.5rem;
    }
`