const TemplateExpressions = () => {

    const name = "bernardo"
    const data = {
        age: 31,
        job: "programador",
    }

    return (
        <div>
            <h1>Ola {name}, tudo bem?</h1>
            <p>Voce atua como {data.job}</p>
            <p>{4 + 4}</p>
        </div>
    )

}

export default TemplateExpressions;