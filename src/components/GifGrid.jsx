import React, { useState, useEffect } from 'react';
import { GifGridItems } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, [])

  const getGifs = async () => {
    const key = 'DG0KWU3807B5';
    const search = 'random';
    const searchParam = 'naruto';

    const url = `https://g.tenor.com/v1/${search}?q=${searchParam}&key=${key}`;
    const resp = await fetch(url);
    const { results } = await resp.json();

    const gifs = (gif => {
      const gifData = [];

      for (let i = 0; i < 10; i++) {
        const id = gif[i]?.id;
        const title = gif[i]?.content_description;
        const url = gif[i]['media'][0]['gif']['url'];

        gifData.push({ id, title, url });
      }

      return gifData;
    })

    console.log(gifs(results));
    setImages(gifs(results));
  }

  return (
    <div>
      <h3>{category}</h3>
      {
        images.map( img => {
          <GifGridItems
              key={img.id}
              {...img}
          />
        })
      }
    </div>
  );
}