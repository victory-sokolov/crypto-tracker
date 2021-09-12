import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchTermStore = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <SearchContext.Provider value={[searchTerm, setSearchTerm]}>
            {children}
        </SearchContext.Provider>
    )
}