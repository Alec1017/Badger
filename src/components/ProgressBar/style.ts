import styled from 'styled-components'
import { lighten } from 'polished'

import { colors } from '../../theme'



export const ProgressBarContainer = styled.div`
    width: 8rem;
    background-color: ${lighten(0.2, colors.charm)};
    height: 1.5rem;
    border-radius: 1rem;
`


export const ProgressBarInner = styled.div`
    height: 100%;
    width: 60%;
    background-color: ${colors.charm};
    border-radius: 1rem;
`