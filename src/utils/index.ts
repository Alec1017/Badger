import { Contract } from '@ethersproject/contracts'
import { getAddress } from '@ethersproject/address'
import { Web3Provider } from '@ethersproject/providers'


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


export function getContract(address: string, ABI: any, library: Web3Provider): Contract {

    return new Contract(address, ABI, library)
}