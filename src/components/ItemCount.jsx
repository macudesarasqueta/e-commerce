// Tener un maximo y un minimo de stock

import { useState } from "react"

export default function ItemCount() {

    const [count, setCount] = useState(1);

    const handleAdd = () => {
        //Antes de modificar el estado -> Validar que no excede el maximo de stock
        // if (count < stock)
        if (count < 10)
            setCount(count + 1);
        else
            alert('No hay mas stock');
    }

    const handleSubstract = () => {
        //Antes de modificar el estado -> Validar que no va por debajo de 0
        // if (count < stock)
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
    )
}