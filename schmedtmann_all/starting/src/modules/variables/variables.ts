

export function variables() {

  const percentageOfWorld: (country: string, population: number) => string = (country: string, population: number) => {
    const worldPopulation = 7900;
    let percentValue =  population /  worldPopulation * 100;
    let percentValueString =  percentValue.toFixed() + '%';
    return  `${country} has ${population} million people, which is about ${percentValueString} of the world.`
  };

  console.log(percentageOfWorld('China', 1441))
  console.log(percentageOfWorld('Urkaine', 40))
  console.log(percentageOfWorld('Russia', 240))



};