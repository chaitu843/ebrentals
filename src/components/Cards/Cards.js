import React, { Component } from 'react'

import Card from '../Card/Card';
import '../Cards/Cards.css';

class Cards extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isCart: false
        }
    }

    clickHandler = () => {
        console.log("in click handler")
        this.setState({
            isCart: !this.state.isCart,
        })
    }

    render() {
        let { products, addToCart } = this.props,
            button;

        if (this.state.isCart) {
            products = products.filter(product => product.addedToCart);
            button = <button className="btn btn-warning cartButton" onClick={this.clickHandler}>Go Back</button>;
        }
        else {
            products = products.filter(product => !product.addedToCart);
            button = <button className="btn btn-warning cartButton" onClick={this.clickHandler}>Show Cart</button>;
        }

        if (products.length) {
            return (
                <>
                    <div className="row cards">
                        {
                            products.map(product =>
                                <Card key={product.id} product={product} addToCart={addToCart} />
                            )
                        }
                    </div>
                    {button}
                </>
            )
        } else {
            return (
                <>
                    <h2 className="error text-center my-5">
                        NO RESULTS FOUND..!!!
                </h2>
                    {button}
                </>
            )
        }
    }
}

export default Cards
