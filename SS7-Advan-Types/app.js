"use strict";
// SS7: Advan-Types in TypeScript
// 1. Intersection type:
//- SỬ dụng ký hiệu " & " để kêt hợp những interface hoặc type (dạng object)
// và kết hợp chúng lại với nhau
function printLength(obj) {
    // console.log();
    console.log("Length:", obj.toUpperCase());
}
printLength("hello"); // Length: 5
printLength([1, 2, 3, 4, 5]); // Length: 5
printLength({ length: 10 }); // Length: 10
