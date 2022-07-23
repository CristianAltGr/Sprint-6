import React from "react";

const adventure =[
    "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
    "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
    "L'heroi va decidir travessr la porta que el portava a casa",
    "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ..."
  ];


const Text = props => <div><p>{adventure[props.param]}</p></div>
 
export default Text; 
