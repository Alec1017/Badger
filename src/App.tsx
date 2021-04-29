import React from 'react'

import Wallet from './components/Wallet'
import Nav from './components/Nav'
import BadgeCard from './components/BadgeCard'

function App() {

    return (
        <div>
            <Nav>
                <Wallet />
            </Nav>
            <div>
                <BadgeCard 
                    image='https://gateway.pinata.cloud/ipfs/QmYPp5PxM93L1wLRbiL9gTixWSNP18mAVRnxXV1VJpro39' 
                    title='Donate $20 to any charity' 
                    description='By donating $20 to any of these charities, you will receive a new NFT commemorating your generosity!' />
            </div>
        </div>
    )
}

export default App