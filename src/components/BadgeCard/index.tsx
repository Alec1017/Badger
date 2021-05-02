import React, { useEffect, useState, useRef } from 'react'
import { Contract, utils } from 'ethers'

import { CardContainer, CardContent, CardTitle, CardDescription } from './style'
import BadgeIcon from '../BadgeIcon'

import { useBadgeContract, badgeContractAddress } from '../../hooks/useContract'


type BadgeCardProps = {
    image: string,
    title: string,
    description: string,
    account: string
}

const BadgeCard = ({image, title, description, account }: BadgeCardProps) => {
    const badgeContract = useBadgeContract()

    const filter = {
        address: badgeContractAddress,
        topics: [
            utils.id('Mint(address,uint256)')
        ]
    }

    const uri = 'https://gateway.pinata.cloud/ipfs/QmZjXRyaXyfoH8jwai1T42WKgrk4kDSqCbkfKQqMJDuCPN'


    useEffect(() => {
        badgeContract?.once(filter, (address, token_id) => {
            console.log(address, token_id.toNumber())
        })
    }, [badgeContract])

    return (
        <CardContainer onClick={() => badgeContract?.mintNFT(account, uri)}>
            <CardContent>
                <BadgeIcon src={image} />
                <CardTitle>{title}</CardTitle>
            </CardContent>
            <CardDescription>{description}</CardDescription>
        </CardContainer>
    )
}

export default BadgeCard