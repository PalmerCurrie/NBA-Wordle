/* eslint-disable react/prop-types */
import "../styles/GamePage.css"
import GuessedPlayerCard from "./GuessedPlayerCard";
import { useState } from "react";

function GamePage( {playerGuessList, updatePlayers, answer} ) {
    const [input, setInput] = useState("");

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handlePlayerGuess = () => {
        updatePlayers(input);
    };  

    return (
      <div className="game-container">
        <div className="search-bar">
                <input type="text" placeholder="Search" value={input} onChange={handleInputChange}/>
                <button type="button" onClick={handlePlayerGuess}>Guess</button>
            </div>  
        <div className="player-guess-container">
            <div className="property-title">
                <div className="player-container">
                    <div>
                        <p>Name: </p>
                    </div>
                    <div>
                        <p>Team: </p>
                    </div>
                    <div>
                        <p>Conference: </p>
                    </div>
                    <div>
                        <p>Division: </p>
                    </div>
                    <div>
                        <p>Position:</p>
                    </div>
                    <div>
                        <p>Weight:</p>
                    </div>
                    <div>
                        <p>Country: </p>
                    </div>
                    <div>
                        <p>Number:</p>
                    </div>
                </div>
            </div>
            {playerGuessList.length > 0 ? (
                playerGuessList.map((player, index) => (
                    <GuessedPlayerCard 
                    player={player.data} 
                    key={index} 
                    answer={answer} />
                ))
            ) : (
                <div> </div>
            )}
        </div>


      </div>
    )
  }
  
  export default GamePage