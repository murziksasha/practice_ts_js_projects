interface Account {
  owner: string,
  movements: number[],
  interestRate: number,
  pin: number,
  userName?: string,
  balance?: number,
};


export function logic() {
  const appElement = document.querySelector('.app') as HTMLDivElement;

  
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

const accounts: Account[] = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app') as HTMLDivElement;
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user') as HTMLInputElement;
const inputLoginPin = document.querySelector('.login__input--pin') as HTMLInputElement;
const inputTransferTo = document.querySelector('.form__input--to') as HTMLInputElement;
const inputTransferAmount = document.querySelector('.form__input--amount') as HTMLInputElement;
const inputLoanAmount = document.querySelector('.form__input--loan-amount') as HTMLInputElement;
const inputCloseUsername = document.querySelector('.form__input--user') as HTMLInputElement;
const inputClosePin = document.querySelector('.form__input--pin') as HTMLInputElement;

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


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



const calcDisplaySummary = (accs: Account) => {
  const incomes = accs.movements.filter((a) => a > 0)?.reduce((acc, curr) => acc + curr, 0);
  const outGo = accs.movements.filter((a) => a < 0)?.reduce((acc, curr) => acc + curr, 0);
  const interest = accs.movements.filter(mov => mov > 0).map(deposit => deposit * accs.interestRate / 100).filter(a => a >= 1)?.reduce((acc, curr) => acc + curr, 0);
  if (labelSumIn !== null){
    labelSumIn.textContent = `${incomes}€`;
  }
  if (labelSumOut !== null && outGo !== null) {
    labelSumOut.textContent = `${Math.abs(outGo)}€`;
  }
  if(labelSumInterest !== null && interest){
    labelSumInterest.textContent = `${interest}€`;
  }
}

const calcDisplayBalance = (acc: Account) => {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur);
  if(labelBalance && labelBalance !== null){
    labelBalance.textContent = `${acc.balance}€`;
  }
}



const createUserNames = (accs: Account[]) => {

  accs.forEach(acc => {
    acc.userName = acc.owner.toLowerCase().split(' ').map(item => item = item[0]).join('');
  })
};

createUserNames(accounts);

let currentAccount: Account | undefined;

const updateUI = (arr: Account) =>{
  //display movements
  displayMovements(arr.movements);

  //display balance
  calcDisplayBalance(arr);

  //display summary
  calcDisplaySummary(arr);
}

btnLogin?.addEventListener('click', e => {
  e.preventDefault();
  if(inputLoginUsername !== null){
    currentAccount = accounts.find(acc => acc.userName === inputLoginUsername.value);
  }
  if(currentAccount && inputLoginPin){
    if(currentAccount.pin === +inputLoginPin.value){
      if( appElement !== null) {
        appElement.style.opacity = '100';
      }
      //clear the input field
      inputLoginUsername.value = inputLoginPin.value =  '';
      inputLoginPin.blur();

      //display UI and message
      labelWelcome ? labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}!` : null;
      
      
      
    }
  }
  if(currentAccount){
    updateUI(currentAccount);
  }

});


btnTransfer?.addEventListener('click', e => {
  e.preventDefault();
  if(inputTransferAmount && inputTransferAmount.value !== null ){
    const amount = +inputTransferAmount.value;
    const receiverAcc = accounts.find(acc => acc.userName === inputTransferTo.value);
    if (amount > 0 && currentAccount && currentAccount.balance !== undefined && currentAccount.balance >= amount && receiverAcc?.userName !== currentAccount.userName) {
      currentAccount.movements.push(-amount);
      receiverAcc?.movements.push(amount);
      updateUI(currentAccount);
      inputTransferTo.value = inputTransferAmount.value = '';
    }
  }
});

btnLoan?.addEventListener('click', e => {
  e.preventDefault();
  const amount = inputLoanAmount ? +(inputLoanAmount.value): null;
  if (amount && amount > 0 && currentAccount?.movements && currentAccount?.movements.some(mov => mov >= amount * 0.1)){
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});


btnClose?.addEventListener('click', e => {
  e.preventDefault();
  if(inputCloseUsername !== null && inputClosePin !== null){
    if(inputCloseUsername.value === currentAccount?.userName && +inputClosePin.value === currentAccount.pin) {
      const index = accounts.findIndex( acc => acc.userName === currentAccount?.userName);
      accounts.splice(index, 1);
      inputCloseUsername.value = inputClosePin.value = '';
      if(containerApp)containerApp.style.opacity = '0';
    }

  }
});


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

  // console.log(resultantAge)

  const testFlat = [[1,42, 3], [4, 88, 54], 99, 75];
  const testDeepFlat = [[1,42, [44, 55, 66]], [4, 88, 54], 99, 75];

  console.log(testFlat.flat());
  console.log(testDeepFlat.flat(2));


  //flat
  const accountMovements = accounts.map( acc => acc.movements);
  console.log(accountMovements.flat().reduce((acc, cur) => acc + cur, 0));

  //flatMap
  const flatMapExample = accounts.flatMap( acc => acc.movements).reduce((acc, cur) => acc + cur, 0);
  console.log(flatMapExample);


}