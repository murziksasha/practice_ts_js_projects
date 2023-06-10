

export function stringCoolPractice() {

    // Data needed for a later exercise
  const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

    const codeBar = (str: string) => str.slice(0, 3).toUpperCase();

    const flight = flights.split('+');

    for (const str of flight){
      const [type, from, to, time] = str.split(';');
      const output = `${type.startsWith('_Delayed') ? type.replace(/_/, '💕 ').replace('_', ' ') : type.replace(/_/g, ' ')} from ${codeBar(from)} to ${codeBar(to)} (${time.replace(':', 'h')})`.padStart(39);
      console.log(output);
    }

    // Data needed for first part of the section
    const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  };



}