import React, { useState } from 'react'
import { utils } from 'ethers'

import { DonateButton, CharitySelect } from './style'
import { useBadgeContract } from '../../../hooks/useContract'
import Modal from '../../Modals'


type DonateModalProps = { 
    title: string, 
    visible: boolean, 
    setVisible: (v: boolean) => any 
}

const DonateModal = ({ title, visible, setVisible }: DonateModalProps) => {
    const badgeContract = useBadgeContract()

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
                    <CharitySelect>test</CharitySelect>
                    <CharitySelect></CharitySelect>
                    <CharitySelect></CharitySelect>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '1rem'}}>
                <DonateButton onClick={donate}>Donate</DonateButton>
            </div>
        </Modal>
    )
}

export default DonateModal