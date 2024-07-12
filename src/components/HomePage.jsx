/* eslint-disable react/prop-types */
import '../styles/HomePage.css'

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className="homepage-container">
        <h1>Welcome to NBA Wordle!</h1>
        <p className="game-description">
          Are you ready to test your NBA knowledge and guessing skills? Dive into our NBA Wordle game where you&apos;ll unravel the mystery player&apos;s identity using clues from their team, position, and many more.
        </p>

        <div className="how-to-play">
          <h2>How to Play:</h2>
          <ol>
            <li>
              <strong>Guess the Player:</strong> Enter the name of an NBA player to see if you can guess the mystery player.
            </li>
            <li>
              <strong>Receive Feedback:</strong> After each guess, receive color-coded feedback to see if you&apos;re on the right track based on the player&apos;s attributes.
            </li>
            <li>
              <strong>Eight Chances:</strong> You have 8 tries to guess the mystery player correctly. Choose wisely!
            </li>
          </ol>
        </div>

        <div className="challenge-yourself">
          <h2>Challenge Yourself:</h2>
          <p>
            Can you guess the player with the fewest guesses? Sharpen your NBA knowledge and compete against yourself or challenge friends to beat your score!
          </p>
        </div>

        <div className="get-started">
          <h2>Get Started:</h2>
          <p>
            Navigate to the game page by clicking the Play button in the header!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;