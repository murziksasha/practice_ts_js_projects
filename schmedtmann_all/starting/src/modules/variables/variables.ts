

export function variables() {

  const age = 9;
  const isOldEnough = age >= 18;
  const birthYear = 1985;

  if(isOldEnough){
    console.log(`Vasiliy can start driving licensce 🚗`)
  } else {
    const yearsLeft = 18 - age;
    console.log(`Person have ${age} years old it is too a little for driving ... 🐶
    You need wait to ${yearsLeft}
    `)
  }

  let century = birthYear <= 2000 ? 20 : 21;

  console.log(`this brave person born in ${century} century`);





};