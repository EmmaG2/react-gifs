import React, { useState } from 'react';

import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {

  const vtubers = [
    'Tokoyami Towa',
    // 'Sakura Miko',
    // 'Inugami Korone',
    // 'Nekomata Okayu',
    // 'Amelia Watson',
    // 'Gawr Gura',
    // 'Ouro Kronii'
  ];

  // const handleAdd = ({ cate = 'Mori Calliope' }) => {
  //   setCategories([cate, ...categories]);
  // }

  const [categories, setCategories] = useState(vtubers);

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          categories.map(category => <GifGrid category={category} key={category} />)
        }
      </ol>
    </>
  )
};

export default GifExpertApp;