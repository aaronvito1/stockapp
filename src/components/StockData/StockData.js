import React, { useState } from 'react';
import './StockData.css';

function StockData(props) {
	return (
        <div className="stocks-section">
          { 
            props.stockData
            .map(result => (
              <div className="Stocks-stock">
                <div className="Stock-Details">
                  <div className="Stock-Name">{result.name} ({result.ticker})</div>
                  <strong>Currency:</strong> {(result.currency_name)}<br />
                  <strong>Market:</strong> {(result.market)}<br />
                  <strong>Type:</strong> {result.type}<br />
                  <label><strong>Specific Prices:</strong> <br /> 
                    <select onChange={props.onLimitByChange} value={result.limitBy}>
                      <option value="open">Open</option>
                      <option value="close">Close</option>
                      <option value="high">High</option>
                      <option value="low">Low</option>
                    </select>
                  </label>
                </div>
              </div>
            ))
          }
        </div>
		);
}

export default StockData;