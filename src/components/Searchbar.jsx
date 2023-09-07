import React, { useState } from 'react' 
// import {FaSearch} from "react-icons/fa"

export const Searchbar = () => {

    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((json) => {
            const results = json.filter((data) => {
                return data && data.name && data.name.toLowerCase().includes(value);
            })
             console.log(results);
        })
       
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className='input-wrapper'>
            {/* <FaSearch id='search-icon' /> */}
            <input placeholder='type to search...' value={input} onChange={(e) => handleChange(e.target.value)} />
        </div>
    );
}

export default Searchbar
