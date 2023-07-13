

export function asyncPractice() {

  const btn = document.querySelector('button') as HTMLButtonElement;
  const countriesContainer = document.querySelector('.countries') as HTMLDivElement;

  


  const renderError = (msg: string) => {
    countriesContainer.innerText= '';
    countriesContainer?.insertAdjacentText('beforeend', msg);
  }

  const workObjKeys = (obj: any) => {
    const keys = Object.keys(obj);
    const firstKey = keys[0];
    const firstPropertyValue = obj[firstKey];

    return firstPropertyValue;
  }

  const getJSON = async <T>(url: string, errorMsg = 'Something went wrong'): Promise<T> => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`${errorMsg} (${res.status})`);
    }
    return await (res.json() as Promise<T>);
  };

  const renderCountry = (data: any, className: string = '') => {
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" alt="flag" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000_000).toFixed(2)} millions</p>
        <p class="country__row"><span>🗣️</span>${workObjKeys(data.languages)}</p>
        <p class="country__row"><span>💰</span>${workObjKeys(data.currencies).name}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  
  }

  const geoLocation = async () => {
    const coords = await new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    })
    .then((data: any) => {
      return data.coords;
      
    })
    .then(dataCoords => {
      const {latitude: lat, longitude: lng} = dataCoords;
      getJSON(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=927651672794403564921x13086`)
      .then((geo: any) => {
        console.log(`You are in ${geo.city}, ${geo.country}`);
        return geo.country;
      })
      .then (country => whereAmI(country));
    })
  }

  const whereAmI = async (country: string) => {
    try {
      const fetchCity = await fetch(`https://restcountries.com/v3.1/name/${country}`);
      if(!fetchCity.ok) return;
      const data = await fetchCity.json();
      const firstKeysOfData = await workObjKeys(data);
      renderCountry(firstKeysOfData);
      console.log(firstKeysOfData);
    } catch(err) {
      console.error(`Something wrong, please try later 💥💥💥💥💥 ${err}`);
    }
  }


  btn.addEventListener('click', (e) => {
    const target = e.target as HTMLButtonElement;
    target.style.display = 'none';
    countriesContainer.style.opacity = '1';
    geoLocation();
  });


  
}