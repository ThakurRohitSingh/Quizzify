import blobTop from "../assets/blobTop.svg"
import blobBottom from "../assets/blobBottom.svg"

const LandingPage = (props) => {
  return (
    <>
    <div className="LandingPage-container">
        <h1>QUIZ WEBAPP</h1>
        <p>Test your knowledge</p>
        <button onClick={props.isQuizStarted}>Start Quiz</button>
        <img className="blob-top" src={blobTop} alt="" />
        <img className="blob-bottom" src={blobBottom} alt="" />
    </div>
    </>
  )
}

export default LandingPage