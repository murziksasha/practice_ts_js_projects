export function contextThis() {
    const btn = document.createElement('button');
    const textArea = document.createElement('textarea');
    btn.textContent = 'button';
    document.body.append(textArea);
    document.body.append(btn);
    const camelCaseFunc = (str) => {
        if (!str)
            return;
        let rows = str.split('/n').join('');
        let arr = rows.toLowerCase().split('_');
        let resultArr = [];
        for (const item of arr) {
            resultArr.push((item[0].toUpperCase() + item.slice(1).trim()));
        }
        let result = resultArr.join('');
        return (result[0].toLowerCase() + result.slice(1));
    };
    btn.addEventListener('click', () => {
        console.log(camelCaseFunc(textArea.value));
        // console.log(camelCaseFunc("underscore_case"));
    });
}
//# sourceMappingURL=contextThis.js.map