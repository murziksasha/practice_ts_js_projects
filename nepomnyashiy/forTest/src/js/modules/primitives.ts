export default function primitives() {

//   Создайте интерфейсы User и Admin.

// User должен содержать следующие ключи:

// login, email, password, isOnline, lastVisited
// Admin содержит все те же ключи, плюс ключ role.

interface IUser {
  login: string;
  email: string;
  password: number | string;
  isOnline: boolean;
  lastVisited: Date;
}

interface IAdmin extends IUser {
  role: string;
}

const user1: IUser = {
  login: 'michey',
  password: 'superSecret555',
  email: 'some@mail.com',
  isOnline: false,
  lastVisited: new Date(2023, 7, 25)
}

const admin1: IAdmin = {
  login: 'adm4444',
  password: 'adminInside55',
  email: 'adminMy@mail.com',
  isOnline: true,
  lastVisited: new Date(2023, 8, 30),
  role: 'admin'
}

 

// Создайте функцию login, которая принимает один параметр в виде объекта с логином и паролем.

function login(myPerson: IUser | IAdmin): void {
  // Проверьте, что поля не пустые и выведите приветственное сообщение в консоль.
  if(myPerson.login.length > 0 && myPerson.password) {
    console.log(`Hello ${myPerson.login}, you are wrote pass ${myPerson.password}`);
  }
}

login(user1);
login(admin1);





  
}
