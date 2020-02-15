import React, { Component } from 'react';

// VERSÃO ESTÁTICA
export class FormPage extends Component {
    render() {
        return (
            <div>
                <h5>Cadastro de alunas</h5>
                <RegisterForm />
            </div>
        )
    }
}

export class RegisterForm extends Component {
    render() {
        return (
            <div>
                <FormInput />
                <SubmitButton />
            </div>
        )
    }
}

export class FormInput extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Nome completo</label>
                    <br />
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Cidade</label>
                    <br />
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>E-mail</label>
                    <br />
                    <input type="text" className="form-control" placeholder="email@email.com"/>
                </div>
                <div className="form-group">
                    <label>CPF</label>
                    <br />
                    <input type="text" className="form-control" placeholder="000.000.000-00"/>
                </div>
                <div className="form-group">
                    <label>Telefone</label>
                    <br />
                    <input type="text" className="form-control" placeholder="(xx) xxxx-xxxx"/>
                </div>
            </form>
        )
    }
}

export class SubmitButton extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-success" type="button">Inscrever</button>
            </div>
        )
    }
}