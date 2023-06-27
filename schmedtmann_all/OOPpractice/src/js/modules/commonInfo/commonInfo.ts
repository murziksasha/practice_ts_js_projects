
interface myCar {
  make: string;
  speed: number;
}

export function commonInfo() {

  class Car implements myCar{
    constructor(public make: string, public speed: number, private currentSpeed: number = 0){}
    accelearate(accel = 10) {
      this.currentSpeed = this.currentSpeed  + accel;
      console.log(this.currentSpeed)
    }
    brake(br = 5) {
      this.currentSpeed = this.currentSpeed - br;
      console.log(this.currentSpeed);
    }
  }

  // const honda = new Car('honda', 220);

  // console.log(honda);
  // honda.accelearate(100);
  // honda.accelearate();
  // honda.brake ();
  // honda.brake (50);
  // honda.brake ();

  // const hyndaiGetz = new Car('Hyndai Getz', 200);
  // console.log('working with hynday Getz')
  // hyndaiGetz.accelearate(50);
  // hyndaiGetz.accelearate(100);
  // hyndaiGetz.brake()


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
  }

  const myAccount = new Account('Sasha', [200, 530, 120, 300]);

  console.log(myAccount.latest);
  myAccount.latest = 150;
  console.log(myAccount.latest);
  console.log(myAccount.movements)


}