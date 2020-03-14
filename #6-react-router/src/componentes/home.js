import React from 'react';

import { Link } from "react-router-dom";

import logo from "../imagens/cat.jpeg";

export function Home() {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <img src={logo} />
                    <br/>
                    <Link to="/page">Página</Link>
                </div>
            </div>
        </div>

    )
}