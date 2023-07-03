


export function app() {



  const form = document.querySelector('.form') as HTMLFormElement;
  const containerWorkouts = document.querySelector('.workouts');
  const inputType = document.querySelector('.form__input--type') as HTMLInputElement;
  const inputDistance = document.querySelector('.form__input--distance') as HTMLInputElement;
  const inputDuration = document.querySelector('.form__input--duration') as HTMLInputElement;
  const inputCadence = document.querySelector('.form__input--cadence') as HTMLInputElement;
  const inputElevation = document.querySelector('.form__input--elevation') as HTMLInputElement;


  class Workout {
    private date = new Date();
    id = (Date.now() + '').slice(-10);
    description: string = '';
    type: string = '';

    constructor(public coords: number[], public distance: number, public duration: number){
    }

    _setDescription() {
      // prettier-ignore
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
    }

  }

  class Running extends Workout {
    public pace: number = 0;
    type = 'running';

    constructor(public coords: number[], public distance: number, public duration: number, public cadence: number) {
      super(coords, distance, duration);
      this.calcPace();
      this._setDescription();
    }

    calcPace(){
      //min/km
     return this.pace = +this.duration / +this.distance;
    }
  }

  class Cycling extends Workout {
    speed: number = 0;
    type = 'cycling';
    // elevationGain: number = 0;
    constructor(public coords: number[], public distance: number, public duration: number, public elevationGain: number) {
      super(coords, distance, duration);
      this.calcSpeed();
      this._setDescription();
    }

    calcSpeed() {
      //km/hour
      return this.speed = +this.distance / (+this.duration / 60);
    }
  }



  ////////////////////// ARCHITECTURE  ////////////////
  class App {
    private map: any; 
    private mapZoomLevel = 13;
    private mapEvent: any;
    private workouts: any = [];

    constructor(){

      //get user's position
      this._getPosition();

      //get data from local storage
      this._getLocalStorage();
    
      //Attack event handlers
      form?.addEventListener('submit', this._newWorkout.bind(this));
      inputType?.addEventListener('change', this._toggleElevationField);
      containerWorkouts?.addEventListener('click', (e) => this._moveToPopup(e));
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
        this.map = L.map('map').setView(coords, this.mapZoomLevel);
        //@ts-ignore
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
  
        this.map.on('click', this._showForm.bind(this));
        this.workouts.forEach((work: any) => {
          this._renderWorkout(work);
          this._renderWorkMarker(work);
        });


    }

    private _showForm(mapE: Event){
      this.mapEvent = mapE;
      form?.classList.remove('hidden');
      inputDistance?.focus();
    }

    private _hideForm() {
      inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
      if(form){
        form.style.display = 'none';
        form?.classList.add('hidden');
        setTimeout(() => form.style.display = 'grid', 1000 );
      }
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
      this._renderWorkMarker(workout);

      //Render workout on list
      this._renderWorkout(workout);

  
      // hide form and clear all inputs
      this._hideForm();

      //Set local storage to all Windows
      this._setLocalStorage();
    }

    private _renderWorkMarker(workout: any) {
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
      .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️ ' : '🚴‍♀️ '}${workout.description}`)
      .openPopup();
    }

    private _renderWorkout(workout: any) {
      let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️ ' : '🚴‍♀️ '}
          </span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
      `;
      if(workout.type === 'running'){
        html += `
            <div class="workout__details">
              <span class="workout__icon">⚡️</span>
              <span class="workout__value">${workout.pace.toFixed(1)}</span>
              <span class="workout__unit">min/km</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">🦶🏼</span>
              <span class="workout__value">${workout.cadence}</span>
              <span class="workout__unit">spm</span>
            </div>
          </li>
        `;
      }

      if(workout.type === 'cycling'){
        html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>
        `;
      }

      form?.insertAdjacentHTML('afterend', html);
    }

    private _moveToPopup(e: Event) {
      const target = e.target as HTMLElement;
      const workoutEl = target?.closest('.workout') as HTMLElement;
      if(!workoutEl) return;
      const workout = this.workouts.find((work: HTMLElement) => work.id === workoutEl.dataset.id);
      this.map.setView(workout.coords, this.mapZoomLevel, {
        animate: true,
        pan: {
          duration: 1,
        }
      });

    }

    private _setLocalStorage(){
      localStorage.setItem('workouts', JSON.stringify(this.workouts));
    }

    private _getLocalStorage() {
      let data = localStorage.getItem('workouts');
      if(data){
        this.workouts = JSON.parse(data);
      }
    }

  }

  const app = new App();



  
}