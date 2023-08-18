// import { log } from "console";
// import React, { useState, useEffect } from "react";

// function UseEffect({ data, id }) {
//   const tabs = ["todos", "users", "posts"];
//   const [tab, setTab] = useState("todos");
//   const [dataCart, setData] = useState(data);
//   const [ids, setId]= useState(id)

//   const item = data.find((item) => item.id === id);

//   useEffect(() => {
//     setData([...dataCart, item]);
//   }, [id]);

//   /**
//    * ================useEffect==================
//    * Lý thuyết:
//    * - Dùng để quản lý các trạng thái và các effect trong func Copoment.
//    * - Quản lý luồng hoạt động call API
//    * Cấu trúc: useEffect(callback, dependencies) => dependencies có thể có hoặc không có (optional).
//    * 1. Sư dụng useEffect() với chỉ một tham số truyền vào là callback và k có dependencies
//    * - Khi sử dụng cách này callback function sẽ được gọi khi component được render lần đầu tiên
//    * và tất các lần re-render sau đó.
//    * 2. Sư dụng useEffect() với  hai tham số truyền vào là callback và dependencies là một mảng rỗng.
//    * - Khi sử dụng cách này callback function sẽ được gọi duy nhất một lần khi component được render lần đầu tiên
//    * 3. Sư dụng useEffect() với  hai tham số truyền vào là callback và dependencies có đối số truyền vào.
//    * - Khi sử dụng cách này callback function sẽ được gọi khi component được render lần đầu tiên
//    * và mỗi khi đối số truyền vào thay đổi.
//    */
//   return (
//     <div>
//       <h3>List Product</h3>
//       {tabs.map((item) => (
//         <button
//           style={
//             item == tab
//               ? { backgroundColor: "#f8f9fa" }
//               : { backgroundColor: "#0dcaf0" }
//           }
//           key={item}
//           onClick={() => setTab(item)}
//         >
//           {item}
//         </button>
//       ))}
//       <ul>
//         {data?.map((item) => {
//           return <li key={item.id}>{item.title || item.name}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }

// export default UseEffect;
