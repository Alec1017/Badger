import { Contract } from '@ethersproject/contracts'
import { getAddress } from '@ethersproject/address'
import { Web3Provider, JsonRpcSigner } from '@ethersproject/providers'


export const Networks: { [key: string]: number } = {
    MainNet: 1, 
    Ropsten: 3,
    Rinkeby: 4,
    Goerli:  5,
    Kovan:   42
}


export const NetworkLabels: { [key: number]: string } = {
    1: '',
    3: 'Ropsten',
    4: 'Rinkeby', 
    5: 'Goerli',
    42: 'Kovan'
}


export const shorten = (str: string) => 
    str?.length > 8 ? str.slice(0, 6) + '...' + str.slice(-4) : str


export function isAddress(value: any): string | false {
    try {
        return getAddress(value)
    }
    catch {
        return false
    }
}


export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
    return library.getSigner(account).connectUnchecked()
}


export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
    return account ? getSigner(library, account) : library
}


export function getContract(address: string, abi: any, library: Web3Provider, account?: string): Contract {
    return new Contract(address, abi, getProviderOrSigner(library, account))
}