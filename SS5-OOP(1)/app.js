"use strict";
// ========= LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG (OOP)==========
// OOP là gi?
// - Là một mô hình lập trình dựa trên những đối tượng thực tế (User, Product, ...)
// - Đối tượng: Là một khái niện chứa các thuôc tính và phương thức. Dựa trên đối tượng
// chúng ta có thể làm rõ và gói gọn dữ liệu thành một khối tương ứng.
// Class:
// -Là một khuân mẫu, giúp chúng ta khởi tạo các đối tượng dễ dàng hơn.
// - Class giúp chúng ta thấy rõ được đối gồm những thuộc tính nào.
// const user = {
//   username: "CaoTV",
//   email: "123456",
//   age: 20,
// };
// function getUser(username: string, email: string, age: number) {
//     return ` Username: ${username} Email: ${email} Age: ${age}`;
// }
// const user2 = {
//   username: "CaoTV2",
//   email: "123456",
//   age: 20,
// };
// class User {
//   username: string; // Đây laf thuộc tính
//   email: string;
//   age: number;
//   constructor(username: string, email: string, age: number) { // Đây phương thức set giá trị
//     console.log(username.length, 'username');
//     if (username.length <=25) {
//         this.username = username;
//       } else {
//         this.username = 'CaoTV11'
//       }
//     // this.username = username;
//     this.email = email;
//     this.age = age;
//   }
//   get name(){
//     return this.username;
//   }
//   set name(value: string) {
//       if (value.length <=25) {
//         this.username = value;
//       } else {
//         this.username = 'CaoTV'
//       }
//     }
//   private getUser() { // đay la phướng
//     const result = ` Username: ${this.username} Email: ${this.email} Age: ${this.age}`;
//     return result;
//   }
//   getOnlyUser() {
//     const result = this.getUser();
//     return result;
//   }
// }
// const user = new User("CaoTV22 aaaaa ", "caotv@gmail.com", 20);
// const user = new User("CaoTV", "CaoTV@gmail.com", 20);
// console.log(user.getOnlyUser());
// ==== 4 Tính chất của OOP ===
// 1. Trừu tượng (Abstraction).
// - Là tính chất che giấu đi những thuộc tính KHÔNG cần thiết của 1 đối tượng,
// giúp cho người dùng có một cái nhìn đơn giản, khái quát hơn về đối tượng đó mà không
// cần phải đi sâu về những tiểu tiết đã được giấu đi.
// 2. Đóng gói (Encapsulation).
// - Là tính chất dùng để ngăn chặn quyền truy cập các thuộc tính và phương thức của 1 đối tương từ bên ngoài
// - private, readonly
// 3. Kế thừa (Inheritance).
// - là tính chất dùng để chỉ các thuộc tính và phương thức từ class Cha (Parent class)
// sang class con (Child class)
// - ChildClass sẽ kế thừa lại toàn bộ thuộc và phương thức từ ParentClass
//  và có thể thêm các thuộc tính và phương thức mới
// 4. Đa hình (Polymorphism).
// - Là tính chất thể hiện sự hình thái
// - Ứng biến từ tính chất kế thừa và ghi đè các dữ liệu theo mẫu thuộc tính và phương thức từ ParentClass
// class Admin extends User {
//   isAdmin: boolean;
//   constructor(username: string, email: string, age: number, admin: boolean) {
//     super(username, email, age);
//     this.isAdmin = admin;
//   }
// }
// class Manager extends Admin {
//     isAdmin: boolean;
//     constructor(username: string, email: string, age: number, admin: boolean) {
//       super(username, email, age, admin);
//       this.isAdmin = admin;
//     }
//   }
// Bài tập: dựa vào cách khai báo class, instance. Viết một Class Calculation đê nhận vào,
//  2 thuộc tính và 4 phương thức
// Cộng, trừ, nhân, chia hai thuộc tính đó sau đó in ra màn hình.
// const stusdents = new Array(100);
// console.log(stusdents.length);
class Shape {
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side ** 2;
    }
    perimeter() {
        return 4 * this.side;
    }
}
// Không thể tạo đối tượng từ Abstract Class Shape
// const shape = new Shape(); // Gây lỗi TS2511: Cannot create an instance of an abstract class.
const circle = new Circle(5);
console.log("Diện tích hình tròn:", circle.area()); // Kết quả: 78.53981633974483
console.log("Chu vi hình tròn:", circle.perimeter()); // Kết quả: 31.41592653589793
const square = new Square(4);
console.log("Diện tích hình vuông:", square.area()); // Kết quả: 16
console.log("Chu vi hình vuông:", square.perimeter()); // Kết quả: 16
