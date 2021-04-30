
import { useMemo } from 'react'
import { Contract } from "@ethersproject/contracts"
import { useWeb3React } from "@web3-react/core"

import { getContract } from '../utils'

import { abi as MYNFT_ABI, networkAddress as NETWORK_ADDRESS } from '../artifacts/contracts/MyNFT.sol/MyNFT.json'


function useContract(address: string | undefined, ABI: any, withSigner = true): Contract | null {
    const { library, account } = useWeb3React()
  
    return useMemo(() => {
        if (!address || !ABI || !library) return null

        try {
            return getContract(address, ABI, library, withSigner && account ? account : undefined)
        } catch (error) {
            console.error('Failed to get contract', error)
            return null
        }
    }, [address, ABI, library, withSigner, account])
}


export function useMintNFTContract(): Contract | null {
    return useContract(NETWORK_ADDRESS, MYNFT_ABI)
}