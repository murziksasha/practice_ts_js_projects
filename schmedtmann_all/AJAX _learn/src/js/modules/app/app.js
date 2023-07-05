var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function app() {
    const btn = document.querySelector('.btn-country');
    const countriesContainer = document.querySelector('.countries');
    ///////////////////////////////////////
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
    const getJSON = (url, errorMsg = 'Something went wrong') => __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(url);
        if (!res.ok) {
            throw new Error(`${errorMsg} (${res.status})`);
        }
        return yield res.json();
    });
    const getCountryAndNeighbour = (country) => {
        getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
            .then(data => {
            const dataPreparing = workObjKeys(data);
            renderCountry(dataPreparing);
            return dataPreparing;
        })
            .then(neighbour => {
            const neighbours = neighbour.borders;
            // if(!neighbours) throw new Error('There is no neigbour in this country');
            if (!neighbours)
                return;
            neighbours.forEach((neighbourCountry) => {
                getJSON(`https://restcountries.com/v3.1/alpha/${neighbourCountry}`, 'Neighbour is not found')
                    .then(data => {
                    const dataPreparing = workObjKeys(data);
                    renderCountry(dataPreparing, 'neighbour');
                    return dataPreparing;
                });
            });
        })
            .catch(err => {
            renderError('Something went wrong: ' + err.message + '💣💣💣');
            console.error('Something went wrong: ' + err.message + '💣💣💣');
            btn ? btn.style.display = 'block' : null;
        })
            .finally(() => countriesContainer.style.opacity = '1');
    };
    btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', (e) => {
        const target = e.target;
        getCountryAndNeighbour('australia');
        target ? target.style.display = 'none' : null;
    });
    //implementation with HTMLRequest
    // const getCountryAndNeighbour = (country: string) => {
    //   //Ajax call country 1
    //   const request = new XMLHttpRequest ();
    //   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    //   request.send();
    //   request.addEventListener('load', (e) => {
    //     const target = e.target as XMLHttpRequest;
    //     if(!target) return;
    //     const [data] = JSON.parse(target.responseText);
    //     console.log(data)
    //     // render country
    //     renderCountry(data);
    //     //get neighbour country
    //     const neighbour = data.borders;
    //     neighbour.forEach((country: any) => {
    //             //Ajax call country 2
    //   const request2 = new XMLHttpRequest ();
    //   request2.open('GET', `https://restcountries.com/v3.1/alpha/${country}`);
    //   request2.send();
    //   request2.addEventListener('load', (e) => {
    //       const target = e.target as XMLHttpRequest;
    //       if(!target) return;
    //       const [data] = JSON.parse(target.responseText);
    //       // render country
    //       renderCountry(data, 'neighbour');
    //     });
    //     });
    //   });
    // }
    // getCountryAndNeighbour('ukraine');
}
//# sourceMappingURL=app.js.map