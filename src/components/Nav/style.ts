import styled from 'styled-components'

import { colors } from '../../theme'


export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    justify-content: space-between; 
    border-bottom: 1px solid ${colors.lightGray};
`


export const NavTitle = styled.div`
    font-weight: bold;
    font-size: 2.4rem;
`