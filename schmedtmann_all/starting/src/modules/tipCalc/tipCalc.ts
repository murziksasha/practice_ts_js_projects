

export function tipCalc() {
  const billOne = 275;
  const billTwo = 40;
  const billThree = 430;

  function totalPrice(bill: number){
    const tip = (bill >= 50 && bill <= 300) ? bill * (15 / 100) : bill * ( 20 / 100);
    const total: number = bill + tip;
    console.log(`if bill ${bill} - the tip should be ${tip}, total price = ${total}`)
  };

  totalPrice(billOne);
  totalPrice(billTwo);
  totalPrice(billThree);
}