import styled from 'styled-components'


export const CardContainer = styled.div`
    width: 25rem;
    border-radius: 0.7rem;
    border: 1px solid  ${props => props.theme.colors.black};

    margin-left: 2rem;

    padding: 1rem;
`

export const CardContent = styled.div`
    display: flex;
    align-items: center;
`

export const CardTitle = styled.div`
    padding-left: 2rem;
    font-weight: bold;
    font-size: 1.4rem;
`

export const CardDescription = styled.div`
    padding-top: 2rem;
`


