import React, { Component } from 'react';
import { products } from './mock';

// COMPONENTE TABELA DE PRODUTOS 
export class FilterableProductTable extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={products}/>
            </div>
        )
    }
}

// BARRA DE PESQUISA (AGUARDAR!!!)
export class SearchBar extends Component {
    render() {
        return (
            <div>
                <input type="text" />
                <br />
                <input type="checkbox" />
                <label>Somente produtos em estoque.</label>
            </div>
        )
    }
}

// TABELA DE PRODUTOS
export class ProductTable extends Component {
    render() {

        const rows = [];
        const lasteCategory = null;

       products.forEach(product => {
        console.warn(product);
       })       

// QUAL É A DIFERENÇA ENTRE PEGAR COM THIS.PROPS.PRODUCTS E PRODUCT ?

        return (
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductCategoryRow/>
                    <ProductRow/>
                </tbody>
            </table>
        )
    }
}

// CATEGORIA DE PRODUTOS
export class ProductCategoryRow extends Component{
    render(){
        return(
            <tr>
                <td colSpan="2">hello</td>
            </tr>
        )
    }
}

// LINHAS DA TABELA DE PRODUTOS
export class ProductRow extends Component {
    render() {
        return (
            <tr>
                <td>oi</td>
            </tr>
        )
    }
}