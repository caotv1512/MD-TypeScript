import { log } from "console";
import React, { useState } from "react";
import Child from "./Child";

function UseState() {
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
  const [names, setNames] = useState(['']);
  const [value, setValue] = useState("");

  //   const [count, setCount] = useState(0);
  //   const handleCount = () => setCount(count + 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    const newNames = [...names, value];
    setNames(()=>{
      return newNames
    }); 
    setValue("");
    console.log(value);
  };

  return (
    <div style={{}}>
      {/* <button onClick={() => setCount(count - 1)}>-</button>
      <p>Count: {count}</p>
      <button onClick={handleCount}>+</button> */}
      <input type="text" value={value} onChange={handleChange} />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
      {/* <h3>YourName: {names}</h3> */}
      <ul>
       {names.map((name, index) => (
         <li key={index}>{name}</li>
       ))}
      </ul>
      <>
      <Child/>
      </>
    </div>
  );
}

export default UseState;
