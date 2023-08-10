// =================ES6==========================
// 1. Các từ khóa khai báo biến. (let, const)
// - let:
// + let cũng là từ khóa khai báo biến giống như var,
// có thể gán lại giá trị cho biến đó và không có hosting giống như var
// + const: cũng là từ khóa khai báo biến giống var nhưng KHÔNG thể gán lại giá trị cho biến
// và không có hosting giống như var
// for (const index = 0; index < 5; index++) {
//     console.log(index);
// }

// console.log(user1);
// let user2;
// var user1 = "CaoTV";
// console.log(users);

// var users = [
//     { name: "CaoTV", age: 26 },
//     { name: "Dong", age: 26 },
//     { name: "VuBV", age: 26 },
// ];
// users = 1;
// console.log(users);
// let listUser = users ? users  : 1

// === const

// number = 5;
// console.log(number);
// 2. Scope trong ES6:
// - Global scope: là biến biết toàn cầu,
// có thể gọi lại ở mọi scope
// áp dụng cho tất cả các từ khóa khai báo biến, var, let, const

// - function scope: Là phạm vi hoạt động của biến được khai báo trong function
// - Không thể gọi lại biến khi đứng từ ngoài function scope
//  function scope áp dụng cho tất cả các từ khóa khai báo biến: var, let, const.
// function name() {
//     var newName = 'CaoTV'
// }
// console.log(newName);
// var newName = 'Dong'
// name()
// let number = 5
// - Block scope
// - Là phạm vi của biến được khai báo trong if else, for loop, .. {},
// - Không thể gọi lại biến khi đứng từ bên ngoài block scope,
// - Chỉ áp dụng cho từ khóa khai báo biến là const, let
// - Trong block scope var vẫn là biến toàn cầu.
// if (5 < 10) {
//     var string = 'abcabc'
// }
// console.log(string);
// var x = 10; {
//     console.log(x);
//     var x = 2;
//     console.log(x);
// }
// function name(params) {
//     console.log(x);
//     var x = 3;
//     console.log(x);
// }
// name()

// function sum(a, b) {
//   return;
// }
// (() => {
//     console.log(" It is arrow function");
// })();

// console.log(sum(3, 5))
// sum(3, 5);

// Destructuring:
// -object là một dạng ánh xạ và
// gán biến từ object sang một biến mới có cùng key name.
// -array: là 1 dạng ánh xạ biến từ array sang một biến mới
// dựa trên chỉ số index của array
// const user = {
//     name: "CaoTV",
//     age: 26,
//     address: "Ninh Bình",
// };
// let name = user.name;
// let age = user.age;
// const { name, phone, age, address } = user;
// console.log(name, age, address, phone);
// search: bao24h.vn?name=thethao&date=27/02/2023
// let req.params = { name: "thethao", date: "27/02/2023" }

// let { name, date } = req.params
// if(name ==  studen.name) return student

// Tạo 1 mảng number
// const numbers = [1, 2, 3, 4, 6];

// number1 = numbers[0];
// const [number1, number3, number2, number4] = numbers;
// console.log(number1, number2, number3, number4);

// const userList = [];
// const test = users.forEach((item, index) => {
//     for (key in item) {
//         if (key.split("")[0] === "/_([a-z])/g") {}
//     }
//     console.log(item);
// });
// 5. Spead operator
// Sử dụng để đọc được các phần tử trong mảng với cú pháp: ...arrayName.
// Có thể sử dụng để copy 1 mảng sang 1 mảng mới với cú pháp:
// const newArray = [...arrayNam]
// Có thể sử dụng để thêm cac phần tử vào đầu hoặc cuối mảng với cú pháp:
// newArray= [newItem, ...arrayName, newItem]
// let numbers = [1, 3, 2, 5, 4];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// const newList = [0, ...numbers, 6, 8, 7, 9];
// console.log(newList);

// 6. Rest Parameter
// - Cú pháp sự dụng cũng giống như spead operator: ...param
// nhưng thường dùng khi truyền tham số vào function
// với tham số có độ dài không xác định
// Demo:
// function testRest (...params) {
//     logic code ...
// }

// 7. Default paramater
// function sum(a = 1, b = 2) {
//     console.log(a + b);
// }
// sum(3, 5)

const users = [{
        id: 142,
        first_name: "Dewie",
        last_name: "L' Estrange",
        email: "dlestrange3x@marketwatch.com",
        gender: "Male",
        age: 85,
        salary: 14561,
    },
    {
        id: 143,
        first_name: "Eziechiele",
        last_name: "Buxsy",
        email: "ebuxsy3y@linkedin.com",
        gender: "Male",
        age: 62,
        salary: 18808,
    },
];

// const arrName = users.reduce((acc, user) => {
//     acc.push(user.first_name + " " + user.last_name);
//     // const fullName = user.first_name + " " + user.last_name
//     return acc;
// }, []);

// console.log(arrName);

function faMap(arr, callback) {
    // check tham số đầu tiên có phải mảng hay không
    if (!Array.isArray(arr)) {
        throw new Error("The first argument must be an array.");
    }
    // check callback có phải hàm hay không
    if (typeof callback !== "function") {
        throw new Error("The second argument must be a function.");
    }
    const result = [];
    // duyệt qua từng phàn tử và thực hiên hàm callback lên từng phàn tử đó
    for (let i = 0; i < arr.length; i++) {
        // đẩy logic code vào mảng result
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

function faFilter(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new Error("The first argument must be an array.");
    }
    if (typeof callback !== "function") {
        throw new Error("The second argument must be a function.");
    }

    return faMap(arr, (element, index, array) => {
        if (callback(element, index, array)) {
            return element;
        }
        // .filter(Boolean) được sử dụng để lọc các 
        // phần tử của mảng trả về từ hàm faMap.
    }).filter(Boolean);
}
/**
 * Applies a callback function to each element of an array and reduces it to a single value.
 * @param {Array} arr - The array to reduce.
 * @param {Function} callback - The callback function used to combine elements.
 * @param {*} initialValue - The initial value for the reduction.
 * @throws {Error} - Throws an error if the first argument is not an array or if the second argument is not a function.
 * @returns {*} - The reduced value.
 */
function faReduce(arr, callback, initialValue) {
    if (!Array.isArray(arr)) {
        throw new Error("The first argument must be an array.");
    }
    if (typeof callback !== "function") {
        throw new Error("The second argument must be a function.");
    }

    let accumulator = initialValue !== undefined ? initialValue : arr[0];

    for (let i = initialValue !== undefined ? 0 : 1; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}



console.log(faReduce([1, 2, 3, 4], (total, item) => total + item, 0));

// Bài 8:
// - Tạo ra 1 function faMap(arr, callback) {
//     Check hai điều kiện
//     1. check arr có phải là array hay không, => isArray,
//     nếu không sẽ trả về mã lỗi giống như khi sử dụng array.map
//     2. check callback có phải là 1 function hay không => typeof
// 3. Nêu thỏa mãn 2 điều kiện trên => viết logic code để
// sử dung fn array.faMap() === array.map()
// }
// const arr = ['gadd', 'bbba', 'aab', 'ddc', 'ccc', 'egg', 'faa']
// console.log(arr.sort());

// Bài 7
// - Bước 1: sử dụng một phương thức xử lí mảng trong ES6(foreach, reduce)
// -  reduce: để lặp qua mảng và return => listFirstName = [users.first_name ]
// - tạo ra 1 biến mới để lưu chữ array first_name sau khi đã được sort
// let newLisst = listFirstName.sort()

// const numbers = [1, 2, 3, 4, 5, 6];
// // - Viết hàm tính tổng với tham số truyền vào là 1 mảng
// function sum(arrNumber) {
//     // Sử dụ ng reduce để lặp qua mảng và
//     // viết logic code trong đó để tính tổng
//     let sum = arrNumber.reduce((total, item, index, array) => {
//         return total + item;
//     }, 0);
//     return sum;
// }
// // sum(numbers);
// console.log(sum(numbers));