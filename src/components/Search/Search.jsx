import React, { useState } from 'react';
import './search.css';
import axios from 'axios';

/**
 * The search compoonent will need name, value and onchange. it will also need state to keep track of the change from within the component. 
 */

const Search = (props) => {
    const [search, setSearch] = useState('');
    const [searchedItems, setSearchedItems] = useState([]);
    // state for the returned items;
    // state to determine whether to display search item or shop items
    // loading state

    const handleSearch = (e) => {
      setSearch(e.target.value);
    }

    const onSearchClick = async () => {
        let response = await axios.get(`/api/products/find?search=${search}`);
        setSearchedItems(response);
        setSearch('');
    }

    console.log(searchedItems)
    return (
        <div className="Search-component">
            <input 
                className="Search-input"
                placeholder={props.placeholder}
                type="text"
                name="search"
                value={search}
                onChange={handleSearch}
            />
            <div>
                <button onClick={onSearchClick} className="Search-btn"><i className="fas fa-search"></i></button>
            </div>
        </div>
    )
}

export default Search;