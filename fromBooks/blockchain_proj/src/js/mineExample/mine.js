var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function mineMy() {
    let nonce = 0;
    function generateHash(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const msgBuffer = new TextEncoder().encode(input);
            const hashBuffer = yield crypto.subtle.digest('SHA-256', msgBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
            return hashHex;
        });
    }
    function calculateHashWithNonce(nonce) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = 'Hello world' + nonce;
            return generateHash(data);
        });
    }
    function mine() {
        return __awaiter(this, void 0, void 0, function* () {
            let hash;
            do {
                hash = yield calculateHashWithNonce(++nonce);
                console.log(hash);
            } while (hash.startsWith('0000') === false);
            console.log(`Hash: ${hash}, nonce: ${nonce}`);
        });
    }
    mine();
}
//# sourceMappingURL=mine.js.map