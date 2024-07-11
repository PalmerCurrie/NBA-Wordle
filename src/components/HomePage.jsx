/* eslint-disable react/prop-types */
// import '../styles/Header.css'

function HomePage( {answer} ) {

  return (
    <>
    <div> <p> ANSWER: {answer.first_name} {answer.last_name}  {answer.id}</p> </div>
    </>
  )
}

export default HomePage