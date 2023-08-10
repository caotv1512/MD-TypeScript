"use strict";
// ================ Bài 6 OOP Abtractions (Trừu tượng)================
// I. Abtract Class - class trừu tượng trong OOP
// 1. abstract class là một lass trừu tượng trong OOP, được khai báo bằng từ khóa abstract
// - abstract class cũng giống  như class bình thường đều có thuộc tính và phương thức.
// - Không thể khởi tạo một đối tượng từ abtract class
// - Để sử dụng abtract class chúng ta cần extend sang một child class (lớp con)
// 2. abstract method :
// absract method là một method trừu tượng trong abtract class được khai
// báo với từ khóa abstract
// abstract method được sử dụng trong  abstract class
// abstract class Animal {
//     public name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     abstract eat(): void;
// }
// class Dog extends Animal {
//     constructor(name: string) {
//         super(name);
//     }
//     say() {
//         console.log(`${this.name} is eating`);
//     }
//     eat(): void {
//         console.log(`${this.name} is eating`);
//     }
// }
// abstract class Rikkei {
//     student: string
//     birth: string
//     constructor(student: string, birth: string) {
//         this.student = student
//         this.birth = birth
//     }
//     sayHello() {
//         console.log("Xin chào RA")
//     }
//     abstract getInfo(): string
// }
// class SV1 extends Rikkei {
//     course: string
//     constructor(student: string, birth: string, course: string) {
//         super(student, birth)
//         this.course = course
//     }
//     getInfo() {
//         super.sayHello()
//         return `${this.student}`
//     }
// }
// const student = new SV1("Jon","15/5/2003","JS")
// student.sayHello()
// console.log(student.getInfo())
// II. Interface - interface trừu tượng trong OOP
// - Là một bộ khung mẫu có chứa các thuộc tính và phương thức để
// class có thể implements lại nó
// - Không thể khởi tạo lại 1 đối tượng từ interface
// - Interface có thể extend( kế thừa) từ một hoặc nhiều Interface khác.
// -
// interface Interface{
//      name: string
// }
// interface Admin {
//     id: string
// }
// interface  User extends Interface, Admin {
// }
// Định nghĩa các kiểu dữ liệu gốc
// interface Person {
//     name: string;
//     age: number;
// }
// interface Address {
//     city: string;
//     country: string;
// }
// Kết hợp hai kiểu dữ liệu thành một kiểu giao
// type PersonWithAddress = Person & Address;
// Tạo đối tượng sử dụng kiểu giao
// const personWithAddress: PersonWithAddress = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     country: "USA",
// };
// console.log("Name:", personWithAddress.name);
// console.log("Age:", personWithAddress.age);
// console.log("City:", personWithAddress.city);
// console.log("Country:", personWithAddress.country);
// let anotherValue: any = 'hello world';
// let strUpperCase: string = (anotherValue as string).toUpperCase();
// console.log(typeof anotherValue);
// function fetchDataFromServer(callback: { (data: any): void }) {
//     setTimeout(function() {
//       const data = { name: 'Alice', age: 30 };
//       callback(data);
//     }, 1000);
//   }
//   function displayData(data: { name: string; age: number }) {
//     console.log('Name:', data.name);
//     console.log('Age:', data.age);
//   }
//   fetchDataFromServer(displayData);
// function fetchDataFromServer() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       const data = { name: "Bob", age: 25 };
//       resolve(data); // Giả sử dữ liệu đã được trả về từ máy chủ
//     }, 1500);
//   });
// }
// fetchDataFromServer()
//   .then(function (data: any) {
//     console.log("Name:", data.name);
//     console.log("Age:", data.age);
//   })
//   .catch(function (error) {
//     console.error("Error:", error);
//   });
// function fetchDataFromServer(): Promise<{ name: string, age: number }> {
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         const data = { name: 'Charlie', age: 28 };
//         resolve(data); // Giả sử dữ liệu đã được trả về từ máy chủ
//       }, 2000);
//     });
//   }
//    function displayData() {
//     try {
//       const data: any =  fetchDataFromServer();
//       console.log('Name:', data.name);
//       console.log('Age:', data.age);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
//   displayData();
