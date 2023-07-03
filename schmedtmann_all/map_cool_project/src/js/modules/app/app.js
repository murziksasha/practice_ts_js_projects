export function app() {
    const form = document.querySelector('.form');
    const containerWorkouts = document.querySelector('.workouts');
    const inputType = document.querySelector('.form__input--type');
    const inputDistance = document.querySelector('.form__input--distance');
    const inputDuration = document.querySelector('.form__input--duration');
    const inputCadence = document.querySelector('.form__input--cadence');
    const inputElevation = document.querySelector('.form__input--elevation');
    class Workout {
        constructor(coords, distance, duration) {
            this.coords = coords;
            this.distance = distance;
            this.duration = duration;
            this.date = new Date();
            this.id = (Date.now() + '').slice(-10);
            this.description = '';
            this.type = '';
        }
        _setDescription() {
            // prettier-ignore
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
        }
    }
    class Running extends Workout {
        constructor(coords, distance, duration, cadence) {
            super(coords, distance, duration);
            this.coords = coords;
            this.distance = distance;
            this.duration = duration;
            this.cadence = cadence;
            this.pace = 0;
            this.type = 'running';
            this.calcPace();
            this._setDescription();
        }
        calcPace() {
            //min/km
            return this.pace = +this.duration / +this.distance;
        }
    }
    class Cycling extends Workout {
        // elevationGain: number = 0;
        constructor(coords, distance, duration, elevationGain) {
            super(coords, distance, duration);
            this.coords = coords;
            this.distance = distance;
            this.duration = duration;
            this.elevationGain = elevationGain;
            this.speed = 0;
            this.type = 'cycling';
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
        constructor() {
            this.mapZoomLevel = 13;
            this.workouts = [];
            //get user's position
            this._getPosition();
            //get data from local storage
            this._getLocalStorage();
            //Attack event handlers
            form === null || form === void 0 ? void 0 : form.addEventListener('submit', this._newWorkout.bind(this));
            inputType === null || inputType === void 0 ? void 0 : inputType.addEventListener('change', this._toggleElevationField);
            containerWorkouts === null || containerWorkouts === void 0 ? void 0 : containerWorkouts.addEventListener('click', (e) => this._moveToPopup(e));
        }
        _getPosition() {
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () => alert(`Could not get your position!`));
        }
        _loadMap(position) {
            const { latitude } = position.coords;
            const { longitude } = position.coords;
            const coords = [latitude, longitude];
            //@ts-ignore
            this.map = L.map('map').setView(coords, this.mapZoomLevel);
            //@ts-ignore
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);
            this.map.on('click', this._showForm.bind(this));
            this.workouts.forEach((work) => {
                this._renderWorkout(work);
                this._renderWorkMarker(work);
            });
        }
        _showForm(mapE) {
            this.mapEvent = mapE;
            form === null || form === void 0 ? void 0 : form.classList.remove('hidden');
            inputDistance === null || inputDistance === void 0 ? void 0 : inputDistance.focus();
        }
        _hideForm() {
            inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
            if (form) {
                form.style.display = 'none';
                form === null || form === void 0 ? void 0 : form.classList.add('hidden');
                setTimeout(() => form.style.display = 'grid', 1000);
            }
        }
        _toggleElevationField() {
            var _a, _b;
            (_a = inputElevation === null || inputElevation === void 0 ? void 0 : inputElevation.closest('.form__row')) === null || _a === void 0 ? void 0 : _a.classList.toggle('form__row--hidden');
            (_b = inputCadence === null || inputCadence === void 0 ? void 0 : inputCadence.closest('.form__row')) === null || _b === void 0 ? void 0 : _b.classList.toggle('form__row--hidden');
        }
        _newWorkout(e) {
            const validInputs = (...inputs) => inputs.every(item => Number.isFinite(item));
            const allPositives = (...inputs) => inputs.every(item => item > 0);
            e.preventDefault();
            // get data from form
            const type = inputType === null || inputType === void 0 ? void 0 : inputType.value;
            const distance = +(inputDistance === null || inputDistance === void 0 ? void 0 : inputDistance.value);
            const duration = +(inputDuration === null || inputDuration === void 0 ? void 0 : inputDuration.value);
            //@ts-ignore
            const { lat, lng } = this.mapEvent.latlng;
            let workout;
            // if workout running, create running object
            if (type == 'running') {
                const cadence = +inputCadence.value;
                // check if data is valid
                if (
                // !Number.isFinite(distance) || 
                // !Number.isFinite(duration || 
                //   !Number.isFinite(cadence)
                !validInputs(distance, duration, cadence) || !allPositives(distance, duration, cadence))
                    return alert(`Inputs have to be positive numbers`);
                workout = new Running([lat, lng], distance, duration, cadence);
            }
            // if workout cycling, create cycling object
            if (type == 'cycling') {
                const elevation = +(inputElevation === null || inputElevation === void 0 ? void 0 : inputElevation.value);
                if (!validInputs(distance, duration, elevation) || !allPositives(distance, duration))
                    return alert(`Inputs have to be positive numbers`);
                workout = new Cycling([lat, lng], distance, duration, elevation);
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
        _renderWorkMarker(workout) {
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
        _renderWorkout(workout) {
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
            if (workout.type === 'running') {
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
            if (workout.type === 'cycling') {
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
            form === null || form === void 0 ? void 0 : form.insertAdjacentHTML('afterend', html);
        }
        _moveToPopup(e) {
            const target = e.target;
            const workoutEl = target === null || target === void 0 ? void 0 : target.closest('.workout');
            if (!workoutEl)
                return;
            const workout = this.workouts.find((work) => work.id === workoutEl.dataset.id);
            this.map.setView(workout.coords, this.mapZoomLevel, {
                animate: true,
                pan: {
                    duration: 1,
                }
            });
        }
        _setLocalStorage() {
            localStorage.setItem('workouts', JSON.stringify(this.workouts));
        }
        _getLocalStorage() {
            let data = localStorage.getItem('workouts');
            if (data) {
                this.workouts = JSON.parse(data);
            }
        }
    }
    const app = new App();
}
//# sourceMappingURL=app.js.map