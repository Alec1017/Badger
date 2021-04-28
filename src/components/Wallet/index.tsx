import React from 'react'

import { WalletButton } from './style'
import { shorten } from '../../utils'


type WalletProps = {
    account: string,
    active: boolean,
    activate: (connector: any) => void,
    deactivate: () => void,
    connector: any
}

const Wallet = ({account, active, activate, deactivate, connector }: WalletProps) => {

    const onClick = () => active ? deactivate() : activate(connector)

    return (
        <WalletButton onClick={onClick}>
            {active ? shorten(account) : 'Connect Wallet'}
        </WalletButton>
    )
}

export default Wallet
