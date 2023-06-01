

export function objectWork() {
  const sasha = {
    firstName: 'Sasha',
    lastName: 'Grygoriev',
    birthYear: 1985,
    job: 'CEO repair service and frontend developer',
    location: 'Ukraine, Chernomorsk',
    employers: ['Kostya', 'Andrey', 'Daniil'],
    age: 0,
    hasDriverLicense: true,
    calcAge: function(yearNow: number){
      this.age = yearNow - this.birthYear;
      return this.age;
    },
    getSummary: function(){
      return `${this.firstName} is a ${this['calcAge'](2023)} old CEO, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`
    }
  }
  console.log(`${sasha.firstName} has ${sasha.employers.length} employers, and his best employers called ${sasha.employers[0]}`);

  console.log(sasha.getSummary())

  

}