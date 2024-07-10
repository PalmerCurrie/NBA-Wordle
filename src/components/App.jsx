import '../styles/App.css'
import Header from './Header.jsx'
import HomePage from './HomePage.jsx'
import GamePage from './GamePage.jsx'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  // const [playerNameGuess, setPlayerNameGuess] = useState("");
  // const apiKey = process.env.REACT_APP_API_KEY;
  const apiKey = 'a4e27add-76f8-4607-a57a-33a85149cfea';
  const [allPlayers, setAllPlayers] = useState([]);  
  const [playerGuesses, setPlayerGuesses] = useState([]);
  const [playerGuessID, setPlayerGuessID] = useState(-1);

  // First 500 are the active players, or atleast in alphabetical order
  const fetchPlayers = async () => {
    let players = [];
    let page = 1;
    let nextPage = `https://api.balldontlie.io/v1/players?cursor=${page}&per_page=100`; // Initial API endpoint

    while (nextPage) {
        const response = await fetch(nextPage,   {
            headers: {
                'Authorization': apiKey
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        players = [...players, ...data.data]; // Append current page players to the array

        // Check if there's a next page to fetch
        if (page > 399) {
          nextPage = null;
        } else {
          nextPage = `https://api.balldontlie.io/v1/players?cursor=${page + 100}&per_page=100`;
        }
        page = page + 100;
    }

    setAllPlayers(players);
    console.log(players);
};

useEffect(() => {
    fetchPlayers();
}, []);
  


const getPlayer = async (playerId) => {
  const response = await fetch(`https://api.balldontlie.io/v1/players/${playerId}`, {
      headers: {
          'Authorization': apiKey
      }
  });
  if (!response.ok) {
      throw new Error('Network response was not ok');
  }
  const data = await response.json();
  if (playerGuesses.length == 0) {
    setPlayerGuesses([data]);
  } else {
    setPlayerGuesses([...playerGuesses, data])
  }
  return data;
};

const updatePlayers = (playerName) => {
  getPlayerID(playerName);
  if (playerGuessID == -1) {
    // do nothing
  } else {
    const newPlayer = getPlayer(playerGuessID);
    console.log(newPlayer);
    const oldPlayers = playerGuesses;
    const newPlayers = [...oldPlayers, newPlayer];
    setPlayerGuesses(newPlayers);
  }

}

 // Logging player guesses
 useEffect(() => {
}, [playerGuesses]);


// function to convert from player name to id.
const getPlayerID = (playerName) => {
  if (allPlayers.length == 0 ){
    setPlayerGuessID(-1);
  }
  allPlayers.map((player) => {
    let fullname = `${player.first_name} ${player.last_name}`;
    if (fullname == playerName) {
      console.log(player.id);
      setPlayerGuessID(player.id);
      return;
    }
  })
  setPlayerGuessID(-1);
}

return (
  <Router>
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage 
              playerGuesses={playerGuesses} 
              updatePlayers={updatePlayers} />} />
      </Routes>
    </div>
  </Router>
);
}

export default App
