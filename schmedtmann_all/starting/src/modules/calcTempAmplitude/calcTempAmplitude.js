export function calcTempAmplitude(arr1, arr2, debug = false) {
    const mergeArray = [...arr1, ...arr2];
    let max;
    let min;
    let amplitude;
    let error = [];
    const calcMax = (arr) => {
        let maxValue = -2000000;
        arr.forEach((item, i) => {
            if (typeof item === 'number') {
                if (item && item >= maxValue) {
                    maxValue = item;
                }
            }
            else {
                error.push(`elem in array is not a number:  ${item}`);
            }
        });
        return maxValue;
    };
    const calcMin = (arr) => {
        let minValue = 20000000;
        arr.forEach((item, i) => {
            if (typeof item === 'number') {
                if (item && item <= minValue) {
                    minValue = item;
                }
            }
        });
        return minValue;
    };
    min = calcMin(mergeArray);
    max = calcMax(mergeArray);
    amplitude = max - min;
    console.log(`min: ${min}, max: ${max}, amplitude: ${amplitude}`);
    if (debug) {
        error.forEach(item => console.log(item));
    }
}
//# sourceMappingURL=calcTempAmplitude.js.map