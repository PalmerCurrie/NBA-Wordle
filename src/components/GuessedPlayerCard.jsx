/* eslint-disable react/prop-types */
import "../styles/GuessedPlayerCard.css"

function GuessedPlayerCard( {player} ) {
    if (!player) {
        return;
    }

    return (
      <div className="player-container">
            <div>
                <p>{player.first_name} {player.last_name}</p>
            </div>
            <div>
                <p>Team: {player.team.full_name}</p>
            </div>
            <div>
                <p>Conference: {player.team.conference}</p>
            </div>
            <div>
                <p>Division: {player.team.division}</p>
            </div>
            <div>
                <p>Position: {player.position}</p>
            </div>
            <div>
                <p>Weight: {player.weight}</p>
            </div>
            <div>
                <p>Country: {player.country}</p>
            </div>
            <div>
                <p>Number: {player.jersey_number}</p>
            </div>
        </div>


    )
  }
  
  export default GuessedPlayerCard;