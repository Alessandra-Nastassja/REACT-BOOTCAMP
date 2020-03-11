import React, { Component } from "react";
 
export class Form extends Component{
    constructor(props){
        super(props);

        this.state = {
            cep: '',
            rua: '',
            bairro: '',
            num: '',
            uf: '',
            estado: ''
        }
    }

    getCep = (cep) => {
        console.warn(cep);
        return fetch(`http://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {
                return data
            })
            .catch(err => console.log(err))
    }

    handleChange = (event) => {
        const { name, value } = event;

        this.setState({ [name]: value });

        const cepList = this.getCep(value);
        const { cep, rua, bairro, estado, uf } = cepList;
        this.setState({ cep, rua, bairro, estado, uf})
    }

    render(){
        const { cep, rua, bairro, estado, uf } = this.state
        
        return(
            <form className="mt-5"> 
                <FormInput name="cep" 
                    value={cep} 
                    onChange={ this.handleChange }
                    label="Cep"/>
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