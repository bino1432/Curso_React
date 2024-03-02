import { useState } from "react";

const ConditionalRender = () => {
  const [x, setX] = useState(true);

    const [name, setName] = useState("Joao")
   
    return (
    <div>
        <h1>Está sendo exibido?</h1>
        {x && <p>sexo</p>}
        {!x && <p>não sexo</p>}
        <button onClick={() => setX(!x)}>sexo?</button>
        <h1>if Ternario</h1>
        {name === "Joao" ? (
            <div>
                <p>O nome é Joao</p>
            </div>
        ) : (
            <div>
                <p>Nao é Joao</p>
            </div>
        )}
        <button onClick={() => {
            if (name != "Joao"){
                setName("Joao")
            } else {
                setName("Marcio")
            }
        }}>clique para mudar o nome</button>
    </div>
  )
}

export default ConditionalRender