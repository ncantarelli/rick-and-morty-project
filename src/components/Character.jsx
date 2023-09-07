import React, { useState } from 'react'
import "../style/characterStyles.css"
import Details from './Details';


function Character({ character }) {
    const [modalClass, setModalClass] = useState("modal")
    // const printCharacterDetails = (characterDetails) => {
    //     console.log('it works :>> ', characterDetails);
    // };

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
            <p>{character.name}</p>
            {/* <button onClick={printCharacterDetails}>Show details</button> */}
            <button onClick={showModal} >Show details</button>
            <div className={modalClass} >
                <img src={character.image}/>
                <h3>{character.name}</h3>
                <p>{character.gender}</p>
                <p>{character.species}</p>
                <p>{character.status}</p>
                <button onClick={showModal}>Close</button>
            </div>

            {/* <Modal name={character.name} showModal={showModal}  /> */}
        </div>
    );
};

export default Character