import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => setInputValue(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue.trim().length > 3) setCategories(cats => [...cats, inputValue]);
  }

  return (
    <form
      className='container'
      onSubmit={handleSubmit}>
      <div className="field">
        <input type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="line"/>
      </div>
    </form>
  )
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};