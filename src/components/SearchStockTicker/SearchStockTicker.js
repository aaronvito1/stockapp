import React, { useState } from 'react';
import './SearchStockTicker.css';

function SearchStockTicker(props) {
	return (
    <div className="search-box">
      <input 
        className="search-input"
        placeholder="Type stock ticker"
        value={props.searchStockTicker}
        onChange={props.onSearchStock}
        />
    </div>
		);
}

export default SearchStockTicker;