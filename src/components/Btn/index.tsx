import React from "react";
import BtnProps from "../proptypes";
import './../../stories/page.css'

export const Btn = (p: BtnProps) => {
  return <button style={{ color: p.col, background: p.bg }}>{p.text}</button>;
};

export default Btn;
