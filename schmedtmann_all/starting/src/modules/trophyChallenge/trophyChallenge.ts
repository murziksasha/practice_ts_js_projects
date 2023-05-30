

export function trophyChallenge() {

  const dataOneDolphins: number[] = [44, 23, 71];
  const dataOneKoalas: number[] = [65, 54, 49];

  const dataTwoDolphins: number[] = [85, 54, 41];
  const dataTwoKoalas: number[] = [23, 34, 27];
  


  const calcAverage = (arr: number[]): number => {
    const sum = arr.reduce((curr, acc) => curr + acc, 0);
    const average = sum / arr.length;
    return Math.floor(average);
  }

  const oneDolphins = calcAverage(dataOneDolphins);
  const oneKoalas = calcAverage(dataOneKoalas);

  const twoDolphins = calcAverage(dataTwoDolphins);
  const twoKoalas = calcAverage(dataTwoKoalas);


  function checkWinner(numOfWay: number, averageDolphin: number, averageKoalas: number){
      if(averageDolphin >= (averageKoalas * 2) || averageKoalas >= (averageDolphin * 2)){
        if(averageDolphin > averageKoalas){
          console.log(`Data #${numOfWay}, the winner is Dolphins - ${averageDolphin}, against Koalas - ${averageKoalas}`);
        } else if (averageDolphin < averageKoalas){
          console.log(`Data #${numOfWay}, the winner is Koalas - ${averageKoalas}, against Dolphins - ${averageDolphin}`);
        } 
    } else {
      console.log(`Data #${numOfWay} Nobody Wins, the score is not double Dolphins: ${averageDolphin}, Koalas: ${averageKoalas}`);

    }
    
  }

  checkWinner(1, oneDolphins, oneKoalas);
  checkWinner(2, twoDolphins, twoKoalas);

}