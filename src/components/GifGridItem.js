import React from 'react'

export const GifGridItem = ({title, url}) => {
  return (
    <div className='card animate__animated animate__fadeInLeft'>
        <img src={url}  alt={title} className="card-img"/>
        <div className="text-overlay">
          <h3>{title}</h3>
        </div>
    </div>
  )
}