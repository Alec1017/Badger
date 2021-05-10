import React, { useEffect, useState } from 'react'
import { utils } from 'ethers'

import { CardContainer, CardContent, CardTitle, CardDescription } from './style'
import BadgeIcon from '../BadgeIcon'

import { useBadgeContract, badgeContractAddress } from '../../hooks/useContract'

enum Qualification {
    Qualified = 'qualified',
    NotQaulified = 'not qualified'
}

type BadgeCardProps = {
    image: string,
    title: string,
    description: string,
    account: string
}

const BadgeCard = ({image, title, description, account }: BadgeCardProps) => {
    const badgeContract = useBadgeContract()
    const [qualificationStatus, setQualificationStatus] = useState(Qualification.NotQaulified)
    const [progressStatus, setProgressStatus] = useState('')

    const uri = 'https://gateway.pinata.cloud/ipfs/QmZjXRyaXyfoH8jwai1T42WKgrk4kDSqCbkfKQqMJDuCPN'

    const contractFilter = {
        address: badgeContractAddress,
        topics: [
            utils.id('Mint(address,uint256)')
        ]
    }


    useEffect(() => {
        badgeContract?.once(contractFilter, (address, token_id) => {
            console.log(address, token_id.toNumber())
        })

        checkQualified()
        checkProgress()
    }, [account])


    const checkQualified = async () => {
        let result = await badgeContract?.checkQualification()

        if (result != null) {
            setQualificationStatus(result ? Qualification.Qualified : Qualification.NotQaulified)
        }
    }


    const checkProgress = async () => {
        let result = await badgeContract?.checkProgress()

        if (result != null) {
            setProgressStatus(utils.formatEther(result))
        }
    }


    const donate = async () => {
        let tx = await badgeContract?.donate({ value: utils.parseEther('0.05') })
        let result = await tx.wait()

        console.log(result)

        checkProgress()
        checkQualified()
    }

    return (
        <>
        {account 
            ? <CardContainer>
                <CardContent>
                    <BadgeIcon src={image} />
                    <CardTitle>{title}</CardTitle>
                </CardContent>
                <button onClick={donate}>donate</button>
                <div>status: {qualificationStatus}</div>
                {Number(progressStatus) < 0.05 
                    ? <div>progress: {progressStatus} / 0.05</div> 
                    : <button onClick={() => badgeContract?.mintNFT(uri)}>claim NFT</button>}
                <CardDescription>{description}</CardDescription>
              </CardContainer>
            : <div></div>
        }
        </>
    )
}

export default BadgeCard