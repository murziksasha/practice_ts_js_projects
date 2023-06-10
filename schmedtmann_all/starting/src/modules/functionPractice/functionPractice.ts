
interface ArayOfFlight {
  flightNum: number | string,
  numPassengers: number,
  price: number
}

export function functionPractice() {

  const booking: Array<ArayOfFlight> = [];

  const createBooking = (flightNum: number | string, numPassengers: number = 1, price: number = 199 * numPassengers) => {
    const bookingLocalObj = {
      flightNum,
      numPassengers,
      price,      
    }
    console.log(bookingLocalObj);
    booking.push(bookingLocalObj);
  }
  createBooking(1503, undefined, 5);
  console.log(booking);
  
}