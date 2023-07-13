var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function asyncPractice() {
    const btn = document.querySelector('button');
    const countriesContainer = document.querySelector('.countries');
    const renderError = (msg) => {
        countriesContainer.innerText = '';
        countriesContainer === null || countriesContainer === void 0 ? void 0 : countriesContainer.insertAdjacentText('beforeend', msg);
    };
    const workObjKeys = (obj) => {
        const keys = Object.keys(obj);
        const firstKey = keys[0];
        const firstPropertyValue = obj[firstKey];
        return firstPropertyValue;
    };
    const getJSON = (url, errorMsg = 'Something went wrong') => __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(url);
        if (!res.ok) {
            throw new Error(`${errorMsg} (${res.status})`);
        }
        return yield res.json();
    });
    const renderCountry = (data, className = '') => {
        const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" alt="flag" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(2)} millions</p>
        <p class="country__row"><span>🗣️</span>${workObjKeys(data.languages)}</p>
        <p class="country__row"><span>💰</span>${workObjKeys(data.currencies).name}</p>
      </div>
    </article>
  `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
    };
    const geoLocation = () => __awaiter(this, void 0, void 0, function* () {
        const coords = yield new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition(res, rej);
        })
            .then((data) => {
            return data.coords;
        })
            .then(dataCoords => {
            const { latitude: lat, longitude: lng } = dataCoords;
            getJSON(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=927651672794403564921x13086`)
                .then((geo) => {
                console.log(`You are in ${geo.city}, ${geo.country}`);
                return geo.country;
            })
                .then(country => whereAmI(country));
        });
    });
    const whereAmI = (country) => __awaiter(this, void 0, void 0, function* () {
        try {
            const fetchCity = yield fetch(`https://restcountries.com/v3.1/name/${country}`);
            if (!fetchCity.ok)
                return;
            const data = yield fetchCity.json();
            const firstKeysOfData = yield workObjKeys(data);
            renderCountry(firstKeysOfData);
            console.log(firstKeysOfData);
        }
        catch (err) {
            console.error(`Something wrong, please try later 💥💥💥💥💥 ${err}`);
        }
    });
    btn.addEventListener('click', (e) => {
        const target = e.target;
        target.style.display = 'none';
        countriesContainer.style.opacity = '1';
        geoLocation();
    });
}
//# sourceMappingURL=asyncPractice.js.map