import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import { WalletButton, NetworkCard } from './style'
import { shorten, NetworkLabels} from '../../utils'
import { injectedConnector } from '../../connectors'



const Wallet = () => {
    const { chainId, account, activate, deactivate, active } = useWeb3React<Web3Provider>()

    const onClick = () => active ? deactivate() : activate(injectedConnector)

    const networkLabel = chainId ? NetworkLabels[chainId] : ''

    return (
        <div style={{display: 'flex'}}>
            {networkLabel !== '' && <NetworkCard>{networkLabel}</NetworkCard>}
            <WalletButton onClick={onClick}>
                {active ? shorten(account || '') : 'Connect Wallet'}
            </WalletButton>
        </div>
    )
}

export default Wallet
