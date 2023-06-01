

export function tipCalc() {
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

  const tips: number[] = [];
  const resultArray: number[] = [];

  const calcTip = (bill: number) => (bill >= 50 && bill <= 300) ? bill * (15 / 100) : bill * ( 20 / 100);

  const calcTotal = (bill: number, tip: number) => +((bill + tip).toFixed(2));

  function totalPrice(bill: number | number[]){
    if(bill instanceof Array){
      bill.forEach((item, i )=> {
        const tip = +((calcTip(item)).toFixed(2));
        const total: number = calcTotal(bill[i], tip);
        console.log(`if bill ${bill[i]} - the tip should be ${tip}, total price = ${total}`);
        resultArray.push(total);
        tips.push(tip);
      });
    } else {
      const tip = +((calcTip(bill)).toFixed(2));
      const total: number = calcTotal(bill, tip);
      console.log(`if bill ${bill} - the tip should be ${tip}, total price = ${total}`);
      resultArray.push(total);
      tips.push(tip);
    }
  };

  function calcAverage(arr: number[]): number{
    const reduce = arr.reduce((acc: number, curr: number)=> {
      return acc + curr;
    }, 0);
    const average = reduce / arr.length;

    return +(average.toFixed(2));
  }


  totalPrice(bills);

  // console.log(`average TIPS is ${calcAverage(tips)}`);
  // console.log(`average BILLS is ${calcAverage(resultArray)}`);

  console.log('--------------- info tips bill from average total --------');

  totalPrice(calcAverage(resultArray))
}