import { useState } from "react"
import "./App.css"
import LandingPage from "./components/LandingPage"
import Quiz from "./components/Quiz"


const App = () => {
  const [isQuizStarted,setisQuizStarted] = useState(false)

  function handleClick(){
    setisQuizStarted((prev) => !prev)
  }
  return (
   <>
   {
    isQuizStarted ? <Quiz/> : <LandingPage isQuizStarted={handleClick}/>
   }
   </>
  )
}

export default App;