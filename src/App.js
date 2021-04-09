import React, { useState } from 'react';
import './App.css';
import { CryptoData } from './components/CryptoData';
import { CurrencyContext } from './components/CurrencyContext';
import { Header } from './components/Header';

function App() {

   const [currency, setCurrency] = useState('usd');

  return (
		<div className="App">
         <CurrencyContext.Provider value={[currency,setCurrency]}>
            <Header></Header>
            <CryptoData currency={currency}></CryptoData>
         </CurrencyContext.Provider>
		</div>
	);
}

export default App;
