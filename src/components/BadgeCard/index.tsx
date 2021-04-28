import React from 'react'


type BadgeCardProps = {
    image: string,
    title: string,
    description: string
}


const BadgeCard = ({image, title, description }: BadgeCardProps) => {
    return (
        <div>
            <img alt="icon" src={image}/>
            <div>{title}</div>
            <div>{description}</div>
        </div>
    )
}

export default BadgeCard