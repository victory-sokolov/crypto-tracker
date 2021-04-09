import React, { useContext } from 'react';
import { CurrencyContext } from './CurrencyContext';

export const Currency = () => {

	const [currency, setCurrency] = useContext(CurrencyContext);

	const onCurrencyChange = (e) => {
		setCurrency(e.target.value);
	}

    return (
			<div>
				<select
					name="currecny"
					className="currency"
					onChange={onCurrencyChange}
				>
					<option value="usd">USD</option>
					<option value="eur">EUR</option>
				</select>
			</div>
		);
}
