interface Account {
  owner: string,
  movements: number[],
  interestRate: number,
  pin: number,
  userName?: string,
};


export function logic() {
  const appElement = document.querySelector('.app') as HTMLDivElement;
  if( appElement !== null) {
    appElement.style.opacity = '100';
  }
  
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1: Account = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2: Account = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3: Account = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4: Account = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

function displayMovements(arr: number[]) {
  if(containerMovements !== null){
    containerMovements.innerHTML = '';
    arr.forEach((item, i) => {
      const meaning = item > 0 ? 'deposit' : 'withdrawal';
       const html  = `  
        <div class="movements__row">
          <div class="movements__type movements__type--${meaning}">${i+1} ${meaning}</div>
          <div class="movements__value">${item}€</div>
        </div>
      `;
      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
  }

}

displayMovements(movements);


const createUserNames = (accs: Account[]) => {

  accs.forEach(acc => {
    acc.userName = acc.owner.toLowerCase().split(' ').map(item => item = item[0]).join('');
  })
};

createUserNames(accounts);

const deposists = movements.filter((a, b) => a > b);

console.log(deposists);

const withdrawals = movements.filter((a, b) => a < b);

console.log(withdrawals);

const totalDeposits = deposists.reduce((acc, curr) => acc + curr, 0);
console.log(totalDeposits);
const totalWithdraws = withdrawals.reduce((acc, curr) => acc + curr, 0);
console.log(totalWithdraws);

/////////////////////////////////////////////////

//Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
//Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

  function checkDogs(arr1: number[], arr2: number[]){
    const withoutCat = arr1.slice(1, -2);
    const resultArr = [...withoutCat, ...arr2];
    console.log(resultArr);
    resultArr.forEach((item, i) => {
      console.log(item > 3 ? `Dog number ${i+1} is an adult, and is ${item} years old`: `Dog number ${i + 1} is still a puppy 🐶`);
    });
  }

  // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
  // checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

  function calcAverageHumanAge(array: number[]): number {
    const resultArray: number[] = array.map((ageDog: number): number  => ageDog <= 2 ? 2 * ageDog : 16 + ageDog * 4).filter((a: number): boolean => a >= 18);
  
    const sum: number = resultArray.reduce((acc: number, cur: number): number => acc + cur, 0);
    const average: number = sum / resultArray.length;
  
    return +average.toFixed();
  }

  const resultantAge =  calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
  // const resultantAge =  calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

  console.log(resultantAge)


}