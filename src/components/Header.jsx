/* eslint-disable react/prop-types */
import '../styles/Header.css'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <>
      <header className="header">
        <Link to="/game" className="logo-link"> 
            <div className="logo">
                <span className="logo-text">NBA Wordle</span>
            </div>
        </Link>
            <nav className="nav-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/game">Play</Link>
                    </li>
                </ul>
            </nav>
            <div className="search-bar">
                {/* Placeholder for search bar */}
                <input type="text" placeholder="Search" />
                <button type="button">Search</button>
            </div>
            {/* <Link to="/cart" className="shopping-link"> */}
                <div className="shopping-bag">
                    {/* Placeholder for shopping bag/cart icon */}
                    <p>Bag</p>
                </div>
            {/* </Link> */}
        </header>

    </>
  )
}

export default Header