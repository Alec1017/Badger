import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import { injectedConnector } from './connectors'

import Wallet from './components/Wallet'
import Nav from './components/Nav'
import BadgeCard from './components/BadgeCard'

function App() {
    const { chainId, account, activate, deactivate, active } = useWeb3React<Web3Provider>()

    return (
        <div>
            <Nav>
                <Wallet account={account || ''} active={active} activate={activate} deactivate={deactivate} connector={injectedConnector} />
            </Nav>
            <div>
                <BadgeCard 
                    image='https://gateway.pinata.cloud/ipfs/QmYPp5PxM93L1wLRbiL9gTixWSNP18mAVRnxXV1VJpro39' 
                    title='Donate $1000 to any charity' 
                    description='By donating $1000 to any of these charities, you will receive a new NFT commemorating your generosity!' />
            </div>
        </div>
    )
}

export default App