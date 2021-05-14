import React, { useState } from 'react'
import { utils } from 'ethers'

import { DonateButton, DonateInput, DonateInputContainer, DonateInputCurrency } from './style'
import { useBadgeContract } from '../../../hooks/useContract'
import Modal from '../../Modals'
import CharitySelect from './CharitySelect'


type DonateModalProps = { 
    title: string, 
    visible: boolean, 
    setVisible: (v: boolean) => any 
}

const charityOptions = [
    { name: 'India COVID relief', address: '0x73hjd983n' },
    { name: 'India COVID relief', address: '0x73hjd983n' },
    { name: 'India COVID relief', address: '0x73hjd983n' }
]

const DonateModal = ({ title, visible, setVisible }: DonateModalProps) => {
    const badgeContract = useBadgeContract()
    const [activeCharity, setActiveCharity] = useState(-1)

    const donate = async () => {
        let tx = await badgeContract?.donate({ value: utils.parseEther('0.05') })
        let result = await tx.wait()

        console.log(result)
    }

    return (
        <Modal title={title} visible={visible} setVisible={setVisible}>
            <div style={{paddingTop: '0.5rem'}}>
                <div style={{paddingBottom: '1rem'}}>Select a charity</div>
                <div>
                    {charityOptions.map((charity, idx) => {
                        return <CharitySelect 
                                    name={charity.name} 
                                    address={charity.address} 
                                    selected={activeCharity === idx} 
                                    onClick={() => setActiveCharity(idx) } 
                                />
                    })}
                </div>
            </div>
            <DonateInputContainer>
                <DonateInputCurrency>ETH</DonateInputCurrency>
                <DonateInput 
                    inputMode='decimal' 
                    autoComplete='off' 
                    autoCorrect='off' 
                    type='text' 
                    pattern='^[0-9]*[.,]?[0-9]*$' 
                    placeholder='0.0' 
                    minLength={1}
                    maxLength={79}
                    spellCheck='false' 
                />
            </DonateInputContainer>
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '1rem'}}>
                <DonateButton onClick={donate}>Donate</DonateButton>
            </div>
        </Modal>
    )
}

export default DonateModal