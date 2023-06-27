export function commonInfo() {
    class Car {
        constructor(make, speed, currentSpeed = 0) {
            this.make = make;
            this.speed = speed;
            this.currentSpeed = currentSpeed;
        }
        set accelearate(accel) {
            this.currentSpeed = this.currentSpeed + accel;
        }
        get accelearate() {
            return this.currentSpeed;
        }
        set brake(br) {
            this.currentSpeed = this.currentSpeed - br;
        }
        get brake() {
            return this.currentSpeed;
        }
        get speedUS() {
            return this.speed = this.speed / 1.6;
        }
        set speedUS(speed) {
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
        constructor(owner, movements) {
            this.owner = owner;
            this.movements = movements;
        }
        get latest() {
            return this.movements.at(-1);
        }
        ;
        set latest(mov) {
            this.movements.push(mov);
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
//# sourceMappingURL=commonInfo.js.map