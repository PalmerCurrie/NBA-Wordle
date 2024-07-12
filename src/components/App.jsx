import '../styles/App.css'
import Header from './Header.jsx'
import HomePage from './HomePage.jsx'
import GamePage from './GamePage.jsx'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  // const apiKey = process.env.REACT_APP_API_KEY;
  const apiKey = 'a4e27add-76f8-4607-a57a-33a85149cfea';
  const [allPlayers, setAllPlayers] = useState([]);  
  const [playerGuessList, setPlayerGuessList] = useState([]);
  const [playerGuessID, setPlayerGuessID] = useState(-1);
  const [listOfGuessedID, setListOfGuessedID] = useState([]);

  const [answer, setAnswer] = useState([]);

  const pickAnswer = async () => {
    const answerID =  Math.floor(Math.random() * 500);
    const answerPlayer = await fetchPlayerData(answerID);
    setAnswer(answerPlayer.data);
  }

  // First 500 are the active players, or atleast in alphabetical order
  const fetchPlayers = async () => {
    let players = [];
    let page = 1;
    let nextPage = `https://api.balldontlie.io/v1/players?cursor=${page}&per_page=100`; // Initial API endpoint

    while (nextPage) {
      try {
        const response = await fetch(nextPage,   {
            headers: {
                'Authorization': apiKey
            }
        });

        if (response.status === 429) {
          console.error("Too Many Requests - please try again later.");
          alert("Please wait a few seconds before each turn!");
          return null; 
        }
    
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
      catch (error) {
        console.error("Failed to fetch player data:", error);
        return null; 
      }
    }
    setAllPlayers(players);
};

const fetchPlayerData = async (playerId) => {
  try {
    const response = await fetch(`https://api.balldontlie.io/v1/players/${playerId}`, {
      headers: {
        'Authorization': apiKey
      }
    });

    if (response.status === 429) {
      console.error("Too Many Requests - please try again later.");
      alert("Please wait a few seconds before each turn!");
      return null; 
    }

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch player data:", error);
    return null; 
  }
}


const getPlayer = async (playerId) => {
  const data = await fetchPlayerData(playerId);
  if (playerGuessList.length == 0) {
    setPlayerGuessList([data]);
  } else {
    setPlayerGuessList([...playerGuessList, data]);
  }
  checkGameOver(data.data);
};

 // Logging player guesses
 useEffect(() => {
}, [playerGuessList]);


const updatePlayerGuessList = () => {
  if (playerGuessID == -1) {
    return; // do nothing
  }
  let playerExists = false;
  playerGuessList.forEach((player) => {
    if (player.data.id === playerGuessID) {
      playerExists = true;
    }
  });
  if (!playerExists) {
    const newPlayer = getPlayer(playerGuessID);
    setListOfGuessedID[listOfGuessedID, playerGuessID];
    setPlayerGuessList([...playerGuessList, newPlayer]);
  }
}

const updatePlayers = (playerName) => {
  getPlayerID(playerName);
}

const getPlayerID = (playerName) => {
  allPlayers.map((player) => {
    let fullname = `${player.first_name} ${player.last_name}`;
    if (fullname == playerName) {
      console.log(playerName, "ID: ", player.id);
      setPlayerGuessID(player.id);
    }
  })
}

const checkGameOver = (player) => {
  if (player.id == answer.id) {
    alert("You Win");
  }
}

// Fetch allPlayers and answer on mount
useEffect(() => {
  fetchPlayers();
  pickAnswer();
}, []);


// updatePlayerGuessList when playerGuessID changes
useEffect(() => {
  updatePlayerGuessList()
}, [playerGuessID])


return (
  <Router>
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage answer={answer} />} />
        <Route path="/game" element={<GamePage 
              playerGuessList={playerGuessList} 
              updatePlayers={updatePlayers} 
              answer={answer} />} />
      </Routes>
    </div>
  </Router>
);
}

export default App
