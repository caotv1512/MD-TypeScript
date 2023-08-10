// SS7: Advan-Types in TypeScript
// 1. Intersection type:
//- SỬ dụng ký hiệu " & " để kêt hợp những interface hoặc type (dạng object)
// và kết hợp chúng lại với nhau

// interface User {
//     name: string;
//     age: number;
// }
// interface Address{
//     city: string;
//     country: string;
// }

// type UserAndAddress = User & Address;

// const userAndAddress: UserAndAddress = {
//     name: "CaoTV",
//     age: 20,
//     city: "HCM",
//     country: "VN",
// };

// type Number1 = string | number;
// type Number2 = number | boolean;

// type Number3 = Number1 & Number2;
// ==> typeof Number3 === number  NOT  typeof Number3 === string| number| boolean
// const number: Number3 = 10;

// ============ Type Guard in TS ================
// - Có các từ khóa liên quan là : typeof, in, instanceof
// - typeof: check kiểu dữ liệu của một tham số truyền vào
// - in check tham số truyền vào có phải key trong object hoặc value trong
// array hay không
// - instanceof check tham số truyền vào có phải đối tượng của class hay không.
// class Numbers {
//   isNumber() {
//     console.log("This is number");
//   }
// }
// class Strings {
//   isString() {
//     console.log("This is string");
//   }
// }
// class User {
//   isUser() {
//     console.log("This is user");
//   }
// }

// type check = Numbers | Strings;
// const v1 = new Numbers();
// const v2 = new Strings();
// const v3 = new User();

// function check(checkType: check) {
//   // check đối tượng checkType có phải đối tượng của class Numbers hay không.
//   if (checkType instanceof Numbers) {
//     checkType.isNumber();
//   } else if (checkType instanceof Strings) {
//     checkType.isString();
//   } else {
//     console.log("Type is error");
//   }
// }

// check(v2);


// let anotherValue: any = 'hello world';
// let updateType: string = (anotherValue as string).toUpperCase();
// // console.log(typeof anotherValue);
// // console.log(updateType);

// const number = 0;

// const newNumber: number= number ?? 10;

// console.log(newNumber);
// if ('') {
//     console.log('Cóoooooooooooooooooooooooooooooooooo');
    
// } else {
//    console.log('Khôngoooooooooooooooooooooooooooooooooo, Cao Ngon Zai Không');
    
// }
// function swap<T>(a: T, b: T): [T, T] {
//     return [b, a];
// }

// let numSwap = swap<number>(1, 2);         // [2, 1]
// let strSwap = swap<string>("hello", "world"); // ["world", "hello"]

interface Lengthwise {
    length: number;
}

function printLength<T extends Lengthwise>(obj: T): void {
    // console.log();
    
    console.log("Length:", obj.toUpperCase());
}

printLength("hello");            // Length: 5
printLength([1, 2, 3, 4, 5]);    // Length: 5
printLength({ length: 10 });     // Length: 10




