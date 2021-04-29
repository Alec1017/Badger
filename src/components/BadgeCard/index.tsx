import React from 'react'

import { CardContainer, CardContent, CardTitle, CardDescription } from './style'
import BadgeIcon from '../BadgeIcon'


type BadgeCardProps = {
    image: string,
    title: string,
    description: string
}


const BadgeCard = ({image, title, description }: BadgeCardProps) => {
    return (
        <CardContainer>
            <CardContent>
                <BadgeIcon src={image} />
                <CardTitle>{title}</CardTitle>
            </CardContent>
            <CardDescription>{description}</CardDescription>
        </CardContainer>
    )
}

export default BadgeCard