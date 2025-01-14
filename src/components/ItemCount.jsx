import { useState } from "react"

export default function ItemCount(props) {

    const [count, setCount] = useState(1);

    const handleAdd = () => {
        if (count < props.stock)
            setCount(count + 1);
        else {
            alert('No hay mas stock');
            return ;
        }
    }

    const handleSubstract = () => {
        if (count > 1)
            setCount(count - 1);
        else
            alert('Error');
    }

    function handleClick () {
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
                <button onClick={handleClick}>Agregar {count} producto/s al carrito</button>
            </div>
            
        </div>
    );
};