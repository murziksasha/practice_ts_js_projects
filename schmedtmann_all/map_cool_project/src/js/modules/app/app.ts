


export function app() {

    // prettier-ignore
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const form = document.querySelector('.form');
  const containerWorkouts = document.querySelector('.workouts');
  const inputType = document.querySelector('.form__input--type');
  const inputDistance = document.querySelector('.form__input--distance') as HTMLInputElement;
  const inputDuration = document.querySelector('.form__input--duration') as HTMLInputElement;
  const inputCadence = document.querySelector('.form__input--cadence') as HTMLInputElement;
  const inputElevation = document.querySelector('.form__input--elevation');

  let map: any;
  let mapEvent: any;


  navigator.geolocation.getCurrentPosition(
    (position)=>{
      const {latitude} = position.coords;
      const {longitude} = position.coords;
      const coords = [latitude, longitude]
      //@ts-ignore
      map = L.map('map').setView(coords, 13);
      //@ts-ignore
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      map.on('click', (mapE: Event) => {
        mapEvent = mapE;
        form?.classList.remove('hidden');
        inputDistance?.focus();




      });
    }, 
    ()=>alert(`Could not get your position!`));

    form?.addEventListener('submit', (e) => {
      e.preventDefault();

      inputDistance.value = inputDuration.value = inputCadence.value = '';

      //@ts-ignore
        const {lat, lng} = mapEvent.latlng;
      //@ts-ignore
      L.marker([lat, lng]).addTo(map)
      //@ts-ignore
      .bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup'
      }))
      .openPopup();
    });

    inputType?.addEventListener('change', () => {
      console.log('select');
      inputElevation?.closest('.form__row')?.classList.toggle('form__row--hidden');
      inputCadence?.closest('.form__row')?.classList.toggle('form__row--hidden');
    });


  
}