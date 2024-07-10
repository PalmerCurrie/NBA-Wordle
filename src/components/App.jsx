import '../styles/App.css'
import Header from './Header.jsx'
import HomePage from './HomePage.jsx'
import GamePage from './GamePage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


return (
  <Router>
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage/>} />
      </Routes>
    </div>
  </Router>
);
}

export default App
