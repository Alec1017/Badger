import React from 'react'

import { ProgressBarContainer, ProgressBarInner, ProgressBarWrapper, Counter, CounterInner } from './style'

const ProgressBar = ({ percentage }: {percentage: number}) => (
    <ProgressBarContainer>
        <Counter>
            <CounterInner>{Math.round(percentage)}%</CounterInner>
        </Counter>
        <ProgressBarWrapper percentage={percentage}>
            <ProgressBarInner />
        </ProgressBarWrapper>
    </ProgressBarContainer>
)

export default ProgressBar