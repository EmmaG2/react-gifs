import React from 'react'

export const GifGridItem = ({ id, url }) => {

  return (
    <section className='card'>
      <img
        src={url}
        alt={id}
      />
    </section>
  )
}
