import React from "react";
import { useState } from "react";
import { Card } from "./scene/styles";

const Welcome = () =>  {
const [checking, setCheck] = useState(true);

return(
    (checking && 
        <Card>
        <h1>Welcome to my history!</h1>
        <button onClick={() => setCheck(false) }>Start!</button>
        </Card>
    )
)
}


export default Welcome