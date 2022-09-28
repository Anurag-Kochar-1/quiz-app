import React, {useContext} from 'react'
import "../App.css"
import { Questions } from '../Helpers/QuestionBank'
import { QuizContext } from '../Helpers/Context'


function EndScreen() {
  const {score, setScore, setGameState} = useContext(QuizContext)

  return (
    <div className='endScreen'>
        <h1> {Questions.length} / {score} </h1>
        <button onClick={() => {
          setScore(0)
          setGameState("menu")
        }} 
        className="reset-quiz-btn"
        > Reset Quiz </button>
    </div>
  )
}

export default EndScreen