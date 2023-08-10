console.log("Hello World");
// Cách khai báo một biến trong TypeScript
//- Khai báo một biến có kiểu dữ liệu là sting
let myName: string = "CaoTV";
//- Khai báo một biến có kiểu dữ liệu là number
const num1: number = 1;

//- Cách khai báo một function nhận vào một biến có kiểu dữ liệu là number
// function sum(a: number, b: number): number {
//   return a + b;
// }
// let a = 10;

// Cách khai báo 1 object với
// name: string, age: number, gender: string
const user: { name: string; age: number; gender: string } = {
  name: "CaoTV",
  age: 10,
  gender: "Male",
};
console.log(user);

// Khai báo một biến là Array trong TypeScript
// Cách 1: khai báo 1 array với các phần tử trong mảng là string
const names: string[] = ["Nguyen", "Tran", "Huy"];

let userName = "Cao Ngon Zai";

// Thuật toán viết 1 hàm tính tổng 2 tham số truyền vào.
// B1: Tạo ra 1 function bao gồm 2 tham số truyền vào
function sum(a: number, b: number): number {
  // Bước 2: viết logic để tính tổng 2 tham số đó.
//   let sum = a + b;
  // Bước 3: Trả về tổng của hai tham số đó.
  return a + b;
}
console.log(sum(1, 2));




