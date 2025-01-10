import { useState } from "react";
import "./button.css";

export default function Button(props) {
    const {color, disabled, children, handleclick} = props;

    const [isDisabled, setDisabled] = useState(disabled);

    const [colorState, setColorState] = useState(color);
    
    return (
        <button 
            onClick = { handleclick }
            style = {{backgroundColor : colorState}} 
            disabled = {isDisabled} 
        >
        {children}
        </button>
    );
}