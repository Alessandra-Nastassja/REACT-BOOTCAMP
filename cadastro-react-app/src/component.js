import React, { Component } from 'react';

export class FormPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">

                    </div>
                    <div className="col-md-6">
                        <div className="border border-dark p-4">
                            <h5>Cadastro de alunas</h5>
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            cidade: '',
            email: '',
            cpf: '',
            telefone: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({ [name]: event.target.value });
    }

    validacaoEmail = (email) => {
        email.includes("@") && email.includes(".");
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { nome, cidade, email, cpf, telefone } = this.state;

        if (!nome || !cidade || !email | !cpf || !telefone) {
            return alert(`Por favor, preencha corretamente o campo`)
        } else if (!this.validacaoEmail(email)) {
            return alert(`Por favor, insira um e-mail vádido`)
        }

    }

    render() {
        return (
            <form className="mt-5" onSubmit={this.handleSubmit}>
                <FormInput value={this.state.nome} name="nome" onChange={this.handleChange} label="Nome completo" placeholder="Digite seu nome completo" />
                <FormInput value={this.state.cidade} name="cidade" onChange={this.handleChange} label="Cidade" placeholder="Digite sua cidade" />
                <FormInput value={this.state.email} name="email" onChange={this.handleChange} label="E-mail" placeholder="Digite um email válido" />
                <FormInput value={this.state.cpf} name="cpf" onChange={this.handleChange} label="CPF" placeholder="Digite seu CPF" />
                <FormInput value={this.state.telefone} name="telefone" onChange={this.handleChange} label="Telefone" placeholder="Digite seu telefone" />
                <SubmitButton value={this.state} />
            </form>
        )
    }
}

export class FormInput extends Component {

    render() {
        return (
            <div className="form-group ">
                <label>{this.props.label}</label>
                <br />
                <input type="text"
                    className="form-control"
                    name={this.props.name}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}
                />

            </div>
        )
    }
}

export class SubmitButton extends Component {
    render() {
        return <button type="submit" className="btn btn-success btn-sm btn-block font-weight-bold">Cadastrar</button>
    }
}