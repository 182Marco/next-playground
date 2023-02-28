import React from "react";
import {BtnProps} from "./propTypes";
import './../../stories/page.css'
import BtnStyle from './Btn.style'

export const Btn = (p: BtnProps) => {
  return (<BtnStyle col={p.col} bg={p.bg} >{p.text}</BtnStyle>)
}

export default Btn;
