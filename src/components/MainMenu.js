import React, {useContext} from 'react'
import { QuizContext } from '../Helpers/Context'
import "../App.css"



function MainMenu() {
const { gameState, setGameState } = useContext(QuizContext)

  return (
    <div className='menu'>
        
        <button
        onClick={() => setGameState("quiz") }
        className='start-btn'
        > 
        Start the quiz 
        </button>
         
    </div>
  )
}

export default MainMenu