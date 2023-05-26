export function bmiCalc(marksMass, markHeight, johnMass, johnHeight) {
    const BMI = (mass, height) => {
        return (mass / height ** 2).toFixed(2);
    };
    const marksBMI = BMI(marksMass, markHeight);
    const johnBMI = BMI(johnMass, johnHeight);
    const markHigherBMI = marksBMI > johnBMI;
    if (markHigherBMI) {
        console.log(`Mark's BMI ${marksBMI} is higher than John's ${johnBMI}!`);
    }
    else {
        console.log(`John's BMI ${johnBMI} is higher than Mark's ${marksBMI}!`);
    }
}
//# sourceMappingURL=bmiCalc.js.map