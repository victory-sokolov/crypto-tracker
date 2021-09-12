import React, { useState } from 'react';
import './App.css';
import {
   CryptoStore,
   CurrencyContext,
   SearchTermStore
} from './components/context'
import { CryptoData } from './components/CryptoData';
import { Header } from './components/Header';

function App() {

   const [currency, setCurrency] = useState('usd');

   return (
		<div className="App">
         <CurrencyContext.Provider value={[currency, setCurrency]}>
            <CryptoStore>
               <SearchTermStore>
               <Header />
                  <CryptoData currency={currency}></CryptoData>
               </SearchTermStore>
            </CryptoStore>
         </CurrencyContext.Provider>
		</div>
	);
}

export default App;
