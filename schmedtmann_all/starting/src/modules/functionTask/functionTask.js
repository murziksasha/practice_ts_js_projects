export function functionTask() {
    const currYear = 2023;
    const calcAge = (birthYear) => {
        return currYear - birthYear;
    };
    const calcRetirement = (age) => {
        return 65 - age;
    };
    function yearsUntilRetirement(birthYear, firstName) {
        const age = calcAge(birthYear);
        const retirement = calcRetirement(age);
        if (retirement > 0 && retirement < 65) {
            return `${firstName} retires in ${retirement} years`;
        }
        else {
            return `something wrong, age ${age}, retirement is ${retirement}, check input value please`;
        }
    }
    console.log(yearsUntilRetirement(2025, 'Sasha'));
}
;
//# sourceMappingURL=functionTask.js.map