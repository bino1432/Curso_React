const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o envento!")
    };

    const renderizando = (x) => {
        if(x){
            return <h1>verdadeiro</h1>;
        } else {
            return <h1>falso</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui tambem!</button>
            </div>
            {renderizando(true)}
            {renderizando(false)}
        </div>
    )
}

export default Events;