
import { useQuestions } from '../utils/context'


export default function StartScreen() {
  const {numQuestions, dispatch} = useQuestions();
  
  function handleClick(){
    dispatch({type: 'start'})
  }
  return (
    <div className='start'>
      <h2>Welcome to the REACT QUIZ</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button 
        className='btn btn-ui'
        onClick={handleClick}
        >Let's start</button>
    </div>
  )
}
