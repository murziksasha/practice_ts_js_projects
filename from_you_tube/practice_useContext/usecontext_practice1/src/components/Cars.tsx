
import { Car } from "./Car";
import { ICar } from "./context/Context";

interface ICarsProps {
  carData: ICar[];
};



export const Cars = ({carData}: ICarsProps) => {


  return (
    <div>
      {carData.map((oneCar: ICar) => {
        return (
          <Car
            key = {oneCar.id}
            model={oneCar.model}
          />
        )
      })}
    </div>
  );
};