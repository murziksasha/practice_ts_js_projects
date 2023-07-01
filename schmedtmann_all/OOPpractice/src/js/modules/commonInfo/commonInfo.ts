interface myCar {
  make: string;
  speed: number;
}

export function commonInfo() {


  class Car implements myCar {
    constructor(
      public make: string,
      public speed: number,
      private currentSpeed: number = 0
    ) {}
    set accelearate(accel: number) {
      this.speed = this.speed + accel;
    }

    get accelearate() {
      return this.speed;
    }

    set brake(br: number) {
      this.speed = this.speed - br;
    }

    get brake() {
      return this.speed;
    }

    get speedUS() {
      return (this.speed = this.speed / 1.6);
    }

    set speedUS(speed) {
      this.speed = speed * 1.6;
    }
  }

  class ElectricCar extends Car {
    constructor(
      private _charge: number,
      public make: string,
      public speed: number
    ) {
      super(make, speed);
    }
  }

  const tesla = new ElectricCar(100, 'Tesla', 300);

  class EVCL extends ElectricCar {
    constructor(
      make: string,
      speed: number,
    ){
      super(100, make, speed);
    }
  }

  const rivianCar = new EVCL('EVCL', 220);

  rivianCar.accelearate = 50;
  rivianCar.brake = 5;
  console.log(rivianCar.make)

  console.log(rivianCar);



  //////////////////////////////////////////////\

  class Account {
    constructor(
      public owner: string,
      public currency: string,
      private _pin: number,
      private movement: number[] = [],
      private locale: string = navigator.language
    ) {
      console.log(`Thanks for openning account ${owner}`)
    }
    deposit(val: number){
      this.movement.push(val);
      return this;
    }
    withdraw(val: number){
      this.deposit(-val);
      return this;
    }
    private approveLoan(val: number) {
      return true
    }
    requestLoan(val: number){
      if(this.approveLoan(val)){
        this.deposit(val);
        console.log(`Loan approved`);
        return this;
      }
    }
    get getMovement(){
      return this.movement;
    }
  }

  const acc1 = new Account('Sasha', 'UAH', 1111);

  // acc1.deposit(250);
  // acc1.withdraw(111);
  // acc1.requestLoan(1000);
  // console.log(acc1);
  // console.log(acc1.getMovement);

  // acc1.deposit(300).deposit(50).withdraw(35).requestLoan(2500)?.withdraw(4000);

  // console.log(acc1.getMovement);


}
