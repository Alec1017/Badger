import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import styled, { css } from 'styled-components'

import { injectedConnector } from '../../connectors'


const WalletButton = styled.button<{ primary?: boolean }>`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;

    ${props => props.primary && css`
        background: palevioletred;
        color: white;
    `}
`

const Wallet = () => {
    const { chainId, account, activate, deactivate, active } = useWeb3React<Web3Provider>()

    const onClick = () => active ? deactivate() : activate(injectedConnector)

    return (
        <div>
            <div>ChainId: {chainId}</div>
            <div>Account: {account}</div>
            <WalletButton onClick={onClick}>
                {active ? 'Disconnect Wallet' : 'Connect Wallet'}
            </WalletButton>
        </div>
    )
}

export default Wallet
