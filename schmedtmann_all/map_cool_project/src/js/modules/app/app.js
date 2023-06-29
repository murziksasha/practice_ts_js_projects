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
    let map;
    let mapEvent;
    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        const coords = [latitude, longitude];
        //@ts-ignore
        map = L.map('map').setView(coords, 13);
        //@ts-ignore
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        map.on('click', (mapE) => {
            mapEvent = mapE;
            form === null || form === void 0 ? void 0 : form.classList.remove('hidden');
            inputDistance === null || inputDistance === void 0 ? void 0 : inputDistance.focus();
        });
    }, () => alert(`Could not get your position!`));
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
        e.preventDefault();
        inputDistance.value = inputDuration.value = inputCadence.value = '';
        //@ts-ignore
        const { lat, lng } = mapEvent.latlng;
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
    inputType === null || inputType === void 0 ? void 0 : inputType.addEventListener('change', () => {
        var _a, _b;
        console.log('select');
        (_a = inputElevation === null || inputElevation === void 0 ? void 0 : inputElevation.closest('.form__row')) === null || _a === void 0 ? void 0 : _a.classList.toggle('form__row--hidden');
        (_b = inputCadence === null || inputCadence === void 0 ? void 0 : inputCadence.closest('.form__row')) === null || _b === void 0 ? void 0 : _b.classList.toggle('form__row--hidden');
    });
}
//# sourceMappingURL=app.js.map