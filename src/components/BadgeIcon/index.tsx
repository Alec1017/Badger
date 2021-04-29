import React from 'react'

import { Image, ImageContainer } from './style'


type BadgeIconProps = {
    src: string
}


const BadgeIcon = ({src}: BadgeIconProps) => {
    return (
        <ImageContainer>
            <Image alt="icon" src={src}/>
        </ImageContainer>
    )
}

export default BadgeIcon