


export function app() {

    // prettier-ignore
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const form = document.querySelector('.form');
  const containerWorkouts = document.querySelector('.workouts');
  const inputType = document.querySelector('.form__input--type') as HTMLInputElement;
  const inputDistance = document.querySelector('.form__input--distance') as HTMLInputElement;
  const inputDuration = document.querySelector('.form__input--duration') as HTMLInputElement;
  const inputCadence = document.querySelector('.form__input--cadence') as HTMLInputElement;
  const inputElevation = document.querySelector('.form__input--elevation') as HTMLInputElement;


  class Workout {
    private date = new Date();
    private id = (Date.now() + '').slice(-10);

    constructor(public coords: number[], public distance: number, public duration: number){}

  }

  class Running extends Workout {
    private pace: number = 0;
    type = 'running';

    constructor(public coords: number[], public distance: number, public duration: number, public cadence: number) {
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
    type = 'cycling';
    constructor(public coords: number[], public distance: number, public duration: number, public elevationGain: number) {
      super(coords, distance, duration);
      this.calcSpeed();
    }

    calcSpeed() {
      //km/hour
      return this.speed = +this.distance / (+this.duration / 60);
    }
  }



  ////////////////////// ARCHITECTURE  ////////////////
  class App {
    private map: any; 
    private mapEvent: any;
    private workouts: any = [];

    constructor(){
      this._getPosition();
      form?.addEventListener('submit', this._newWorkout.bind(this));
      inputType?.addEventListener('change', this._toggleElevationField);
    }

    private _getPosition(){
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), 
        ()=>alert(`Could not get your position!`));
    }

    private _loadMap(position: any){
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

    private _showForm(mapE: Event){
      this.mapEvent = mapE;
      form?.classList.remove('hidden');
      inputDistance?.focus();
    }

    private _toggleElevationField(){
      inputElevation?.closest('.form__row')?.classList.toggle('form__row--hidden');
      inputCadence?.closest('.form__row')?.classList.toggle('form__row--hidden');
    }

    private _newWorkout(e: Event) {

      const validInputs = (...inputs: number[]) => inputs.every(item => Number.isFinite(item));
      const allPositives = (...inputs: number[]) => inputs.every(item => item > 0);
      
      e.preventDefault();

      // get data from form
      const type = inputType?.value;
      const distance = +inputDistance?.value;
      const duration = +inputDuration?.value;
        //@ts-ignore
      const {lat, lng} = this.mapEvent.latlng;
      let workout: any;

      
      // if workout running, create running object
      if(type == 'running') {
        const cadence = +inputCadence.value;
        // check if data is valid
        if(
          // !Number.isFinite(distance) || 
          // !Number.isFinite(duration || 
          //   !Number.isFinite(cadence)
          !validInputs(distance, duration, cadence) || !allPositives(distance, duration, cadence)
        ) return alert(`Inputs have to be positive numbers`);

         workout = new Running([lat, lng], distance, duration, cadence);
      }

      // if workout cycling, create cycling object
      if(type == 'cycling') {
        const elevation = +inputElevation?.value;

        if(!validInputs(distance, duration, elevation)  || !allPositives(distance, duration)) return alert(`Inputs have to be positive numbers`);

        workout = new Cycling([lat, lng], distance, duration, elevation)
      }

      // Add new object to workout array
      this.workouts.push(workout);



      //Render workout on map as marker
      this.renderWorkMarker(workout);

  
      inputDistance.value = inputDuration.value = inputCadence.value = '';
    }

    renderWorkMarker(workout: any) {
      //@ts-ignore
      L.marker(workout.coords).addTo(this.map)
      //@ts-ignore
      .bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `${workout.type}-popup`
      }))
      .setPopupContent('Hello from ...')
      .openPopup();
    }

  }

  const app = new App();



  
}