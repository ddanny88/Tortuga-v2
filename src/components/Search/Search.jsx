import React, { useState } from 'react';
import './search.css';
import axios from 'axios';
import { connect } from 'react-redux'
import { getSearchedItems, isSearching, researchSearchedItem } from '../../ducks/reducers/productReducer';



const Search = (props) => {
    const [search, setSearch] = useState('');
    // state for the returned items;
    // state to determine whether to display search item or shop items
    // loading state

    const handleSearch = (e) => {
      setSearch(e.target.value);
    }

    const onSearchClick = async (e) => {
        e.preventDefault();
        let response = await axios.get(`/api/products/find?search=${search}`);
        props.researchSearchedItem();
        props.isSearching(true);
        setTimeout(() => {
            props.getSearchedItems(response);
            setSearch('');
            props.isSearching(false);
        }, 900);
    }


    return (
        <div>
            <form className="Search-component" onSubmit={onSearchClick}>
                <input 
                    className="Search-input"
                    placeholder={props.placeholder}
                    type="text"
                    name="search"
                    value={search}
                    onChange={handleSearch}
                />
                <div>
                    <button className="Search-btn"><i className="fas fa-search"></i></button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProp = state => {
    const { searchedItems, searching } = state.productReducer;
    return {
        searchedItems,
        searching
    }
}

export default connect(mapStateToProp, { getSearchedItems, isSearching, researchSearchedItem })(Search);