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
                <p>{player.team.full_name}</p>
            </div>
            <div>
                <p>{player.team.conference}</p>
            </div>
            <div>
                <p>{player.team.division}</p>
            </div>
            <div>
                <p>{player.position}</p>
            </div>
            <div>
                <p>{player.weight}</p>
            </div>
            <div>
                <p>{player.country}</p>
            </div>
            <div>
                <p>{player.jersey_number}</p>
            </div>
        </div>
    )
  }
  
  export default GuessedPlayerCard;