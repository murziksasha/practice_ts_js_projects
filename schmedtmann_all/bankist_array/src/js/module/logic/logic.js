;
export function logic() {
    const appElement = document.querySelector('.app');
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    // BANKIST APP
    // Data
    const account1 = {
        owner: 'Jonas Schmedtmann',
        movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
        interestRate: 1.2,
        pin: 1111,
    };
    const account2 = {
        owner: 'Jessica Davis',
        movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
        interestRate: 1.5,
        pin: 2222,
    };
    const account3 = {
        owner: 'Steven Thomas Williams',
        movements: [200, -200, 340, -300, -20, 50, 400, -460],
        interestRate: 0.7,
        pin: 3333,
    };
    const account4 = {
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
    function displayMovements(arr) {
        if (containerMovements !== null) {
            containerMovements.innerHTML = '';
            arr.forEach((item, i) => {
                const meaning = item > 0 ? 'deposit' : 'withdrawal';
                const html = `  
        <div class="movements__row">
          <div class="movements__type movements__type--${meaning}">${i + 1} ${meaning}</div>
          <div class="movements__value">${item.toFixed(2)}€</div>
        </div>
      `;
                containerMovements.insertAdjacentHTML('afterbegin', html);
            });
        }
    }
    const calcDisplaySummary = (accs) => {
        var _a, _b, _c;
        const incomes = (_a = accs.movements.filter((a) => a > 0)) === null || _a === void 0 ? void 0 : _a.reduce((acc, curr) => acc + curr, 0);
        const outGo = (_b = accs.movements.filter((a) => a < 0)) === null || _b === void 0 ? void 0 : _b.reduce((acc, curr) => acc + curr, 0);
        const interest = (_c = accs.movements.filter(mov => mov > 0).map(deposit => deposit * accs.interestRate / 100).filter(a => a >= 1)) === null || _c === void 0 ? void 0 : _c.reduce((acc, curr) => acc + curr, 0);
        if (labelSumIn !== null) {
            labelSumIn.textContent = `${incomes.toFixed(2)}€`;
        }
        if (labelSumOut !== null && outGo !== null) {
            labelSumOut.textContent = `${Math.abs(outGo).toFixed(2)}€`;
        }
        if (labelSumInterest !== null && interest) {
            labelSumInterest.textContent = `${interest.toFixed(2)}€`;
        }
    };
    const calcDisplayBalance = (acc) => {
        acc.balance = acc.movements.reduce((acc, cur) => acc + cur);
        if (labelBalance && labelBalance !== null) {
            labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
        }
    };
    const createUserNames = (accs) => {
        accs.forEach(acc => {
            acc.userName = acc.owner.toLowerCase().split(' ').map(item => item = item[0]).join('');
        });
    };
    createUserNames(accounts);
    let currentAccount;
    const updateUI = (arr) => {
        //display movements
        displayMovements(arr.movements);
        //display balance
        calcDisplayBalance(arr);
        //display summary
        calcDisplaySummary(arr);
    };
    btnLogin === null || btnLogin === void 0 ? void 0 : btnLogin.addEventListener('click', e => {
        e.preventDefault();
        if (inputLoginUsername !== null) {
            currentAccount = accounts.find(acc => acc.userName === inputLoginUsername.value);
        }
        if (currentAccount && inputLoginPin) {
            if (currentAccount.pin === +inputLoginPin.value) {
                if (appElement !== null) {
                    appElement.style.opacity = '100';
                }
                //clear the input field
                inputLoginUsername.value = inputLoginPin.value = '';
                inputLoginPin.blur();
                //display UI and message
                labelWelcome ? labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}!` : null;
            }
        }
        if (currentAccount) {
            updateUI(currentAccount);
        }
    });
    btnTransfer === null || btnTransfer === void 0 ? void 0 : btnTransfer.addEventListener('click', e => {
        e.preventDefault();
        if (inputTransferAmount && inputTransferAmount.value !== null) {
            const amount = +inputTransferAmount.value;
            const receiverAcc = accounts.find(acc => acc.userName === inputTransferTo.value);
            if (amount > 0 && currentAccount && currentAccount.balance !== undefined && currentAccount.balance >= amount && (receiverAcc === null || receiverAcc === void 0 ? void 0 : receiverAcc.userName) !== currentAccount.userName) {
                currentAccount.movements.push(-amount);
                receiverAcc === null || receiverAcc === void 0 ? void 0 : receiverAcc.movements.push(amount);
                updateUI(currentAccount);
                inputTransferTo.value = inputTransferAmount.value = '';
            }
        }
    });
    btnLoan === null || btnLoan === void 0 ? void 0 : btnLoan.addEventListener('click', e => {
        e.preventDefault();
        const amount = inputLoanAmount ? +(inputLoanAmount.value) : null;
        if (amount && amount > 0 && (currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.movements) && (currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.movements.some(mov => mov >= amount * 0.1))) {
            currentAccount.movements.push(amount);
            updateUI(currentAccount);
        }
        inputLoanAmount.value = '';
    });
    btnClose === null || btnClose === void 0 ? void 0 : btnClose.addEventListener('click', e => {
        e.preventDefault();
        if (inputCloseUsername !== null && inputClosePin !== null) {
            if (inputCloseUsername.value === (currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.userName) && +inputClosePin.value === currentAccount.pin) {
                const index = accounts.findIndex(acc => acc.userName === (currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.userName));
                accounts.splice(index, 1);
                inputCloseUsername.value = inputClosePin.value = '';
                if (containerApp)
                    containerApp.style.opacity = '0';
            }
        }
    });
    let ifSort = true;
    btnSort === null || btnSort === void 0 ? void 0 : btnSort.addEventListener('click', e => {
        e.preventDefault();
        if (currentAccount) {
            const sortAccount = Object.assign({}, currentAccount);
            sortAccount.movements = [...currentAccount.movements];
            if (ifSort) {
                sortAccount.movements.sort((a, b) => a - b);
                updateUI(sortAccount);
            }
            else {
                updateUI(currentAccount);
            }
            ifSort = !ifSort;
        }
    });
    /////////////////////////////////////////////////
    //simple practice with date
    const daysPassed = (date1, date2) => {
        return (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
    };
    const days1 = daysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
    console.log(days1);
    //Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
    //Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
    function checkDogs(arr1, arr2) {
        const withoutCat = arr1.slice(1, -2);
        const resultArr = [...withoutCat, ...arr2];
        console.log(resultArr);
        resultArr.forEach((item, i) => {
            console.log(item > 3 ? `Dog number ${i + 1} is an adult, and is ${item} years old` : `Dog number ${i + 1} is still a puppy 🐶`);
        });
    }
    // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
    // checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
    function calcAverageHumanAge(array) {
        const resultArray = array.map((ageDog) => ageDog <= 2 ? 2 * ageDog : 16 + ageDog * 4).filter((a) => a >= 18);
        const sum = resultArray.reduce((acc, cur) => acc + cur, 0);
        const average = sum / resultArray.length;
        return +average.toFixed();
    }
    const dogs = [
        { weight: 22, curFood: 250, owners: ['Alice', 'Bob'], recFood: 0 },
        { weight: 8, curFood: 200, owners: ['Matilda'], recFood: 0 },
        { weight: 13, curFood: 275, owners: ['Sarah', 'John'], recFood: 0 },
        { weight: 32, curFood: 340, owners: ['Michael'], recFood: 0 },
    ];
    const ownersEatTooMuch = [];
    const ownersEatTooLittle = [];
    let resultStringTooMuch = `'s dogs eat too much!`;
    let resultStringTooLittle = `'s dogs eat too little!`;
    const dogOk = [];
    dogs.forEach((item, i) => (item.recFood = Math.trunc(item.weight ** 0.75 * 28)));
    dogs.forEach((item, i) => {
        item.owners.forEach(owners => {
            if (owners === 'Sarah') {
                if (item.recFood) {
                    // item.curFood > item.recFood ? console.log(`Sarah's dogs eat too much ! current ${item.curFood} vs recommend: ${item.recFood} `) : console.log(`they eat a little curr ${item.curFood} vs recom. ${item.recFood}`);
                }
            }
        });
        if (item.curFood !== undefined) {
            item.curFood > item.recFood ? ownersEatTooMuch.push(...item.owners) : ownersEatTooLittle.push(...item.owners);
        }
    });
    // console.log(ownersEatTooMuch.join(' and ') + resultStringTooMuch);
    // console.log(ownersEatTooLittle.join(' and ') + resultStringTooLittle);
    const tenPercent = (forResult, minus) => {
        if (minus === '-') {
            return forResult -= (forResult * 10 / 100);
        }
        return forResult += (forResult * 10 / 100);
    };
    for (let i = 0; i < dogs.length; i++) {
        // if(dogs[i].curFood === dogs[i].recFood) console.log(`exactly match curr food and recomm`);
        // console.log(dogs[i].curFood + '   ' + dogs[i].recFood + '   ' + `percent ${tenPercent(dogs[i].recFood)} min ${tenPercent(dogs[i].recFood, '-')}`)
        if (dogs[i].curFood < tenPercent(dogs[i].recFood) || dogs[i].curFood > tenPercent(dogs[i].recFood, '-')) {
            dogOk.push(dogs[i].curFood);
        }
    }
    // console.log(dogOk);
    // const sortedArr = [...dogs];
    // console.log(sortedArr.sort((a, b) => a.recFood - b.recFood));
}
//# sourceMappingURL=logic.js.map