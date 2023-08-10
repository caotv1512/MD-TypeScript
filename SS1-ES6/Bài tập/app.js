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
// "/_([a-z])/g"

// Exercise 04
// Viết một hàm trả về một mảng mới vẫn chứa toàn bộ user trong mảng users
// nhưng key của các phần tử trong mảng phải được viết dưới dạng camelCase

// B1: Sử dụng một hàm có sẵn của ES6 để xử lí và lặp qua từng phần tử của mảng
// function convertKeyToCamelCase(data) {
//     // B2:  tạo biển result để lưu lại newKey sau khi thay đổi key thành camelCase
//     let result = users.forEach((item, index) => {
//         // console.log(item["email"]);
//         // B3: Sử dụng for in để lặp qua từng key trong object
//         for (key in item) {
//             const newKey = key.split("_");
//             let camelCase = newKey[0];
//             let element;
//             // B4: check điều kiện để chuyển snake_case to camelCase
//             if (newKey.length > 1) {
//                 for (let index = 1; index < newKey.length; index++) {
//                     element = newKey[index][0].toUpperCase() + newKey[index].slice(1);
//                 }
//                 camelCase = camelCase + element;
//                 // item.replace(newKey, (key) => )
//                 // Bước 5: Sao chép value trong object sang key = camelCase
//                 item[camelCase] = item[key]; // sao chép giá trị cho camelCase
//                 delete item[key];
//             }
//             // key = camelCase
//             console.log(item, '');
//             return item
//         }
//         return item;
//     });
//     // console.log(result);
// }
// convertKeyToCamelCase(users);

// Exercise 08
// Viết một hàm faMap hoạt động giống hệt như Array.prototype.map

function faMap(array, callback) {
    // Bước 1: check tham số đầu tiên truyền vào có phải mảng hay không
    if (!Array.isArray(array)) {
        return throwError("The first argument must be an array.");
    }
    // Bước 2: check callback có phải hàm hay không
    if (typeof callback !== "function") {
        return throwError("The second argument must be a function.");
    }
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

// let numbers = [1, 2, 3];
// console.log(faMap(numbers, function(item, index, array) {
//     return item * 2;
// }))

// Exercise 09
// Viết một hàm faFilter sử dụng hàm faMap viết ở trên hoạt động giống hệt như Array.prototype.filter
function faFilter(array, callback) {
    // Bước 1: check tham số đầu tiên truyền vào có phải mảng hay không
    if (!Array.isArray(array)) {
        return throwError("The first argument must be an array.");
    }
    // Bước 2: check callback có phải hàm hay không
    if (typeof callback !== "function") {
        return throwError("The second argument must be a function.");
    }
    const result = faMap(array, (element, index, array) => {
        if (callback(element, index, array)) {
            return element;
        }
        //Sử filler xem điều kiện trả về của faMap có đúng hay không.
        // Boolean là một hàm có sẵn trả về true hoặc false, nếu element truyền
        // vào là null, undefile, "" => false, <====> true => return element.
    }).filter(Boolean);

    return result;
}

let numbers = [1, 2, 3];
// console.log(faFilter(numbers, function(item, index, array) {
//     if (item > 1) {
//         return item
//     }
// }));


// Exercise 10
// Viết một hàm faReduce hoạt động giống hệt như Array.prototype.reduce

function faReduce(array, callback, initialValue) {
    // Bước 1: check tham số đầu tiên truyền vào có phải mảng hay không
    if (!Array.isArray(array)) {
        return throwError("The first argument must be an array.");
    }
    // Bước 2: check callback có phải hàm hay không
    if (typeof callback !== "function") {
        return throwError("The second argument must be a function.");
    }

    let iValue = initialValue !== undefined ? initialValue : array[0];

    for (let i = initialValue !== undefined ? 0 : 1; i < array.length; i++) {
        iValue = callback(iValue, array[i], i, array);
    }
    return iValue;
}

// numbers.reduce(callback,1)
// let a;
// log
console.log(faReduce(numbers, function(total, item, index, array) {
    return total + item
}));