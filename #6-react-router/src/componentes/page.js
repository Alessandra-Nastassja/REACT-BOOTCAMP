import React from 'react';

import { Link } from "react-router-dom";

import logo from "../imagens/dog.webp";

export function Page() {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <img src={logo} />
                    <br/>
                    <Link to="/">Home</Link>
                </div>
            </div>
        </div>
    )
}