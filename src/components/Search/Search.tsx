import React from "react";
import './Search.scss';

interface SearchProps {
    search: string;
    setSearch: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);  // Atualiza o estado do Home
    };

    return (
        <form action="" className="input">
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="Buscar" 
                    value={search} 
                    onChange={handleSearchChange} // Atualiza o estado com cada mudança no input
                    className="pesquisa"
                />
            </div>
        </form>
    );
};

export default Search;