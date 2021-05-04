import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
    constructor(){
      super();
      this.state = {
          products: [
              {
                  price: 99,
                  title: 'Watch',
                  qty: 1,
                  img: '',
                  id: 1
              },
              {
                  price: 999,
                  title: 'Phone',
                  qty: 1,
                  img: '',
                  id: 2
              },
              {
                  price: 9999,
                  title: 'Laptop',
                  qty: 1,
                  img: '',
                  id: 3
              }
          ]
      }
  }

  handleIncreaseQuantity = (product) =>{
      // console.log(product);
      const { products } = this.state;
      const index = products.indexOf(product);

      products[index].qty += 1;

      this.setState({
          products: products
      });
  }

  handleDecreaseQuantity = (product) =>{
      // console.log(product);
      const { products } = this.state;
      const index = products.indexOf(product);

      if(products[index].qty === 0){
          return;
      }

      products[index].qty -= 1;

      this.setState({
          products: products
      });
  }

  handleDelete = (id) => {
      const { products } = this.state;

      const items = products.filter((item) => item.id !== id);

      this.setState({
          products: items
      });
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty
    });

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let total = 0;

    products.map((product) => {
      total += product.price * product.qty
    });

    return total;
  }

  render(){
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDelete = {this.handleDelete}
        />
        <div style={{fontSize: 20, padding: 10}}>TOTAL : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
