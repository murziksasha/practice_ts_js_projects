export function petrech() {
    ///////////////////////////////////////////////////////////////
    // структура данных склада с одеждой
    // главный объект со всеми данными, должен подходить под формат TotalWarehouse
    const totalData = {
        jackets: 5,
        hats: 'empty',
        socks: 'empty',
        pants: 15,
        scissors: 15,
        paper: true,
        dishwashers: 3,
        cookers: 'empty',
        mixers: 14,
        deficit: true,
        date: new Date(),
    };
    function printReport(data) {
        //фильтрация данных
        let result = [];
        for (let key in data) {
            if (data[key] === 'empty') {
                result.push(key);
            }
        }
        if (result.length) {
            return `We need this items: ${result.join(', ')}`;
        }
        else {
            return "Everything fine";
        }
        // или
    }
    // console.log(printReport(totalData));
}
//# sourceMappingURL=petrech.js.map