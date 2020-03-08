import React, { useState } from "react";

import { Form } from "./form";

export function Home(){
    const [cep, setCep] = useState([])

    React.useEffect(() => {
        fetch(`http://viacep.com.br/ws/04884000/json/`)
            .then(res => res.json())
            .then(data => {
                setCep(data)
            })
            .catch(err => console.error(err))
    })

    return(
        <div className="container">
            <Form />
        </div>
    )
}