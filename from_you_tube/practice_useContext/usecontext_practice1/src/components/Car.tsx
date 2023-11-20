import { useContext } from 'react';
import { CarContext } from './context/Context';


interface ICarProps {
  model: string
}

export function Car({model}: ICarProps) {
  const data = useContext(CarContext);
  return (
    <div>
      <h1>{model}</h1>
      <button onClick={() => data.deleteCar(model)}>Delete {model}</button>
    </div>
  )
}
