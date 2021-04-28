import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import { injectedConnector } from './connectors'

import Wallet from './components/Wallet'
import Nav from './components/Nav'

function App() {
    const { chainId, account, activate, deactivate, active } = useWeb3React<Web3Provider>()

    return (
        <div>
            <Nav>
                <Wallet account={account || ''} active={active} activate={activate} deactivate={deactivate} connector={injectedConnector} />
            </Nav>
        </div>
    )
}

export default App