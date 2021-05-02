
import { useMemo } from 'react'
import { Contract } from "@ethersproject/contracts"
import { useWeb3React } from "@web3-react/core"

import { getContract } from '../utils'

import { abi as BADGE_ABI, networkAddress as BADGE_NETWORK_ADDRESS } from '../artifacts/contracts/Badge.sol/Badge.json'


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


export function useBadgeContract(): Contract | null {
    return useContract(BADGE_NETWORK_ADDRESS, BADGE_ABI)
}

export const badgeContractAddress = BADGE_NETWORK_ADDRESS