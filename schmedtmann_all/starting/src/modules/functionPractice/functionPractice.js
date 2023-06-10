export function functionPractice() {
    const booking = [];
    const createBooking = (flightNum, numPassengers = 1, price = 199 * numPassengers) => {
        const bookingLocalObj = {
            flightNum,
            numPassengers,
            price,
        };
        console.log(bookingLocalObj);
        booking.push(bookingLocalObj);
    };
    createBooking(1503, undefined, 5);
    console.log(booking);
}
//# sourceMappingURL=functionPractice.js.map