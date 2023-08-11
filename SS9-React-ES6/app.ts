// ========Promise=============
/**
 * Javascript là gì:
 * - Là một ngôn ngữ lập trình đơn luồng, và bất đồng bộ.
 * Đồng bộ là gì?
 * - Đồng bộ là quá trình thực thi và sử lý logic code theo thứ từ trên xuống dưới.
 * Bất đồng bộ là gì?
 * - Là quá trình xử lý và thực thi code theo thứ tự liên quan đến thời gian, logic code.
 * Đoạn mã nào thực thi xong trước thì hiện ra trước, đoạn mã ma nào thực thi xong sau thì in ra sau.
 */

// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(4);
//     setTimeout(() => {
//       console.log(5);
//       setTimeout(() => {});
//     });
//   }, 1);
// }, 1000);
// console.log(2);
// console.log(3);

/**
 * Callback:
 * Là một hàm được gọi lại và thực thi khi hàm khác đã thực hiện xong.
 *
 *
 * Promise: Là một lời hứa và giúp chúng ta xử lý bất đồng bộ thành đồng bộ.
 * Promise sẽ có 3 trạng thái:
 * success()=>> resole()
 * error()=>> reject()
 * pending()=>> hàm đang được thực thi.
 *
 */

// Cấu trúc và cách khai báo một Promise.
// 1. Xử dụng từ khóa new Promise(function(resolve, reject))
// 2. Cấu trúc
// const promise = new Promise((resolve, reject): any => {
//   // Logic code
//   //   Fake data:
//   const data = {
//     name: "CaoTV",
//     age: 30,
//   };
//   // function a(a, b) {
//   // let c = a+ b
//   //     function b(params) {
//   //         params = c
//   //     }
//   // }
//   // Một đống logic để a = list user
// //  const a  = []
//   // Một đống logic để a = age < 10
// //   const b  = [age < 10]
// //   const c = a = min
//   // resolve(): Đại diện cho thành công
//   resolve(data);
//   //   reject();
//   // reject(): Đại diện cho thất bại.
// });
// promise
//   .then((data) => {
//     // console.log(data);

//     // console.log("Successfully!!");
//     //Trả về resole
//   })
//   .then((data: any) => {
//     console.log(data);
//     return data.name;
//     // console.log("Successfully!!");
//     //Trả về resole
//   })
//   .then((data) => {
//     console.log(data);
//     return data;
//     // console.log("Successfully!!");
//     //Trả về resole
//   })
//   .catch(() => {
//     console.log("Failed!!");
//     // Trả về reject
//   })
//   .finally(() => {
//     console.log("Done");

//     // Một trong 2 thằng bên trên thực thi thì nó sẽ thực thi.
//   });

//   Bài tập: Cho một mảng dataUser gồm 10 phần tử.

//   Viết 1 promise trả về data theo thứ tự
//   1. Trả về tất cả data trong Array
//   2. trả về số phần tử có age < 10
//   3. Trả về phần tử có age nhỏ nhất.

// const request = {
//   success: "GetData",
//   error: "Error",
// };

// function checkPromise(params: string) {
//   const getData = new Promise<any>((resolve, reject) => {
//     const users = [
//       { name: "NuongTT", age: 12 }
//     ];
//     if (request.success === params) {
//       resolve(users);
//     } else if (request.error === params) {
//       reject('Server is not responding');
//     }
//   });
//   getData.then(users => {
//     console.log(users);
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Done");
//   });
// }
// checkPromise('Error');

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// function fetchData(url: string): Promise<any> {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(
//             `Error fetching data from ${url}: ${response.status} ${response.statusText}`
//           );
//         }
//         return response.json();
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }

// const apiUrl = "https://jsonplaceholder.typicode.com/users";

// fetchData(apiUrl)
//   .then((data) => {
//     console.log(data);
//     data.map((item: any) => {
//       console.log(`===========UserID : ${item.id} =======`);
//       console.log("Name: ", item.name);
//       console.log("UserName: ", item.username);
//       console.log("Email: ", item.email);
//       console.log("Phone: ", item.phone);
//       console.log("Website: ", item.website);
//       console.log("============================================");
//     });
//     return data;
//   })
//   .then((data) => {
//     /** 3.2: Trả về các user có lastname <=6 ký tự.

//      */
//     // * B1: Lặp qua tất cả các phần tử trong mảng để =>>> get name
//     const dataUser = data.filter((item: any) => {
//       // * B2: Sủ dụng split('khảng cách') để tách fistname và lastname
//       const name = item.name.split(" ");
//       // * B3: Get lastname bằng cách sử array name vừa tách bằng cú pháp const lastName = arr[arr.length-1]
//       const lastName = name[name.length - 1];
//       // * B4: Check độ dài lastName <= 6 ==>> return user
//       return lastName.length <= 6;
//     });
//     console.log(dataUser);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// const promise = new Promise<number>((resolve, reject) => {
//   const data: number = 1;
//     resolve(data);
// });

// promise
//   .then((data: number): number => {
//     console.log(data);
//     return data + 1;
//   })
//   .then((data: number): number => {
//     setTimeout(() => {
//       console.log(data);
//     }, 1000);
//     return data + 1;
//   })
//   .then((data: number): number => {
//     setTimeout(() => {
//       console.log(data);
//     }, 2000);
//     return data + 1;
//   })
//   .then((data: number): number => {
//     setTimeout(() => {
//       console.log(data);
//     }, 3000);
//     return data + 1;
//   })
//   .then((data: number): number => {
//     setTimeout(() => {
//       console.log(data);
//     }, 4000);
//     return data + 1;
//   })
// console.log(fetchData());

// ========== async await ===============
// - Là một chức năng của JS dùng để xử lý các tác vụ bất đồng đồng bộ và làm một hàm đợi các Promise
// - async(bất đồng bộ) là từ khóa khai báo ra một hàm bất đồng bộ.
// - await là từ khóa đùng để đợi các tác vụ bất đồng đồng bộ được thực thi xong.

function fetchData(): Promise<any> {
  return new Promise((resolve, reject) => {
    const data = {
      name: "CaoTV",
      age: 30,
    };
    setTimeout(() => {
      resolve(data);
    }, 1); // Ví dụ mất 2s để get data
  });
}

async function getData() {
  let data = await fetchData();
  try {
    console.log(data);
  } catch (error) {
    throw new Error("Server is not responding");
  }
}
getData();
