import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import { injectedConnector } from '../../connectors'


const Wallet = () => {
    const { chainId, account, activate, deactivate, active } = useWeb3React<Web3Provider>()

    const onClick = () => {
        activate(injectedConnector)
    }

    return (
        <div>
            <div>ChainId: {chainId}</div>
            <div>Account: {account}</div>
            {active ? (
                <div>
                    <div>✅ </div>
                    <button type="button" onClick={()=> deactivate()}>disconnect</button>
                </div>

                ) : (
                <button type="button" onClick={onClick}>Connect</button>
            )}
        </div>
    )
}

export default Wallet
