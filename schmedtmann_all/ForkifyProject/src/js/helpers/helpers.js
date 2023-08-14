var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
export const getJSON = function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield Promise.race([fetch(url), timeout(10)]);
            const data = yield res.json();
            if (!res.ok)
                throw new Error(`${res.status}`);
            return data;
        }
        catch (err) {
            throw err;
        }
    });
};
//# sourceMappingURL=helpers.js.map