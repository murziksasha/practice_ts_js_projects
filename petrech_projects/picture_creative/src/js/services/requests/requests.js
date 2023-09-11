var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const postData = (url, data) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(url, {
        method: 'POST',
        // headers: { //когда json то необходимо!
        //   'Content-type': 'application/json'
        // },
        body: data
    });
    // return res.json();
    return yield res.text();
});
export const getResource = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return yield res.json();
});
//# sourceMappingURL=requests.js.map