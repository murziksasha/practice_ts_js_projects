export default function primitives() {


  interface ICar {
    wheels: number;
    brand: string;
    type: string;
    isNew?: boolean;
    name?: string;
    [key: string]: unknown;
  }

  const car: ICar = {
    wheels: 4,
    brand: 'Mercedez Benz',
    type: 'Sedan',
    isNew: false,
    name: 'A170',
  };

  const car2: ICar = {
    brand: 'Audi',
    type: 'Sedan',
    wheels: 4,
  }

  car2.go = 100;

  console.log(car2);



  
}
