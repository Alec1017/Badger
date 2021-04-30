import React from 'react'

import { CardContainer, CardContent, CardTitle, CardDescription } from './style'
import BadgeIcon from '../BadgeIcon'

import { useMintNFTContract } from '../../hooks/useContract'


type BadgeCardProps = {
    image: string,
    title: string,
    description: string,
    account: string
}

const BadgeCard = ({image, title, description, account }: BadgeCardProps) => {
    const mintNFTContract = useMintNFTContract()

    const uri = 'https://gateway.pinata.cloud/ipfs/QmZjXRyaXyfoH8jwai1T42WKgrk4kDSqCbkfKQqMJDuCPN'

    const mint = async () => {
        const tx = await mintNFTContract?.mintNFT(account, uri)

        const receipt = await tx.wait()
        
        console.log(receipt)
    }

    return (
        <CardContainer onClick={mint}>
            <CardContent>
                <BadgeIcon src={image} />
                <CardTitle>{title}</CardTitle>
            </CardContent>
            <CardDescription>{description}</CardDescription>
        </CardContainer>
    )
}

export default BadgeCard