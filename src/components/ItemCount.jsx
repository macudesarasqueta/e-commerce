import { useState } from "react"

export default function ItemCount(props) {

    const [count, setCount] = useState(1);

    const handleAdd = () => {
        if (count === props.max) {
            alert('No hay mas stock');
            return ;
        }
        else
            setCount(count + 1);
    }

    const handleSubstract = () => {
        if (count > 0)
            setCount(count - 1);
        else
            alert('Error');
    }

    function hadleClick () {
        props.onSubmitCount(count);
    }

    return (
        <div>
            <div>
                <button onClick = {handleSubstract}>-</button>
                <span>{count}</span>
                <button onClick = {handleAdd}>+</button>
            </div>
            <div>
                <button onClick={hadleClick}>Agregar al carrito</button>
            </div>
            
        </div>
    );
};