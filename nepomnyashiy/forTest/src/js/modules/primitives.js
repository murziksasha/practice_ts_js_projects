export default function primitives() {
    //   Создайте интерфейсы User и Admin.
    const user1 = {
        login: 'michey',
        password: 'superSecret555',
        email: 'some@mail.com',
        isOnline: false,
        lastVisited: new Date(2023, 7, 25)
    };
    const admin1 = {
        login: 'adm4444',
        password: 'adminInside55',
        email: 'adminMy@mail.com',
        isOnline: true,
        lastVisited: new Date(2023, 8, 30),
        role: 'admin'
    };
    // Создайте функцию login, которая принимает один параметр в виде объекта с логином и паролем.
    function login(myPerson) {
        // Проверьте, что поля не пустые и выведите приветственное сообщение в консоль.
        if (myPerson.login.length > 0 && myPerson.password) {
            console.log(`Hello ${myPerson.login}, you are wrote pass ${myPerson.password}`);
        }
    }
    login(user1);
    login(admin1);
}
//# sourceMappingURL=primitives.js.map