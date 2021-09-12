import React from 'react';
import {Currency} from './Currency';
import { SearchBar } from './Search';

export const Header = () => {

    return (
			<header className="App-header">
				<h1>Search a currency</h1>
				<SearchBar />
				<Currency />
			</header>
		);
}