import React, { useState } from 'react';

import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {

  const vtubers = [
    // 'Tokoyami Towa',
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
      <h1 className='titleApp'>Gif Expert App</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      {
        categories.map(category => <GifGrid category={category} key={category} />)
      }
    </>
  )
};

export default GifExpertApp;