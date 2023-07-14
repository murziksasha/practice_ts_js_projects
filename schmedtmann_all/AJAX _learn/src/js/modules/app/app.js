import { refactorCode } from "../refactorCode/refactorCode.js";
export function app() {
    // doubleFetchCountry();
    // practiceEventLoop();
    // createImgTask();
    // asyncPractice();
    // promisesParallel();
    refactorCode();





    const calcAverage = (oneRound, twoRound, threeRound) => {
        return (oneRound + twoRound + threeRound) / 3;
    } 
    
    const scoreDolphins = calcAverage(85, 54, 41);
    const scoreKoalas = calcAverage(23, 34, 24);
    
    const checkWinner = (avgDolphins, avgKoalas) => {
        
        if(avgDolphins > 2 * avgKoalas) {
            console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
        } else if (avgKoalas > 2 * avgDolphins){
            console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
        } else {
            console.log(`No team wins... `);
        }
        
    }
    
    checkWinner(scoreDolphins, scoreKoalas);








}
//# sourceMappingURL=app.js.map