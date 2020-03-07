import React, { useState } from "react";

import { HeaderGrid } from "../components/header";
import { CardGrid } from "../components/card";

export function HomeGrid() {
    const [api2, setApi] = useState([])

    React.useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(data => {
                setApi(data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <HeaderGrid />
                </div>
            </div>

            <div className="row">
                {api2.map(({ id, title, description }) => (
                    <CardGrid key={id} title={title} description={description} />
                ))}
            </div>
        </div>
    )
}