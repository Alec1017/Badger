import React from 'react'

import { ProgressBarContainer, ProgressBarInner, ProgressBarWrapper } from './style'

const ProgressBar = ({ percentage }: {percentage: number}) => (
    <ProgressBarContainer>
        <ProgressBarWrapper percentage={percentage}>
            <ProgressBarInner />
        </ProgressBarWrapper>
    </ProgressBarContainer>
)

export default ProgressBar