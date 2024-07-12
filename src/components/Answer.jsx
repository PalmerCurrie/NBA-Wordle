/* eslint-disable react/prop-types */
import '../styles/Answer.css'

const Answer = ({answer}) => {
    return (
        <div className='answer'>
            <div className="answer-container">
            <h2>Answer Details:</h2>
            <ul>
                <li><strong>Player Name:</strong> {answer.first_name} {answer.last_name}</li>
                <li><strong>Team:</strong> {answer.team.full_name}</li>
                <li><strong>Conference:</strong> {answer.team.conference}</li>
                <li><strong>Division:</strong> {answer.team.division}</li>
                <li><strong>Position:</strong> {answer.position}</li>
                <li><strong>Weight:</strong> {answer.weight}</li>
                <li><strong>Country:</strong> {answer.country}</li>
                <li><strong>Jersey Number:</strong> {answer.jersey_number}</li>

            </ul>
            </div>
        </div>
    );
};


export default Answer;