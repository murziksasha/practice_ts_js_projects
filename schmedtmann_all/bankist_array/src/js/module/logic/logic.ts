interface Account {
  owner: string,
  movements: number[],
  interestRate: number,
  pin: number,
  movementsDates: string[],
  currency: string,
  locale: string,
  userName?: string,
  balance?: number,
};


export function logic() {
  const appElement = document.querySelector('.app') as HTMLDivElement;

  let timer: number;
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1: Account = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-05-01T17:01:17.194Z',
    '2023-06-16T23:36:17.929Z',
    '2023-06-18T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2: Account = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

// const account3: Account = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4: Account = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

const accounts: Account[] = [account1, account2];

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

function formatMovementDate(date: Date) {
  const calcDaysPassed = (date1: Date, date2: Date): number => {
    return Math.round(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24));
  };
  const daysPassed = calcDaysPassed(new Date(), date);
  if(daysPassed === 0 ) return `Today`;
  if(daysPassed === 1) return `Yesterday`;
  if(daysPassed <= 7) {
    return `${daysPassed} days ago`;
  }
    // const day = `${date.getDate()}`.padStart(2, '0');
    // const month = `${date.getMonth() + 1}`.padStart(2, '0');
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return `${new Intl.DateTimeFormat(currentAccount?.locale).format(date)}`
}

function formatNumberIntl(num: number) {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: `${currentAccount?.currency}`,
  }
  return new Intl.NumberFormat(currentAccount?.locale, options).format(num);
}

const formatCur = (value: number, locale: string, currency: string) => {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: currency,
  }
  return new Intl.NumberFormat(locale, options).format(value);
} 


function displayMovements(arr: number[]) {

  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: `${currentAccount?.currency}`,
  }

  if(containerMovements !== null){
    containerMovements.innerHTML = '';
    arr.forEach((item, i) => {
      let date: Date;
      let displayDate: string = '';
      if(currentAccount !== undefined){
        date = currentAccount.movementsDates[i] ? new Date(currentAccount.movementsDates[i]) : new Date;
        displayDate = formatMovementDate(date);
      }
      const meaning = item > 0 ? 'deposit' : 'withdrawal';
       const html  = `  
        <div class="movements__row">
          <div class="movements__type movements__type--${meaning}">${i+1} ${meaning}</div>
          <div class="movements_date">${displayDate}</div>
          <div class="movements__value">${formatNumberIntl(item)}</div>
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
    labelSumIn.textContent = `${incomes.toFixed(2)}€`;
  }
  if (labelSumOut !== null && outGo !== null) {
    labelSumOut.textContent = `${Math.abs(outGo).toFixed(2)}€`;
  }
  if(labelSumInterest !== null && interest){
    labelSumInterest.textContent = `${interest.toFixed(2)}€`;
  }
}

const calcDisplayBalance = (acc: Account) => {

  //experementing with INTL Api
  const calcIntlPassed = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      weekday: 'short',
    };

    // return `${new Intl.DateTimeFormat('en-US', options).format(date)}`;
    return `${new Intl.DateTimeFormat(currentAccount?.locale, options).format(date)}`;

  }

  const calcDaysPassed = (date: Date): string => {
    const day = `${date.getDate()}`.padStart(2, '0');
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const year = date.getFullYear();
    const hours = `${date.getHours()}`.padStart(2, '0');
    const minutes = `${date.getMinutes()}`.padStart(2, '0');
    return `${day}/${month}/${year}, ${hours}:${minutes}`;
  };

  if(labelDate !== null){
    labelDate.textContent = `${calcIntlPassed(new Date())}`;
  }
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur);
  if(labelBalance && labelBalance !== null){
    labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
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

const startLogOutTimer = (time: number = 100) => {
  
    if(timer)clearInterval(timer);

  
    timer = setInterval(() => {
    const min = Math.trunc(time / 60);
    const sec = time % 60;
    if(labelTimer) {
      labelTimer.textContent = `${String(min).padStart(2, '0')} : ${String(sec).padStart(2, '0')}`;
      
    }
    if(min === 0 && sec === 0) {
      clearInterval(timer);
      appElement.style.opacity = '0';
      if(labelWelcome)labelWelcome.textContent = `Log in to get started`;
    } 
    time--;
  }, 1000);
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
  
  startLogOutTimer();
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
  startLogOutTimer(200);
});

btnLoan?.addEventListener('click', e => {
  e.preventDefault();
  const amount = inputLoanAmount ? +(inputLoanAmount.value): null;
  if (amount && amount > 0 && currentAccount?.movements && currentAccount?.movements.some(mov => mov >= amount * 0.1)){
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
  startLogOutTimer(200);
});


btnClose?.addEventListener('click', e => {
  if(timer) clearInterval(timer);
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

let ifSort = true;
btnSort?.addEventListener('click', e => {
  e.preventDefault();
  if(currentAccount) {
    const sortAccount = {...currentAccount};
    sortAccount.movements = [...currentAccount.movements];
    if(ifSort){
      sortAccount.movements.sort((a, b) => a - b);
      updateUI(sortAccount);
    } else {
      updateUI(currentAccount);
    }
    ifSort = !ifSort;
  }
})


/////////////////////////////////////////////////

// setTimeout((...args: string[])=> console.log(`Here is your 🍕🍕🍕 ${args.join(' ')}`), 1000, 'success', 'strong', 'gratitude');

const num = 3884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  useGrouping: false,
}

// console.log('US:     ', new Intl.NumberFormat('en-US').format(num));
// console.log('German:     ', new Intl.NumberFormat('de-DE', options).format(num));
// console.log('Russian:     ', new Intl.NumberFormat('ru-RU', options).format(num));
// console.log(`${navigator.language}:     `, new Intl.NumberFormat(navigator.language, options).format(num));





//simple practice with date


const daysPassed = (date1: Date, date2: Date): number => {
  return Math.abs(date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
};

const days1: number = daysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));

// console.log(days1);



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

  interface Dog {
    weight: number;
    curFood: number;
    owners: string[];
    recFood: number;
  }

  const dogs: Dog[] = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'], recFood: 0 },
    { weight: 8, curFood: 200, owners: ['Matilda'], recFood: 0 },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'], recFood: 0 },
    { weight: 32, curFood: 340, owners: ['Michael'], recFood: 0 },
    ];

    const ownersEatTooMuch: string[] = [];
    const ownersEatTooLittle: string[] = [];
    let resultStringTooMuch = `'s dogs eat too much!`;
    let resultStringTooLittle = `'s dogs eat too little!`;
    const dogOk: number[] = [];

    dogs.forEach((item: Dog, i) => (item.recFood = Math.trunc(item.weight ** 0.75 * 28)));

    dogs.forEach((item, i) => {
      item.owners.forEach(owners => {
        if (owners === 'Sarah') {
          if(item.recFood){
            // item.curFood > item.recFood ? console.log(`Sarah's dogs eat too much ! current ${item.curFood} vs recommend: ${item.recFood} `) : console.log(`they eat a little curr ${item.curFood} vs recom. ${item.recFood}`);
          }
        }
      });
      if(item.curFood !== undefined){
        item.curFood > item.recFood ? ownersEatTooMuch.push(...item.owners) : ownersEatTooLittle.push(...item.owners);
      }

    });

    // console.log(ownersEatTooMuch.join(' and ') + resultStringTooMuch);
    // console.log(ownersEatTooLittle.join(' and ') + resultStringTooLittle);
    


    const tenPercent = (forResult: number, minus?: string) => {
      if(minus === '-'){
        return forResult -= (forResult * 10 / 100);
      }
      return forResult += (forResult * 10 / 100);
    }

    for(let i = 0; i < dogs.length; i++ ){
      // if(dogs[i].curFood === dogs[i].recFood) console.log(`exactly match curr food and recomm`);
      // console.log(dogs[i].curFood + '   ' + dogs[i].recFood + '   ' + `percent ${tenPercent(dogs[i].recFood)} min ${tenPercent(dogs[i].recFood, '-')}`)
        if(dogs[i].curFood < tenPercent(dogs[i].recFood) || dogs[i].curFood > tenPercent(dogs[i].recFood, '-') ){
          dogOk.push(dogs[i].curFood);
        }
    }

    // console.log(dogOk);

    // const sortedArr = [...dogs];

    // console.log(sortedArr.sort((a, b) => a.recFood - b.recFood));


}