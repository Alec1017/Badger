import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import Wallet from './components/Wallet'
import Nav from './components/Nav'
import BadgeCard from './components/BadgeCard'

import { NavTitle } from './components/Nav/style'

function App() {
    const { account } = useWeb3React<Web3Provider>()

    return (
        <div>
            <Nav>
                <NavTitle>Badger</NavTitle>
                <Wallet />
            </Nav>
            <div>
                <BadgeCard
                    account={account || ''}
                    image='https://gateway.pinata.cloud/ipfs/QmYPp5PxM93L1wLRbiL9gTixWSNP18mAVRnxXV1VJpro39' 
                    title='Donate $20 to any charity' 
                    description='By donating $20 to any of these charities, you will receive a new NFT commemorating your generosity!' />
            </div>
        </div>
    )
}

export default App