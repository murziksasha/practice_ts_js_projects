

import { useQuestions } from '../utils/context';
import VariantsOfAnswers from './VariantsOfAnswers';

export default function Question() {
  const {currentQuestion} = useQuestions();
  return (
    <div className='options'>
      <h4>{currentQuestion?.question}</h4>
      <VariantsOfAnswers />
    </div>
  )
}
