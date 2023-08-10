// Frequency:
// - Là một phương pháp sử dụng object để thu thập dữ liệu
// và đếm tần suất xuất hiện phần tử.
// - Giúp tối ưu thời gian run code cho developer
// function same(arr1: number[], arr2: number[]): boolean {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//           return false;
//         }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }
// console.log(same([1, 2, 3], [4, 1, 9]));
function checkSame(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }
  type frequencyType = { [key: number]: number};
  let frequencyCount1: frequencyType = {};
  let frequencyCount2: frequencyType = {};
  for (let val of arr1) {
    frequencyCount1[val] = (frequencyCount1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCount2[val] = (frequencyCount2[val] || 0) + 1;
  }
  for (let key in frequencyCount1) {
    if (!((+key) ** 2 in frequencyCount2)) {
      return false;
    }
    if (frequencyCount2[(+key) ** 2] !== frequencyCount1[key]) {
      return false;
    }
  }
  return true;
}

console.log(checkSame([1, 2, 3], [1, 4, 9]));
