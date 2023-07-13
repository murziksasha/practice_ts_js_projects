var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function promisesParallel() {
    const getJSON = (url, errorMsg = 'Something went wrong') => __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(url);
        if (!res.ok) {
            throw new Error(`${errorMsg} (${res.status})`);
        }
        return yield res.json();
    });
    const get3Countries = function (c1, c2, c3) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const [data1]: Array<any> =  await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
                // const [data2]: Array<any> =  await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
                // const [data3]: Array<any> =  await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
                // console.log([data1.capital, data2.capital, data3.capital]);
                const data = yield Promise.any([
                    getJSON(`https://restcountries.com/v3.1/name/${c1}`),
                    getJSON(`https://restcountries.com/v3.1/name/${c2}`),
                    getJSON(`https://restcountries.com/v3.1/name/${c3}`),
                ]);
                // console.log(data.map(d => d[0].capital));
                console.log(data[0].capital);
            }
            catch (err) {
                console.error(err);
            }
        });
    };
    get3Countries('ukraine', 'paraguay', 'usa');
}
//# sourceMappingURL=promisesParallel.js.map