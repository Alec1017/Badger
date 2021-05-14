import React from 'react'

import { CharitySelectContainer, CharitySelectInner } from './style'
import { shorten } from '../../../../utils'

type CharitySelectProps = {
    name: string,
    address: string, 
    selected: boolean,
    onClick: () => any
}

const CharitySelect = ({ name, address, selected, onClick }: CharitySelectProps) => (
    <CharitySelectContainer selected={selected} onClick={onClick}>
        <CharitySelectInner>
            <div>{name}</div>
            <div>{shorten(address)}</div>
        </CharitySelectInner>
    </CharitySelectContainer>
)


export default CharitySelect