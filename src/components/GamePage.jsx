/* eslint-disable react/prop-types */
// import '../styles/Header.css'
import "../styles/GamePage.css"

function GamePage() {

    return (
      <div className="game-container">
        <div className="search-bar">
                <input type="text" placeholder="Search" />
                <button type="button">Guess</button>
            </div>
        <div className="player-guess-container">
            {/* map PlayerCard out for all guessed players */}
            <div>
                <p> TEMP GUESS 1</p>
            </div>
            <div>
                <p> TEMP GUESS 2</p>
            </div>
            <div>
                <p> TEMP GUESS 3</p>
            </div>
        </div>


      </div>
    )
  }
  
  export default GamePage