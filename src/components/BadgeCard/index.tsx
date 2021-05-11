import React, { useEffect, useState } from 'react'
import { utils } from 'ethers'

import { CardContainer, CardContent, CardTitle, CardDescription, CardDonateButton, CardClaimNFT } from './style'
import BadgeIcon from '../BadgeIcon'
import ProgressBar from '../ProgressBar'

import { useBadgeContract, badgeContractAddress } from '../../hooks/useContract'


type BadgeCardProps = {
    image: string,
    title: string,
    description: string,
    account: string
}

const BadgeCard = ({image, title, description, account }: BadgeCardProps) => {
    const badgeContract = useBadgeContract()
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

        checkProgress()
    }, [account])


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
    }

    return (
        <>
        {account 
            ? <CardContainer>
                <CardContent>
                    <BadgeIcon src={image} />
                    <CardTitle>{title}</CardTitle>
                </CardContent>
                <CardContent>
                    <CardDonateButton onClick={donate}>donate</CardDonateButton>
                    <ProgressBar percentage={50} />
                    {/* {Number(progressStatus) <= 0.1 
                        ? <div>progress: {progressStatus} / 0.05</div> 
                        : <CardClaimNFT onClick={() => badgeContract?.mintNFT(uri)}>claim NFT</CardClaimNFT>} */}
                </CardContent>
                <CardDescription>{description}</CardDescription>
              </CardContainer>
            : <div></div>
        }
        </>
    )
}

export default BadgeCard