import React from 'react'

import { ProgressBarContainer, ProgressBarInner } from './style'

const ProgressBar = ({ percentage }: {percentage: number}) => (
    <ProgressBarContainer>
        <ProgressBarInner />
    </ProgressBarContainer>
)

export default ProgressBar