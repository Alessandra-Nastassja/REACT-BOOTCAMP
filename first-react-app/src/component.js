import React, { Component } from 'react';
import { products } from './mock';

// COMPONENTE TABELA DE PRODUTOS 
export class FilterableProductTable extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={products} />
            </div>
        )
    }
}

// BARRA DE PESQUISA (AGUARDAR!!!)
export class SearchBar extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Search..." />
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
        let lastCategory = null;

        this.props.products.forEach(product => {
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.name} />);
            }
                rows.push(<ProductRow product={product} key={product.name} />)
                lastCategory = product.category;
            
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
                    {rows}
                </tbody>
            </table>
        )
    }
}

// CATEGORIA DE PRODUTOS
export class ProductCategoryRow extends Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        )
    }
}

// LINHAS DA TABELA DE PRODUTOS
export class ProductRow extends Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            <span style={{ color: 'red' }}>
                {product.name}
            </span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}