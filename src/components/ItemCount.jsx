import { useState } from "react"

export default function ItemCount() {

    const [count, setCount] = useState(1);

    const handleAdd = () => {
        if (count < 10)
            setCount(count + 1);
        else
            alert('No hay mas stock');
    }

    const handleSubstract = () => {
        if (count > 0)
            setCount(count - 1);
        else
            alert('Error');
    }

    return (
        <div>
            <button onClick = {handleSubstract}>-</button>
            <span>{count}</span>
            <button onClick = {handleAdd}>+</button>
        </div>
    );
};