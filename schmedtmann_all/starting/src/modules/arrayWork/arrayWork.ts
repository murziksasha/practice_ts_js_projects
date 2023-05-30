

export function arrayWork(){
  const neigboursOfUkraine = ['Belarus', 'Poland', 'Russia', 'Slovakia', 'Hungary', 'Rumunia', 'Moldova', 'Slovenia', 'Chezh', 'Republic of Germany'];
  const utopiaCountry = Array.from(neigboursOfUkraine);
  console.log(utopiaCountry);
  if(!utopiaCountry.includes('Germany')){
    console.log('Probably utopia is not European country!~')
  }
}