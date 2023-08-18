import React from "react";
import { DatePicker } from "antd";
import { ColorPicker } from "antd";
import QACode from "./QACode";

function Antd() {
  return (
    <div>
      <DatePicker />

      <ColorPicker />
      <QACode/>
    </div>
  );
}

export default Antd;
