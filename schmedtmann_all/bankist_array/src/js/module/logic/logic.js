;
export function logic() {
    const appElement = document.querySelector('.app');
    let timer;
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    // BANKIST APP
    // Data
    const account1 = {
        owner: 'Jonas Schmedtmann',
        movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
        interestRate: 1.2,
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
    const account2 = {
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
    const accounts = [account1, account2];
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
    function formatMovementDate(date) {
        const calcDaysPassed = (date1, date2) => {
            return Math.round(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24));
        };
        const daysPassed = calcDaysPassed(new Date(), date);
        if (daysPassed === 0)
            return `Today`;
        if (daysPassed === 1)
            return `Yesterday`;
        if (daysPassed <= 7) {
            return `${daysPassed} days ago`;
        }
        // const day = `${date.getDate()}`.padStart(2, '0');
        // const month = `${date.getMonth() + 1}`.padStart(2, '0');
        // const year = date.getFullYear();
        // return `${day}/${month}/${year}`;
        return `${new Intl.DateTimeFormat(currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.locale).format(date)}`;
    }
    function formatNumberIntl(num) {
        const options = {
            style: 'currency',
            currency: `${currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.currency}`,
        };
        return new Intl.NumberFormat(currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.locale, options).format(num);
    }
    const formatCur = (value, locale, currency) => {
        const options = {
            style: 'currency',
            currency: currency,
        };
        return new Intl.NumberFormat(locale, options).format(value);
    };
    function displayMovements(arr) {
        const options = {
            style: 'currency',
            currency: `${currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.currency}`,
        };
        if (containerMovements !== null) {
            containerMovements.innerHTML = '';
            arr.forEach((item, i) => {
                let date;
                let displayDate = '';
                if (currentAccount !== undefined) {
                    date = currentAccount.movementsDates[i] ? new Date(currentAccount.movementsDates[i]) : new Date;
                    displayDate = formatMovementDate(date);
                }
                const meaning = item > 0 ? 'deposit' : 'withdrawal';
                const html = `  
        <div class="movements__row">
          <div class="movements__type movements__type--${meaning}">${i + 1} ${meaning}</div>
          <div class="movements_date">${displayDate}</div>
          <div class="movements__value">${formatNumberIntl(item)}</div>
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
        //experementing with INTL Api
        const calcIntlPassed = (date) => {
            const options = {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                weekday: 'short',
            };
            // return `${new Intl.DateTimeFormat('en-US', options).format(date)}`;
            return `${new Intl.DateTimeFormat(currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.locale, options).format(date)}`;
        };
        const calcDaysPassed = (date) => {
            const day = `${date.getDate()}`.padStart(2, '0');
            const month = `${date.getMonth() + 1}`.padStart(2, '0');
            const year = date.getFullYear();
            const hours = `${date.getHours()}`.padStart(2, '0');
            const minutes = `${date.getMinutes()}`.padStart(2, '0');
            return `${day}/${month}/${year}, ${hours}:${minutes}`;
        };
        if (labelDate !== null) {
            labelDate.textContent = `${calcIntlPassed(new Date())}`;
        }
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
    const startLogOutTimer = (time = 100) => {
        if (timer)
            clearInterval(timer);
        timer = setInterval(() => {
            const min = Math.trunc(time / 60);
            const sec = time % 60;
            if (labelTimer) {
                labelTimer.textContent = `${String(min).padStart(2, '0')} : ${String(sec).padStart(2, '0')}`;
            }
            if (min === 0 && sec === 0) {
                clearInterval(timer);
                appElement.style.opacity = '0';
                if (labelWelcome)
                    labelWelcome.textContent = `Log in to get started`;
            }
            time--;
        }, 1000);
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
        startLogOutTimer();
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
        startLogOutTimer(200);
    });
    btnLoan === null || btnLoan === void 0 ? void 0 : btnLoan.addEventListener('click', e => {
        e.preventDefault();
        const amount = inputLoanAmount ? +(inputLoanAmount.value) : null;
        if (amount && amount > 0 && (currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.movements) && (currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.movements.some(mov => mov >= amount * 0.1))) {
            currentAccount.movements.push(amount);
            updateUI(currentAccount);
        }
        inputLoanAmount.value = '';
        startLogOutTimer(200);
    });
    btnClose === null || btnClose === void 0 ? void 0 : btnClose.addEventListener('click', e => {
        if (timer)
            clearInterval(timer);
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
    // setTimeout((...args: string[])=> console.log(`Here is your 🍕🍕🍕 ${args.join(' ')}`), 1000, 'success', 'strong', 'gratitude');
    const num = 3884764.23;
    const options = {
        style: 'currency',
        unit: 'celsius',
        currency: 'EUR',
        useGrouping: false,
    };
    // console.log('US:     ', new Intl.NumberFormat('en-US').format(num));
    // console.log('German:     ', new Intl.NumberFormat('de-DE', options).format(num));
    // console.log('Russian:     ', new Intl.NumberFormat('ru-RU', options).format(num));
    // console.log(`${navigator.language}:     `, new Intl.NumberFormat(navigator.language, options).format(num));
    //simple practice with date
    const daysPassed = (date1, date2) => {
        return Math.abs(date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
    };
    const days1 = daysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
    // console.log(days1);
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