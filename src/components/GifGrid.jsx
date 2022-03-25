import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then(imgs => setImages(imgs))
  }, [category])

  return (
    <section className='gallery'>
      {
        images.map(imge => {
          return <GifGridItem
            key={imge.id}
            {...imge}
          />
        })
      }
    </section>
  );
}