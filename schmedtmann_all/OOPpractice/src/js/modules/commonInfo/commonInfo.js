export function commonInfo() {
    var _a;
    class Car {
        constructor(make, speed, currentSpeed = 0) {
            this.make = make;
            this.speed = speed;
            this.currentSpeed = currentSpeed;
        }
        set accelearate(accel) {
            this.speed = this.speed + accel;
        }
        get accelearate() {
            return this.speed;
        }
        set brake(br) {
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
        constructor(charge, make, speed) {
            super(make, speed);
            this.charge = charge;
            this.make = make;
            this.speed = speed;
        }
    }
    const tesla = new ElectricCar(100, 'Tesla', 300);
    //////////////////////////////////////////////\
    class Account {
        constructor(owner, currency, _pin, movement = [], locale = navigator.language) {
            this.owner = owner;
            this.currency = currency;
            this._pin = _pin;
            this.movement = movement;
            this.locale = locale;
            console.log(`Thanks for openning account ${owner}`);
        }
        deposit(val) {
            this.movement.push(val);
            return this;
        }
        withdraw(val) {
            this.deposit(-val);
            return this;
        }
        approveLoan(val) {
            return true;
        }
        requestLoan(val) {
            if (this.approveLoan(val)) {
                this.deposit(val);
                console.log(`Loan approved`);
                return this;
            }
        }
        get getMovement() {
            return this.movement;
        }
    }
    const acc1 = new Account('Sasha', 'UAH', 1111);
    acc1.deposit(250);
    acc1.withdraw(111);
    acc1.requestLoan(1000);
    console.log(acc1);
    console.log(acc1.getMovement);
    (_a = acc1.deposit(300).deposit(50).withdraw(35).requestLoan(2500)) === null || _a === void 0 ? void 0 : _a.withdraw(4000);
    console.log(acc1.getMovement);
}
//# sourceMappingURL=commonInfo.js.map