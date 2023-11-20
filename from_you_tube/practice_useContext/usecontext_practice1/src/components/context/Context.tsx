import { useState, createContext, ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

export interface ICar {
  model: string;
  id: number;
}

interface ICarContext {
  carData: ICar[];
  deleteCar: (carModel: string) => void;
}

export const CarContext = createContext<ICarContext>({  
  carData: [],
  deleteCar: () => {},
});

export function Context(props: ContextProps) {

  const [carData, setCarData] = useState<ICar[]>([
    { model: 'BMW', id: 1 },
    { model: 'Volga', id: 2 },
    { model: 'Mercedes', id: 3 },
  ]);
  
  const deleteCar = (carModel: string) => {
    setCarData(
      carData.filter(({model}: ICar) => {
        return model !== carModel;
      })
    )
  }

  const value = {
    carData,
    deleteCar
  }


  return <CarContext.Provider value={value}>
    {props.children}
  </CarContext.Provider>
}
