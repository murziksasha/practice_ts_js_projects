

export function trophyChallenge() {
  const dataOneDolphins: number[] = [96, 108, 89];
  const dataOneKoalas: number[] = [88, 91, 110];

  const dataTwoDolphins: number[] = [97, 112, 101];
  const dataTwoKoalas: number[] = [109, 95, 123];
  
  const dataThreeDolphins: number[] = [97, 112, 101];
  const dataThreeKoalas: number[] = [109, 95, 106];

  const averageMeanings = (arr: number[]): number => {
    const sum = arr.reduce((curr, acc) => curr + acc, 0);
    const average = sum / arr.length;
    return Math.floor(average);
  }

  const oneDolphins = averageMeanings(dataOneDolphins);
  const oneKoalas = averageMeanings(dataOneKoalas);

  const twoDolphins = averageMeanings(dataTwoDolphins);
  const twoKoalas = averageMeanings(dataTwoKoalas);

  const threeDolphins = averageMeanings(dataThreeDolphins);
  const threeKoalas = averageMeanings(dataThreeKoalas);

  function totalInformation(numOfWay: number, averageDolphin: number, averageKoalas: number){
    if(averageDolphin >= 100 && averageKoalas >= 100 ){
      if(averageDolphin > averageKoalas){
        console.log(`Data #${numOfWay}, the winner is Dolphins - ${averageDolphin}, against Koalas - ${averageKoalas}`);
      } else if (averageDolphin < averageKoalas){
        console.log(`Data #${numOfWay}, the winner is Koalas - ${averageKoalas}, against Dolphins - ${averageDolphin}`);
      } else {
        console.log(`Data #${numOfWay} It's draw ${averageDolphin} agains ${averageKoalas}`);
      }
    } else {
      console.log(`Data #${numOfWay} Nobody Wins, the score is too low Dlophins: ${averageDolphin}, Koalas: ${averageKoalas}`);

    }
    
  }

  totalInformation(1, oneDolphins, oneKoalas);
  totalInformation(2, twoDolphins, twoKoalas);
  totalInformation(3, threeDolphins, threeKoalas);

}