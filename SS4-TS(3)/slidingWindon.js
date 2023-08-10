"use strict";
// function maxSubarraySum(arr: number[], num: number): number | null {
//     let maxSum = 0;
//     let tempSum = 0;
//     if (arr.length < num) return null;
//     for (let i = 0; i < num; i++) {
//       maxSum += arr[i];
//     }
//     tempSum = maxSum;
//     for (let i = num; i < arr.length; i++) {
//         console.log("tempSum",tempSum);
//         console.log("maxSum",maxSum);
//         console.log("i",i);
//         console.log("i - num",i - num);
//         tempSum = tempSum - arr[i - num] + arr[i];
//       maxSum = Math.max(maxSum, tempSum);
//     }
//     return maxSum;
//   }
//   console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 1));
// input: 2 mảng bất
//output: boolean
//problem: bình phương củ mảng thú nhất nó bằng với mảng thứ hai
//case: nếu chiều dài 2 mảng ko bằng nhau thì nhau thế nào, mảng có được sắp xếp hay không ? ==> ko được sắp xếp
//c1 ko sử dụng frequency
//  const same = (arr1: number[], arr2: number[]): boolean => {
//     if(arr1.length != arr2.length) {
//         return false
//     }
//     for(let i = 0; i < arr1.length; i++) {
//         for(let j = 0; j < arr2.length; j++) {
//             if((arr1[i] ** 2) == arr2[j] ) {
//                 arr2.splice(j, 1)
//             }
//         }
//     }
// if(arr2.length === 0) {
//     return true
// } else {
//     return false
// }
// return arr2.length === 0
// }
//
// console.time('same')
// same([1, 2, 3, 6, 8, 9], [1, 4, 9, 6, 8, 9]);
// console.timeEnd('same')
// //c2 frequency
// const same2 = (arr1: number[], arr2: number[]): boolean => {
//     if(arr1.length != arr2.length) {
//         return false
//     }
//     //tạo nơi lưu trữ
//     let frequencyCount1: {
//         [key: number | string]: number
//     } = {
//     }
//     let frequencyCount2: {
//             [key: number | string]: number
//         } = {}
//     //đếm
//     for(let value of arr1) {
//         frequencyCount1[value] = (frequencyCount1[value] || 0) + 1
//     }
//     for(let value of arr2) {
//             frequencyCount2[value] = (frequencyCount2[value] || 0) + 1
//         }
//     for(let key in frequencyCount1) {
//         if(!((+key) ** 2 in frequencyCount2)) {
//             return false
//         }
//         if(frequencyCount1[(+key) ** 2] !== frequencyCount2[+key] ) {
//             return false
//         }
//     }
//     return true
// }
// console.time("same2")
// same2([1, 2, 3, 6, 8, 9], [1, 4, 9, 6, 8, 9])
// console.timeEnd("same2")
class Tinh {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    cong() {
        // console.log( this.num1 + this.num2);
        return this.num1 + this.num2;
    }
}
const tinh = new Tinh(1, 2);
console.log(tinh.cong());
/**
 * Returns the minimum length of a contiguous subarray whose sum is greater than or equal to the given integer.
 *
 * @param {number[]} nums - An array of positive integers.
 * @param {number} target - The target integer.
 * @return {number} The minimum length of the subarray, or 0 if no such subarray exists.
 */
// function minSubArrayLen(nums: number[], target: number): number {
//   let minLength = Infinity;
//   let start = 0;
//   let sum = 0;
//   console.log(minLength);
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     while (sum >= target) {
//       minLength = Math.min(minLength, i - start + 1);
//       sum -= nums[start];
//       start++;
//     }
//   }
//   return minLength === Infinity ? 0 : minLength;
// }
// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
