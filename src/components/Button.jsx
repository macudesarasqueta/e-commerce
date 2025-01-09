import { useState } from "react";
import "./button.css";

export default function Button(props) {
    const {color, disabled, children} = props;

    const [isDisabled, setDisabled] = useState(disabled);

    const [colorState, setColorState] = useState(color);
    
    return (
        <button onClick = { () => { 
            setColorState("orange")
            setDisabled("true");
        } }
        style = {{backgroundColor : colorState}} 
        disabled = {isDisabled} 
        >
        {children}
        </button>
    );
}