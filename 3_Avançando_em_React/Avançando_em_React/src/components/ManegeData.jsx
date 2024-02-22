import React from 'react'
import { useState } from 'react'

function ManegeData() {

    let [number, setNumber] = useState(0);

    const hadleClick = () => {
        setNumber(number + 1);
    };

  return (
    <div>
        <h3>valor atual: {number}</h3>
        <button onClick={hadleClick}>adicione um</button>
    </div>
  )
}

export default ManegeData