
import { useMemo } from 'react'
import { Contract } from "@ethersproject/contracts"
import { useWeb3React } from "@web3-react/core"

import { getContract } from '../utils'



function useContract(address: string | undefined, ABI: any): Contract | null {
    const { library, account } = useWeb3React()
  
    return useMemo(() => {
        if (!address || !ABI || !library) return null

        try {
            return getContract(address, ABI, library)
        } catch (error) {
            console.error('Failed to get contract', error)
            return null
        }
    }, [address, ABI, library, account])
}


export function useMintNFTContract(address: string): Contract | null {
    // return useContract(address, SOME_ABI_HERE)
    return null
}