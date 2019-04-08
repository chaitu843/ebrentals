import React, { Component } from 'react';

import './App.css';
import Cards from '../Cards/Cards';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       products : []
    }
    this.url = "http://localhost:3001";
  }
  
  componentDidMount() {
    fetch(`${this.url}/products`)
    .then(resp => resp.json())
    .then(data => this.setState({
      products: data,
    }))
  }
  addToCart = (id) => {
    fetch(`${this.url}/products/${id}`)
      .then(resp => resp.json())
      .then(data => {
        fetch(`${this.url}/products/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            addedToCart: !data.addedToCart,
          }),

        })
        .then(resp =>  this.setState({
          products: this.state.products.map(product => {
            if(product.id===id) {
               product.addedToCart = !product.addedToCart;
            }
            return product;
          })
        }))
      }) // Getting the data from server.. updating it and then updating the state
  }

  render() {
    return (
      <div className="container">
        <Cards products={this.state.products} addToCart={this.addToCart}/>
      </div>
    )
  }
}

export default App;
