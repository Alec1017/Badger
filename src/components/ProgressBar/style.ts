import styled from 'styled-components'
import { lighten } from 'polished'

import { colors } from '../../theme'


export const ProgressBarContainer = styled.div`
    width: 8rem;
    background-color: ${lighten(0.2, colors.charm)};
    height: 1.5rem;
    border-radius: 1rem;
    position: relative;
`

export const ProgressBarWrapper = styled.div<{percentage: number}>(
    ({ percentage }) =>`
        width: ${percentage}%;
        height: 1.5rem;
        overflow: hidden;
        border-radius: 1rem;
    `
)


export const ProgressBarInner = styled.div`
    height: 100%;
    width: 8rem;
    background-color: ${colors.charm};
    border-radius: 1rem;
`

export const Counter = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: ${colors.white};
    border-radius: 50%;
    border: 2px solid ${colors.black};

    position: absolute;
    top: 50%;
    left: -15%;
    transform: translate(0%, -50%);
`

export const CounterInner = styled.div`
    font-size: 0.8rem;
    text-align: center;
    margin-top: 50%;
    transform: translate(0%, -50%);
`