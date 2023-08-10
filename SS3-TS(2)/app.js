"use strict";
// let randomArray: any = ["ADMIN", "USER", 1, 2, true];
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
function total(a, b) {
    return a + b;
}
function test(a, b, c) {
    //    c(a, b);
    console.log(c(a, b));
}
test(10, 2, (a, b) => a + b);
const a = 10;
// cach ko toi uu 
console.time('doSomething');
console.log('start');
const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] ** 2 !== arr2[j]) {
                return false;
            }
        }
    }
    return true;
};
console.time();
// dosomething
console.timeEnd('doSomething');
