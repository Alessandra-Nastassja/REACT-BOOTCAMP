import React from "react";

export function Form() {
    return (
        <div className="row mt-5">
            <div className="col">
                <form>
                    <div className="form-group">
                        <label htmlFor="cep">Digite seu CEP:</label>
                        <input type="text" className="form-control" id="cep" placeholder="Digite seu cep" />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="rua">Digite sua rua: </label>
                                <input type="text" className="form-control" id="rua" placeholder="Digite seu rua" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="complemento">Digite seu complemento: </label>
                                <input type="text" className="form-control" id="complemento" placeholder="Digite seu complemento" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="bairro">Digite seu bairro: </label>
                                <input type="text" className="form-control" id="bairro" placeholder="Digite seu bairro" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="estado">Digite seu estado: </label>
                                <input type="text" className="form-control" id="estado" placeholder="Digite seu estado" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="uf">Digite seu UF: </label>
                                <input type="text" className="form-control" id="uf" placeholder="Digite seu UF" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}