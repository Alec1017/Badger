import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'

import { Networks } from '../utils'


export const injectedConnector = new InjectedConnector({
    supportedChainIds: [
        Networks.MainNet,  
        Networks.Ropsten,  
        Networks.Rinkeby,  
        Networks.Goerli,  
        Networks.Kovan  
    ]
})

export function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider)

    library.pollingInterval = 12000
    return library
}