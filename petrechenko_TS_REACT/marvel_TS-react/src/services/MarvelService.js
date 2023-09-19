var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class MarvelService {
    constructor() {
        this.URL = `https://gateway.marvel.com:443/v1/public/characters?apikey=60bd687c9ec5a78d88fd43ba421607b0`;
        this.getResource = (url) => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(url);
                if (!res.ok)
                    throw new Error(`${res.status}`);
                const data = yield res.json();
                return data;
            }
            catch (err) {
                throw err;
            }
        });
        this.getAllCharacters = () => {
            return this.getResource(this.URL);
        };
    }
}
//# sourceMappingURL=MarvelService.js.map