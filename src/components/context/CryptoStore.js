import { createContext, useState } from "react";

export const CryptoContext = createContext();

export const CryptoStore = ({ children }) => {
	const [crypto, setCrypto] = useState([]);

	return (
		<CryptoContext.Provider value={[crypto, setCrypto]}>
			{children}
		</CryptoContext.Provider>
	);
};