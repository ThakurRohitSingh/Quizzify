import { useState } from "react"
import "./App.css"
import OpeningPage from "./components/OpeningPage"
import Quiz from "./components/Quiz"


const App = () => {
  const [isQuizStarted,setisQuizStarted] = useState(false)

  function handleClick(){
    setisQuizStarted((prev) => !prev)
  }
  return (
   <>
   {
    isQuizStarted ? <Quiz/> : <OpeningPage isQuizStarted={handleClick}/>
   }
   </>
  )
}

export default App;