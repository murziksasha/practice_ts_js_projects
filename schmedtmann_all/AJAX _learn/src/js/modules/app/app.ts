

export function app () {

  const btn = document.querySelector('.btn-country');
  const countriesContainer = document.querySelector('.countries') as HTMLDivElement;


///////////////////////////////////////

const workObjKeys = (obj: any) => {
  const keys = Object.keys(obj);
  const firstKey = keys[0];
  const firstPropertyValue = obj[firstKey];

  return firstPropertyValue;
}

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
countriesContainer.style.opacity = '1';
}

    const getCountryAndNeighbour = (country: string) => {

      //Ajax call country 1
      const request = new XMLHttpRequest ();
      request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
      request.send();

      request.addEventListener('load', (e) => {
        const target = e.target as XMLHttpRequest;
        if(!target) return;
        const [data] = JSON.parse(target.responseText);
        console.log(data)

        // render country
        renderCountry(data);
        
        //get neighbour country
        const neighbour = data.borders;

        neighbour.forEach((country: any) => {
                //Ajax call country 2
      const request2 = new XMLHttpRequest ();
      request2.open('GET', `https://restcountries.com/v3.1/alpha/${country}`);
      request2.send();
      request2.addEventListener('load', (e) => {
          const target = e.target as XMLHttpRequest;
          if(!target) return;

          const [data] = JSON.parse(target.responseText);

          // render country
          renderCountry(data, 'neighbour');
        });
        });


      });
    }

    // getCountryAndNeighbour('ukraine');
    getCountryAndNeighbour('usa');










}