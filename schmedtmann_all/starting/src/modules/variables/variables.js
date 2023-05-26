export function variables() {
    const country = 'Italy';
    const lang = 'English';
    const population = 45;
    const isIsland = false;
    if (lang === 'English' && population < 50 && !isIsland) {
        console.log(`You should live in ${country} :)`);
    }
    else {
        console.log(`${country} does not meet your criteria :(`);
    }
}
;
//# sourceMappingURL=variables.js.map