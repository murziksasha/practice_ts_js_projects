export function variables() {
    const percentageOfWorld = (population) => {
        const worldPopulation = 7900;
        const percentValue = population / worldPopulation * 100;
        return percentValue.toFixed() + '%';
    };
    console.log(`China percentage is ${percentageOfWorld(1441)}`);
}
;
//# sourceMappingURL=variables.js.map