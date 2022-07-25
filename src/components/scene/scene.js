import React from "react";
import Container from "./styles";


const adventure =[
    
  { text: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
    img: ""},
  { text: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
    img: ""},
  { text: "L'heroi va decidir travessr la porta que el portava a casa",
    img: ""},
  { text: "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ...",
    img: ""}
];

const Text = props => <Container actived={props.actived}><p>{adventure[props.id].text}</p></Container>;

export default Text; 
