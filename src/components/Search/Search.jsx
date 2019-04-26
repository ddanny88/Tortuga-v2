import React from 'react';
import './search.css';

/**
 * The search compoonent will need name, value and onchange. it will also need state to keep track of the change from within the component. 
 */

const Search = (props) => {
    return (
        <div className="Search-component">
            <input 
                className="Search-input"
                placeholder={props.placeholder}
                type="text"
            />
            <div>
                <button className="Search-btn"><i className="fas fa-search"></i></button>
            </div>
        </div>
    )
}

export default Search;