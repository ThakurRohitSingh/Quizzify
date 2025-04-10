import "../App.css"
import { useNavigate } from 'react-router-dom';


const LandingPage = (props) => {

  let navigate = useNavigate()

  let LoginFunction = () =>{
    navigate('/login')
  }
  return (
    <>
    <div className="LandingPage-container">
        <h1>Quizzify</h1>
        <p>Test your knowledge</p>
        <button onClick={()=>{LoginFunction()}}>Start Quiz</button>
    </div>
    </>
  )
}

export default LandingPage