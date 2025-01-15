import { useState } from "react"

export default function ItemCount(props) {

    const [count, setCount] = useState(1);

    const handleAdd = () => {
        if (count !== props.max)
            setCount(count + 1);
        else {
            alert('No puedes agregar mas unidades de este producto al carrito');
            return ;
        }
    }

    const handleSubstract = () => {
        if (count > 1)
            setCount(count - 1);
        else
            alert('No quieres agregar ningun producto?');
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