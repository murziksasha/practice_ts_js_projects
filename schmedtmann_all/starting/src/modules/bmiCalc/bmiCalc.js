export function bmiCalc(marksMass, markHeight, johnMass, johnHeight) {
    const markMiller = {
        fullName: 'Mark Miller',
        mass: marksMass,
        height: markHeight,
        BMI: function () {
            return (this.mass / this.height ** 2).toFixed(2);
        }
    };
    const johnSmith = {
        fullName: 'John Smith',
        mass: johnMass,
        height: johnHeight,
        BMI: function () {
            return (this.mass / this.height ** 2).toFixed(2);
        }
    };
    const marksBMI = markMiller.BMI();
    const johnBMI = johnSmith.BMI();
    const markHigherBMI = marksBMI > johnBMI;
    if (markHigherBMI) {
        console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnBMI})!`);
    }
    else {
        console.log(`John's BMI (${johnBMI}) is higher than Mark's (${marksBMI})!`);
    }
}
//# sourceMappingURL=bmiCalc.js.map