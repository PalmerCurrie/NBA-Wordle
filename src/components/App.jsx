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
  // const [allPlayers, setAllPlayers] = useState([]);  
  const [playerGuesses, setPlayerGuesses] = useState([]);

//   const getAllPlayers = async () => {
//     let players = [];
//     let hasNextPage = true;

//     while (hasNextPage) {
//         const response = await fetch(`https://api.balldontlie.io/v1/players/active`, {
//             headers: {
//                 'Authorization': apiKey  // Hide API Key
//             }
//         });
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         players = [...players, ...data.data];
//         hasNextPage = data.meta.next_cursor !== null;
//     }

//     setAllPlayers(players);
//     console.log("All Players: ", players) ;
// };

// useEffect(() => {
//   getAllPlayers();
// }, []); // Load all players on mount
  


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

const updatePlayers = (playerID) => {
  const newPlayer = getPlayer(playerID);
  const oldPlayers = playerGuesses;
  const newPlayers = [...oldPlayers, newPlayer];
  setPlayerGuesses(newPlayers);
}

 // Logging player guesses
 useEffect(() => {
  console.log('Player Guesses:', playerGuesses);
}, [playerGuesses]);


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
