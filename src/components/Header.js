import React from 'react';
import { Currency } from './Currency';

export const Header = () => {

    return (
            <header className="App-header">
                <h1>Search a currency</h1>
                <input type="text" />
                <Currency />
            </header>
		);
}