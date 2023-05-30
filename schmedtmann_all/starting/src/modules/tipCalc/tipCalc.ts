

export function tipCalc() {
  const billOne = 275;
  const billTwo = 40;
  const billThree = 430;
  const testDataArray: number[] = [125, 555, 44];
  const resultArray: number[] = [];

  const calcTip = (bill: number) => (bill >= 50 && bill <= 300) ? bill * (15 / 100) : bill * ( 20 / 100);

  function totalPrice(bill: number | number[]){
    if(bill instanceof Array){
      bill.forEach((item, i )=> {
        const tip = calcTip(item);
        const total: number = item + tip;
        console.log(`if bill ${bill[i]} - the tip should be ${tip}, total price = ${total}`);
        resultArray.push(total)
      });
    } else {
      const tip = calcTip(bill);
      const total: number = bill + tip;
      console.log(`if bill ${bill} - the tip should be ${tip}, total price = ${total}`);
      resultArray.push(total);
    }
  };

  // totalPrice(billOne);
  // totalPrice(billTwo);
  // totalPrice(billThree);
  totalPrice(100);
  totalPrice(testDataArray);

  console.log(resultArray);
}