import { log } from "console";
import React, { useState } from "react";
import Child from "./Child";
import { Product } from "../App";


function UseState({data, id}:Product ) {
  console.log(data);
  console.log(id);

  // const [newID, setID] = useState(id);
  /**
   * ================= React HOOK =================
   * 1. useState()
   * Lý thuyết:
   * - useState() dùng để khai báo và lắng nghe một trạng thái được thay đổi trong func Conponent
   * Cấu trúc:
   * const [state, setState] = useState( initialState )
   * - state: giá trị khởi tạo- trạng thái. Có thể chứa được tất cả kiểu dữ liệu.
   * - setState: là một hàm, có nhiệm vụ lắng nghe và update giá trị(trạng thái) cho state
   * - useState() là một hook của React HOOK
   * - initialState: giá trị khởi tạo.
   */
  // interface IState {
  //     names: string[]
  // }
  const [names, setNames] = useState([""]);
  const [value, setValue] = useState("");

  //   const [count, setCount] = useState(0);
  //   const handleCount = () => setCount(count + 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  // const handleSubmit = (e) => {
  //   const newNames = [...names, value];
  //   setID(e.target.key);
  //   setNames(()=>{
  //     return newNames
  //   });
  //   setValue("");
  //   console.log(value);
  // };

  return (
    <div style={{}}>
      {/* <button onClick={() => setCount(count - 1)}>-</button>
      <p>Count: {count}</p>
      <button onClick={handleCount}>+</button> */}
      <input type="text" value={value} onChange={handleChange} />
      <button type="button">Submit</button>
      {/* <h3>YourName: {names}</h3> */}
      {/* <ul>
       {names.map((item, index) => (
        //  <li key={item.id}>{name}</li>
       ))}
      </ul> */}
      <>
        <Child />
      </>
    </div>
  );
}

export default UseState;
