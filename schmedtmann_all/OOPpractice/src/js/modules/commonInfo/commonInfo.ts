
interface myCar {
  make: string;
  speed: number;
}

export function commonInfo() {

  class Car implements myCar{
    constructor(public make: string, public speed: number, private currentSpeed: number = 0){}
    set accelearate(accel: number) {
      this.currentSpeed = this.currentSpeed  + accel;
    }

    get accelearate(){
      return this.currentSpeed;
    }

    set brake(br: number) {
      this.currentSpeed = this.currentSpeed - br;
    }

    get brake() {
      return this.currentSpeed;
    }

    get speedUS() {
      return this.speed = this.speed / 1.6;
    }

    set speedUS(speed){
      this.speed = speed * 1.6;
    }
  }


  console.log('-------------------------------');
  const hyndaiGetz = new Car('Hyndai Getz', 185);
  hyndaiGetz.accelearate = 10;
  console.log(hyndaiGetz.accelearate);
  console.log(hyndaiGetz.brake);


  ////////////////////////////

  class Account {
    owner: string;
    movements: number[];

    constructor(owner: string, movements: number[]){
      this.owner = owner;
      this.movements = movements;    
    }

    get latest() {
      return this.movements.at(-1)  as number;
    };

    set latest(mov: number){
      this.movements.push(mov)
    }

    static hey() {
      console.log('Hello');
    }
  }

  const myAccount = new Account('Sasha', [200, 530, 120, 300]);

  // console.log(myAccount.latest);
  // myAccount.latest = 150;
  // console.log(myAccount.latest);
  // console.log(myAccount.movements);






}