import React, { Component } from 'react';

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
            <form onSubmit={this.handleSubmit}>
                <FormInput value={this.state.nome} name="nome" onChange={this.handleChange} label="Nome" />
                <FormInput value={this.state.cidade} name="cidade" onChange={this.handleChange} label="Cidade" />
                <FormInput value={this.state.email} name="email" onChange={this.handleChange} label="E-mail" />
                <FormInput value={this.state.cpf} name="cpf" onChange={this.handleChange} label="CPF" />
                <FormInput value={this.state.telefone} name="telefone" onChange={this.handleChange} label="Telefone" />
                <SubmitButton value={this.state} />
            </form>
        )
    }
}

export class FormInput extends Component {

    render() {
        return (
            <div className="form-group">
                <label>{this.props.label}</label>
                <br />
                <input type="text"
                    className="form-control"
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />

            </div>
        )
    }
}

export class SubmitButton extends Component {
    render() {
        return <button type="submit" className="btn btn-success">Inscrever</button>
    }
}