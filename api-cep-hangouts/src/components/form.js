import React, { Component } from "react";
 
export class Form extends Component{
    constructor(props){
        super(props);

        this.state = {
            cep: '',
            logradouro: '',
            bairro: '',
            num: '',
            uf: '',
            localidade: ''
        }
    }

    getCep = async (cep) => {
        return await fetch(`http://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())          
            .then(data => {
                return data;
            })
            .catch(err => console.log(err))
    }

    handleChange = async (field) => {
        const { name, value } = field;

        this.setState({ [name]: value });

        const cepList = await this.getCep(value);

        const { cep, logradouro, bairro, localidade, uf } = cepList;
        this.setState({ cep, logradouro, bairro, localidade, uf})
    }

    handleBlur = (value) =>{
        const cepList = this.getCep(value);
        const { cep, logradouro, bairro, localidade, uf } = cepList;
        this.setState({ cep, logradouro, bairro, localidade, uf})
    }

    render(){
        const { cep, logradouro, bairro, localidade, uf } = this.state;
        
        return(
            <form className="mt-5"> 
                <FormInput name="cep"
                    name="cep"
                    value={cep} 
                    onChange={ e => this.handleChange(e.target) }
                    onBlur={ e => this.handleBlur(e.target.value) }
                    label="Cep"/>

                <FormInput name="logradouro"
                    name="logradouro"
                    value={logradouro} 
                    onChange={ e => this.handleChange(e.target) }
                    onBlur={ e => this.handleBlur(e.target.value) }
                    label="Avenida/Rua"/>

                <FormInput name="bairro"
                    name="bairro"
                    value={bairro} 
                    onChange={ e => this.handleChange(e.target) }
                    onBlur={ e => this.handleBlur(e.target.value) }
                    label="Bairro"/>
                    
                <FormInput name="localidade"
                    name="localidade"
                    value={localidade} 
                    onChange={ e => this.handleChange(e.target) }
                    onBlur={ e => this.handleBlur(e.target.value) }
                    label="localidade"/>
                    
                <FormInput name="uf"
                    name="uf"
                    value={uf} 
                    onChange={ e => this.handleChange(e.target) }
                    onBlur={ e => this.handleBlur(e.target.value) }
                    label="uf"/>
            </form>
        )
    }
}

export class FormInput extends Component{
    render(){
        return(
            <div className="form-group">
                <label>{ this.props.label }</label>
                <input type="text" 
                    className="form-control"
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}/>
            </div>
        )
    }
}