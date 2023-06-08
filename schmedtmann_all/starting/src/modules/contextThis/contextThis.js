export function contextThis() {
    const sasha = {
        firstName: 'Sasha',
        year: 1985,
        calcAge: function () {
            console.log(this);
            console.log(2023 - this.year);
            const greet = () => {
                console.log(`Hey from arrow method ${this.firstName}`);
            };
            greet();
        },
    };
    sasha.calcAge();
}
//# sourceMappingURL=contextThis.js.map