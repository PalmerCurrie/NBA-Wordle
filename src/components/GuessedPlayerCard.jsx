/* eslint-disable react/prop-types */
import "../styles/GuessedPlayerCard.css"

function GuessedPlayerCard( {player, answer} ) {
    if (!player) {
        return;
    }

    const checkMatches = (property) => {
        switch (property) {
            case 'player-name':
                return `${player.first_name} ${player.last_name}` === `${answer.first_name} ${answer.last_name}`
            case 'conference':
                return player.team.conference === answer.team.conference;
            case 'division':
                return player.team.division === answer.team.division;
            case 'position':
                return player.position === answer.position;
            case 'weight':
                return player.weight === answer.weight;
            case 'country':
                return player.country === answer.country;
            case 'jersey_number':
                return player.jersey_number === answer.jersey_number;
            default:
                return false;
        }
    }

    const handleJerseyNumberColor = () => {
        let guessNumber = player.jersey_number;
        let answerNumber = answer.jersey_number;
        let result = answerNumber - guessNumber;
        
        if (Math.abs(result) <= 5) {
            return 'yellow-matches';
        }
        return 'no-match';
    };

    const handleWeightColor = () => {
        let guessNumber = player.weight;
        let answerNumber = answer.weight;
        let result = answerNumber - guessNumber;
        
        if (Math.abs(result) <= 10) {
            return 'yellow-matches';
        }
        return 'no-match';
    };

    const handleJerseyNumberText = () => {
        let guessNumber = player.jersey_number;
        let answerNumber = answer.jersey_number;
        let result = answerNumber - guessNumber;
        if (result == 0) {
            return (
                <div className="display-number">
                    <p>{player.jersey_number}</p>
                </div>
            )
        } else if (result > 0) {
            return (
                <div className="display-number">
                    <p>{player.jersey_number}</p>
                    <h1>↑</h1>
                </div>
            )

        } else if (result < 0) {
            return (
                <div className="display-number">
                    <p>{player.jersey_number}</p>
                    <h1>↓</h1>
                </div>
            )
        }
    }

    const handleWeightText = () => {
        let guessNumber = player.weight;
        let answerNumber = answer.weight;
        let result = answerNumber - guessNumber;
        if (result == 0) {
            return (
                <div className="display-number">
                    <p>{player.weight}</p>
                </div>
            )
        } else if (result > 0) {
            return (
                <div className="display-number">
                    <p>{player.weight}</p>
                    <h1>↑</h1>
                </div>
            )

        } else if (result < 0) {
            return (
                <div className="display-number">
                    <p>{player.weight}</p>
                    <h1>↓</h1>
                </div>
            )
        }
    }

    return (
      <div className="player-container">
            <div className={checkMatches('player-name') ? 'matches' : 'no-match'}>
                <p>{player.first_name} {player.last_name}</p>
            </div>
            <div className={checkMatches('conference') ? 'matches' : 'no-match'}>
                <p>{player.team.full_name}</p>
            </div>
            <div className={checkMatches('conference') ? 'matches' : 'no-match'}>
                <p>{player.team.conference}</p>
            </div>
            <div className={checkMatches('division') ? 'matches' : 'no-match'}>
                <p>{player.team.division}</p>
            </div>
            <div className={checkMatches('position') ? 'matches' : 'no-match'}>
                <p>{player.position}</p>
            </div>
            <div className={checkMatches('weight') ? 'matches' : handleWeightColor()}>
                {handleWeightText()}
            </div>
            <div className={checkMatches('country') ? 'matches' : 'no-match'}>
                <p>{player.country}</p>
            </div>
            <div className={checkMatches('jersey_number') ? 'matches' : handleJerseyNumberColor()}>
               {handleJerseyNumberText()}
            </div>
        </div>
    )
  }
  
  export default GuessedPlayerCard;