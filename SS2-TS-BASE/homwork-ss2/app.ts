// Bài tập 1:
// Cho một mảng số nguyên nums và một số nguyên target, viết một hàm trả về kết quả
// là một mảng chỉ số của hai số trong mảng nums sao cho tổng của chúng bằng target.
// function twoSum(nums: number[], target: number) {
//   const map: { [key: number]: number } = {};

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     console.log(complement);
//     console.log(map[complement]);

//     if (map.hasOwnProperty(complement)) {
//       return [map[complement], i];
//     }
//     map[nums[i]] = i;
//   }
//   return [];
// }
// console.log(twoSum([2, 11, 15, 7], 9));

// Bài tập 2:
// function isValidParentheses(s: string): boolean {
//   // B1: Tạo 1 mảng rỗng làm ô chứa thẻ mở ==> check index của thẻ mở.
//   const stack = [];
//   // B2: Tạo 2 biến để fix các thẻ mở và các thẻ đóng vao 1 mảng:
//   const openBracket = ["(", "{", "["];
//   const closBracket = [")", "}", "]"];
//   //   s = "({}){}[]"
//   // B3: Sử dụng vòng lặp để check các kí tự trong string: s được nhập vào
//   for (let i = 0; i < s.length; i++) {
//     const bracket = s[i];
//     //Check phần tử đầu tien xem có thuộc mảng openBracket hay không
//     if (openBracket.includes(bracket)) {
//       stack.push(bracket); //==> stack= ['(']
//       //  lần lăp đầu tiên:   indecOff ==> openBracket = 0
//     } else if (closBracket.includes(bracket)) {
//       const checkIndex = closBracket.indexOf(bracket);
//       //   ===> Lần lặp 2, lấy được checkIndex = 0
//       const checkBracket = openBracket[checkIndex]; //===> checkBracket="("
//       if (stack.length === 0 || stack[0] !== checkBracket) {
//         return false;
//       }
//       stack.pop();
//     }
//   }
//   return stack.length === 0;
// }
// console.log(isValidParentheses("(){}]"));

// Bài 3:
// Kiểm tra tính hợp lệ của một chuỗi là palindrome.

// function isPalindrome(s: string): boolean {
//   // Loại bỏ tất cả các ký tự không phải chữ cái và chuyển đổi thành chữ thường
//   const cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   // Kiểm tra tính đối xứng của chuỗi
//   for (let i = 0; i < Math.floor(cleanedString.length / 2); i++) {
//     // console.log(cleanedString[i], 'cleanedString[i]');
//     // console.log(cleanedString[cleanedString.length - 1 - i], 'cleanedString[cleanedString.length - 1 - i]');
// // abcdcba
//     if (cleanedString[i] !== cleanedString[cleanedString.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPalindrome("A man, a plan, a canal: Panama"));

// Bài 4:
// Kiểm tra xem chuỗi `t` có phải là một từ hoán vị của chuỗi `s` hay không.

// function isAnagram(s: string, t: string): boolean {
//   // Kiểm tra độ dài của hai chuỗi
//   if (s.length !== t.length) {
//     return false;
//   }
//   // Tạo bảng đếm cho các ký tự trong chuỗi `s`
//   const charCount: { [key: string]: number } = {};
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   // Giảm bớt số lần xuất hiện của các ký tự trong chuỗi `t`
//   for (let i = 0; i < t.length; i++) {
//     const char = t[i];
//     if (!charCount[char]) {
//       return false;
//     }
//     charCount[char]--;
//   }

//   return true;
// }
// console.log(isAnagram("rat", "cat"));

// function check(params: string, params2: string) {
//   const str1 = params.split("").sort().join("");
//   const str2 = params2.split("").sort().join("");
//   return str1 == str2
// }
// console.log(check("abc", "cba"));

// Bài 5:
// Tìm và trả về tổng của mảng con có tổng lớn nhất trong một mảng số nguyên `nums`.

function checkMaxSum(nums: number[]): number {
  // Tạo 2 biến maxSum ==> return kêt quả
  let maxSum = nums[0];
  // TẠO curentSUm = tổng các số hiện tại
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // sử dụng hàm Math.max tron js để tìm ra sô hớn nhất
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // == currentSum= 1
    // lần 2:  currentSum= 5
    maxSum = Math.max(currentSum, maxSum);
    // ==> maxSum = 6
  }
  return maxSum;
}

console.log('MaxArrSum = ',checkMaxSum([5,4,-1,7,8]));
