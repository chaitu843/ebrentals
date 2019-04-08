import React, { Component } from 'react'

import './Card.css';

class Card extends Component {

    clickHandler = (e) => {
        e.preventDefault();
        this.props.addToCart(e.target.parentElement.parentElement.id)
    }
    render() {
        let {product} = this.props;
        return (
            <div className="card col-lg-3 offset-lg-1 col-md-5 offset-md-1 col-sm-12 my-4" id={product.id}>
                <img className="card-img-top" width="253" height="194.69" src={require(`../../assets/${product.imgUrl}`)} alt={`${product.name}`} />
                <div className="card-body text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text"><b>Price Starting from:</b> Rs.{product.price}/hr</p>
                    <button className="btn btn-warning addButton" onClick={this.clickHandler}>Add to Cart</button>
                </div>
            </div>
        )
    }
}

export default Card
