import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('Ovas');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue, ...categories])
            setInputValue('')
        } 
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text"
                className="inputSearch"
                onChange={handleInputChange}
                value={inputValue}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}