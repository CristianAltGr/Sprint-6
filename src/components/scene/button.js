import React from "react";
import { ButtonS } from "./styles";

const Button = props => <ButtonS onClick={props.onClick}><p>{props.text}</p></ButtonS>

export default Button;