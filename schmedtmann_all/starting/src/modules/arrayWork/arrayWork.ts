

export function arrayWork(){
  const myCountry = {
    country: 'Ukraine',
    capital: 'Kyiv',
    language: 'ukrainian',
    population: 40,
    neigbours: ['Poland', 'Belarus', 'Russia'],
    describe: function(){
      return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neigbours ? this.neigbours.length : 'no'} neighbouring countries 
      and a capital called ${this.capital}`
    },
    isIsland: function(){
      return this.neigbours ? true : false;
    }
  }
  // console.log(myCountry.describe());
  // console.log(myCountry.isIsland());

  const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

  listOfNeighbours.forEach(itemArr => {
    if(itemArr.length > 1){
      itemArr.forEach(item =>{
        console.log(`Neighbour: ${item}`)
      });
    } else {
      console.log(`Neighbour: ${itemArr}`)
    }
  })

}