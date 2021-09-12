import React, { useContext } from 'react';
import { CurrencyContext } from '../context';
import './style.scss'

const Currency = () => {
	const setCurrency = useContext(CurrencyContext)[1];

	const onCurrencyChange = (e) => {
		setCurrency(e.target.value);
	}

    return (
			<div className="currency-selector">
				<select
					name="currecny"
					className="currency"
					onChange={onCurrencyChange}
				>
					<option value="usd">
						USD
					</option>
					<option value="eur">EUR</option>
				</select>
			</div>
		);
}

export default Currency;