import React, { useState } from 'react'
import "../style/Styles.css"
import Searchbar from "./Searchbar"


function Character({ character }) {
    const [modalClass, setModalClass] = useState("modal")
   
    const showModal = () => {
        if (modalClass === "modal") {
          setModalClass("modalShowed")
        } else {
            setModalClass("modal")
      }
    }

    return (
        <div className="cardStyle">
            <img src={character.image}/>
            <h3>{character.name}</h3>
            <button onClick={showModal} >Show details</button>
            <div className={modalClass} >
                <img src={character.image}/>
                <h3>{character.name}</h3>
                <p>{character.gender}</p>
                <p>{character.species}</p>
                <p>{character.status}</p>
                <button onClick={showModal}>Close</button>
            </div>
        </div>
    );
};

export default Character