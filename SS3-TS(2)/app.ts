// let randomArray: any = ["ADMIN", "USER", 1, 2, true];

// Kiểu dữ liệu tuple
// - Tuple là một kiểu dữ liệu để fix cứng các kiểu dữ liệu thuộc các phần tử trong Array
// - Optional:
// roles [ADMIN, MANAGER, EMPLOYEE] => được quền truy câp
// let roles: [boolean, number, string, (string | number), {}] = [
//  true,
//   1,
//   "EMPLOYEE",
//   "ADMIN",
//   {key: 'value'}
// ];
// roles.push("USER");
// console.log(roles);

// // Kiểu dữ liệu enum:
// - enum là một tập hợp các giá trị hằng số không thể thay đổi,
// - enum thường được sử đụng để validate truy vấn dữ liệu.
// - Có thể dùng enum cả bên phía phát triển client và server,
// thường sẽ sử dụng bê server nhiều hơn
// enum Roles {
//   ADMIN,
//   MANAGER,
//   EMPLOYEE,
// }

// Bài toán: Cho người dùng đăng nhập,
// validate xem người dùng đăng nhặp vào có phải thuộc trường roles hay không,
// nếu có đăng nhập thành công, nếu không đăng nhập thất bại

// const user: { username: string; password: string; roles: string |number } = {
//   username: "admin",
//   password: "123",
//   roles: 3,
// };

// if (user.roles === (Roles.ADMIN || Roles.MANAGER || Roles.EMPLOYEE)) {
// if(user.roles === Roles.ADMIN){
//     user.roles = "ADMIN";
//     console.log(user);

// }
//   console.log("Đăng nhập thành công");
// } else {
//   console.log("Đăng nhập thất bại");
// }

// Union Type: Là một kiểu dữ liệu cho phép người dùng có thể thêm và gán một biến
// có thể thay đổi nhiều kiểu dữ liệu khác nhau tùy theo bài toán đưa ra
// let randomValue: string | number = "ADMIN";

// function checkStringOrNumer(value1: number, value2: number): number {
//   let result: number;
//   result = value1 + value2;

//   return result;
// }

// - Alias type:

// type User = { username: string; password: string; roles: string | number };
// const userList: User[] = [
//     {username: "caoTV", password: "123", roles: 3},
// ]

// const user: { username: string; password: string; roles: string | number } = {
//   username: "admin",
//   password: "123",
//   roles: 3,
// };

// const user2: User = {
//   username: "admin",
//   password: "123",
//   roles: 3,
// };

// type Numbers = number

// const number1: Numbers = 1

//Function & type function
type FunctionMap = (a: string) => string[];
// type ArrayPerson = string[];
// const faMap = (callback: FunctionMap): void => {
//   callback("hello");
// };
// console.log(faMap);

// faMap((a:string = "hello") => {
//   const arr: string[] = [];
//   arr.push(a);
//   console.log(arr);

//   return arr;
// });

function total(a: string, b: number): any {
  return a + b;
}

type callback = (x: number, y: number) => number;
function test(a: number, b: number, c: (a:number, b:number)=>number): any {
//    c(a, b);
console.log(c(a, b));

}
test(10, 2, (a, b) => a + b);

type numbers = number;

const a: numbers = 10


// cach ko toi uu 
console.time('doSomething')
console.log('start');

const same = (arr1: number[], arr2: number[]) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
 
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if(arr1[i] ** 2 !== arr2[j]) {
        return false;
      }
    }
    }
    return true;
}

console.time();
// dosomething
console.timeEnd('doSomething')

