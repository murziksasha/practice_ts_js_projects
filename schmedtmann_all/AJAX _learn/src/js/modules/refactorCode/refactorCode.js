export function refactorCode() {
    const budget = [
        { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
        { value: -45, description: 'Groceries 🥑', user: 'jonas' },
        { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
        { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
        { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
        { value: -20, description: 'Candy 🍭', user: 'matilda' },
        { value: -125, description: 'Toys 🚂', user: 'matilda' },
        { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
    ];
    const limits = {
        jonas: 1500,
        matilda: 100,
    };
    const getLimit = (user) => { var _a; return (_a = limits === null || limits === void 0 ? void 0 : limits[user]) !== null && _a !== void 0 ? _a : 0; };
    const add = function (value, description, user = 'jonas') {
        user = user.toLowerCase();
        if (value <= getLimit(user)) {
            budget.push({ value: -value, description: description, user });
        }
    };
    add(10, 'Pizza 🍕');
    add(100, 'Going to movies 🍿', 'Matilda');
    add(200, 'Stuff', 'Jay');
    const check = function () {
        for (const entry of budget) {
            if (entry.value < -getLimit(entry.user)) {
                entry.flag = 'limit';
            }
        }
    };
    check();
    const bigExpenses = function (bigLimit) {
        let output = '';
        for (const entry of budget) {
            output += entry.value <= -bigLimit ? entry.description.slice(-2) + ' / ' : '';
        }
        output = output.slice(0, -2); // Remove last '/ '
        console.log(output);
    };
    console.log(budget);
    bigExpenses(1000);
}
//# sourceMappingURL=refactorCode.js.map