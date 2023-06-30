


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

  class Workout {
    private date = new Date();
    private id = (Date.now() + '').slice(-10);

    constructor(public coords: string[], public distance: string, public duration: string){}

  }

  class Running extends Workout {
    private pace: number = 0;

    constructor(public coords: string[], public distance: string, public duration: string, public cadence: string) {
      super(coords, distance, duration);
      this.calcPace();
    }

    calcPace(){
      //min/km
     return this.pace = +this.duration / +this.distance;
    }
  }

  class Cycling extends Workout {
    private speed: number = 0;
    constructor(public coords: string[], public distance: string, public duration: string, public elevationGain: string) {
      super(coords, distance, duration);
      this.calcSpeed();
    }

    calcSpeed() {
      //km/hour
      return this.speed = +this.distance / (+this.duration / 60);
    }
  }


  const run1 = new Running(['39', '-12'], '5.2', '24', '178' );
  const cycling1 = new Cycling(['39', '-12'], '27', '95', '523' );
  console.log(run1);
  console.log(cycling1);


  ////////////////////// ARCHITECTURE  ////////////////
  class App {
    private map: any; 
    private mapEvent: any;

    constructor(){
      this._getPosition();
      form?.addEventListener('submit', this._newWorkout.bind(this));
      inputType?.addEventListener('change', this._toggleElevationField);
    }

    _getPosition(){
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), 
        ()=>alert(`Could not get your position!`));
    }

    _loadMap(position: any){
        const {latitude} = position.coords;
        const {longitude} = position.coords;
        const coords = [latitude, longitude]
        //@ts-ignore
        this.map = L.map('map').setView(coords, 13);
        //@ts-ignore
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
  
        this.map.on('click', this._showForm.bind(this));
    }

    _showForm(mapE: Event){
      this.mapEvent = mapE;
      form?.classList.remove('hidden');
      inputDistance?.focus();
    }

    _toggleElevationField(){
      inputElevation?.closest('.form__row')?.classList.toggle('form__row--hidden');
      inputCadence?.closest('.form__row')?.classList.toggle('form__row--hidden');
    }

    _newWorkout(e: Event) {
      
      e.preventDefault();
  
      inputDistance.value = inputDuration.value = inputCadence.value = '';

      //@ts-ignore
        const {lat, lng} = this.mapEvent.latlng;
      //@ts-ignore
      L.marker([lat, lng]).addTo(this.map)
      //@ts-ignore
      .bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup'
      }))
      .openPopup();
    }

  }

  const app = new App();



  
}