
interface PersonBMI {
  fullName: string,
  mass: number,
  height: number,
  BMI: () => string,
}

export function bmiCalc(marksMass: number, markHeight: number, johnMass: number, johnHeight: number) {
  const markMiller: PersonBMI = {
    fullName: 'Mark Miller',
    mass: marksMass,
    height: markHeight,
    BMI: function(){
      return (this.mass / this.height ** 2).toFixed(2);
    }
  }

  const johnSmith: PersonBMI = {
    fullName: 'John Smith',
    mass: johnMass,
    height: johnHeight,
    BMI: function(){
      return (this.mass / this.height ** 2).toFixed(2);
    }
  }


  const marksBMI = markMiller.BMI();
  const johnBMI = johnSmith.BMI();

  const markHigherBMI = marksBMI > johnBMI;

  if(markHigherBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnBMI})!`);
  } else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${marksBMI})!`)
  }

}