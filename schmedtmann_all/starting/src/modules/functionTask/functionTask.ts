

export function functionTask() {
  const currYear = 2023;

  const calcAge =  (birthYear: number) => {
    return currYear - birthYear;
  }

  const calcRetirement = (age: number) => {
    return 65 - age;
  }

  function yearsUntilRetirement(birthYear: number, firstName: string){
    const age = calcAge(birthYear);
    const retirement = calcRetirement(age);
    if(retirement > 0 && retirement < 65){
      return `${firstName} retires in ${retirement} years`;
    } else {
      return `something wrong, age ${age}, retirement is ${retirement}, check input value please`;
    }
  }

  console.log(yearsUntilRetirement(2025, 'Sasha'))

};