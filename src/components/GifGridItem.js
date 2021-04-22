import React from 'react'

export const GifGridItem = ({title,img}) => {
    return (
        <div className="grid_item animate__animated animate__bounceIn">
            <img src={img} alt={title} />
            <label>{title}</label>
        </div>
    )
}
