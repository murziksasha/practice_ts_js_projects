

export function arrayBigPractice() {

  const arrForTest = [100, -300, 550, 150, -830, 250, 333, -503];

  const operation = arrForTest.reduce((acc: {deposit: number, withdraw: number}, cur: number) => {
    // cur > 0 ? acc.deposit += cur : acc.withdraw += cur;
    acc[cur > 0 ? 'deposit' : 'withdraw'] += cur;
    return acc;
  }, {deposit: 0, withdraw: 0});

  const {deposit, withdraw} = operation;

  console.log(deposit, withdraw);

}