export function app() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
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
            this.calcPace();
        }
        calcPace() {
            //min/km
            return this.pace = +this.duration / +this.distance;
        }
    }
    class Cycling extends Workout {
        constructor(coords, distance, duration, elevationGain) {
            super(coords, distance, duration);
            this.coords = coords;
            this.distance = distance;
            this.duration = duration;
            this.elevationGain = elevationGain;
            this.speed = 0;
            this.calcSpeed();
        }
        calcSpeed() {
            //km/hour
            return this.speed = +this.distance / (+this.duration / 60);
        }
    }
    const run1 = new Running(['39', '-12'], '5.2', '24', '178');
    const cycling1 = new Cycling(['39', '-12'], '27', '95', '523');
    console.log(run1);
    console.log(cycling1);
    ////////////////////// ARCHITECTURE  ////////////////
    class App {
        constructor() {
            this._getPosition();
            form === null || form === void 0 ? void 0 : form.addEventListener('submit', this._newWorkout.bind(this));
            inputType === null || inputType === void 0 ? void 0 : inputType.addEventListener('change', this._toggleElevationField);
        }
        _getPosition() {
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () => alert(`Could not get your position!`));
        }
        _loadMap(position) {
            const { latitude } = position.coords;
            const { longitude } = position.coords;
            const coords = [latitude, longitude];
            //@ts-ignore
            this.map = L.map('map').setView(coords, 13);
            //@ts-ignore
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);
            this.map.on('click', this._showForm.bind(this));
        }
        _showForm(mapE) {
            this.mapEvent = mapE;
            form === null || form === void 0 ? void 0 : form.classList.remove('hidden');
            inputDistance === null || inputDistance === void 0 ? void 0 : inputDistance.focus();
        }
        _toggleElevationField() {
            var _a, _b;
            (_a = inputElevation === null || inputElevation === void 0 ? void 0 : inputElevation.closest('.form__row')) === null || _a === void 0 ? void 0 : _a.classList.toggle('form__row--hidden');
            (_b = inputCadence === null || inputCadence === void 0 ? void 0 : inputCadence.closest('.form__row')) === null || _b === void 0 ? void 0 : _b.classList.toggle('form__row--hidden');
        }
        _newWorkout(e) {
            e.preventDefault();
            // get data from form
            const type = inputType === null || inputType === void 0 ? void 0 : inputType.value;
            const distance = +(inputDistance === null || inputDistance === void 0 ? void 0 : inputDistance.value);
            const duration = +(inputDuration === null || inputDuration === void 0 ? void 0 : inputDuration.value);
            // if workout running, create running object
            if (type == 'running') {
                const cadence = +inputCadence.value;
                // check if data is valid
                if (!Number.isFinite(distance) || !Number.isFinite(duration || !Number.isFinite(cadence)))
                    return alert(`Inputs have to be positive numbers`);
            }
            // if workout cycling, create cycling object
            if (type == 'cycling') {
                const cadence = +(inputElevation === null || inputElevation === void 0 ? void 0 : inputElevation.value);
            }
            // Add new object to workout array
            //Render workout on map as marker
            inputDistance.value = inputDuration.value = inputCadence.value = '';
            //@ts-ignore
            const { lat, lng } = this.mapEvent.latlng;
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
                .setPopupContent('Hello from ...')
                .openPopup();
        }
    }
    const app = new App();
}
//# sourceMappingURL=app.js.map