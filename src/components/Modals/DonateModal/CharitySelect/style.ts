import styled, { css } from 'styled-components'
import { darken } from 'polished'

import { colors } from '../../../../theme'


export const CharitySelectContainer = styled.div<{ selected: boolean }>`
    background: ${props => props.selected ? colors.ghost : colors.athens};
    border-radius: 0.7rem;
    color: ${colors.black};

    border: 2px solid ${colors.ghost};

    width: calc(100% - 4px);
    height: calc(3rem - 4px);
    font-size: 1.2rem;

    transition: all 0.2s;

    ${ props => !props.selected && css`
        &:hover {
            border-color: ${colors.charm};
            border-width: 2px;
            cursor: pointer;
        }

        &:active {
            background: ${darken(0.2, colors.gainsboro)};
            border-color: ${darken(0.2, colors.gainsboro)};
        }
    `}

    &:not(:last-child) {
        margin-bottom: 0.5rem;
    }
`

export const CharitySelectInner = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    padding: 0 1rem;
`