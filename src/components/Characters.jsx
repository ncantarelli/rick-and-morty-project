import React, { useEffect, useState } from 'react'
import Character from './Character';
import "../style/characterStyles.css"

function Characters() {

    const [characters, setCharacters] = useState();
    const [error, setError] = useState(false);

    const fetchCharacters = () => {
        fetch("https://rickandmortyapi.com/api/character").then((response) => {
            return response.json();
        }).then((data) => {
            if (!data.error) {
            const chars = data.results;
            console.log('characters :>> ', chars);
                setCharacters(chars);
            } else {
                setError(true);
            }
        }).catch(() => {
            setError(true);
            console.log('error :>> ', error);
        });
    };

    useEffect(() => {
        fetchCharacters()

    }, []);
    
    return (
      <div className='characterContainer'>
            
            
            {/* Conditional rendering */}
            {/* {characters && characters.map((character) => {
                return <p key={character.id}>{character.name}</p>;
            })}; */}

            {/* With ternary operator */}
            {characters?characters.map((character) => {
                return <div key={character.id}>
                    <Character character={character} />
                </div>;
            }) : (<h1>...Loading...</h1>)}
            {error && <h1>...Something went wrong...</h1>}
      </div>
    )
}

export default Characters