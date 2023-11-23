import { useState, useReducer } from 'react';
import './App.css';

interface State {
  autoplay: number | boolean;
}

function reducer(state: State, action: { type: string; payload?: any }) {
  switch (action.type) {
    case 'toggle':
      return { ...state, autoplay: !state.autoplay };
    case 'slow':
      // Update state for 'slow' action
      return { ...state, autoplay: 300 };
    case 'fast':
      // Update state for 'fast' action
      return { ...state, autoplay: 700 };
    case 'custom':
      // Update state for 'custom' action with the payload value
      return { ...state, autoplay: action.payload };
    default:
      console.log('unknown state in reducer...');
      return state;
  }
}

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const [state, dispatch] = useReducer(reducer, { autoplay: false });

  function changeSlide(i: number) {
    setSlide((slide) => slide + i);
  }

  return (
    <>
      <div className="slider w-50 m-auto">
        <img
          className="d-block w-100"
          src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          alt="slide"
        />
        <div className="text-center mt-5">
          Active slide {slide} <br />
          {state.autoplay ? 'auto' : null}
        </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}
          >
            +1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => dispatch({ type: 'toggle' })}
          >
            toggle autoplay
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => dispatch({ type: 'slow' })}
          >
            slow
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => dispatch({ type: 'fast' })}
          >
            fast
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={(e) => dispatch({ type: 'custom', payload: Number((e.target as HTMLButtonElement).textContent) })}
          >
            1000
          </button>
        </div>
      </div>
    </>
  );
};

function App() {
  return <Slider />;
}

export default App;
