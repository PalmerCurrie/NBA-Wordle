/* eslint-disable react/prop-types */
// import '../styles/Header.css'

function HomePage( {answer} ) {

  return (
    <>
    <div> <p> ANSWER: {answer.first_name} {answer.last_name}  {answer.id}  
      {answer.team.conference}  {answer.team.division}  {answer.jersey_number} 
      {answer.country} </p> </div>
    </>
  )
}

export default HomePage