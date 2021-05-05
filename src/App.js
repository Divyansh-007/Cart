import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';

class App extends React.Component {
    constructor(){
      super();
      this.state = {
          products: [],
          loading: true
      }
  }

  componentDidMount(){
    // fetch using listener
    firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
        console.log(snapshot);

        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });

        const products = snapshot.docs.map((doc) => {
          const data =  doc.data();

          data['id'] = doc.id;

          return data;
        });

        this.setState({
          products: products,
          loading: false
        });
      });

    // simple fetching
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);

    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //     });

    //     const products = snapshot.docs.map((doc) => {
    //       const data =  doc.data();

    //       data['id'] = doc.id;

    //       return data;
    //     });

    //     this.setState({
    //       products: products,
    //       loading: false
    //     });
    //   });
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
      count += product.qty;
    });

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let total = 0;

    products.map((product) => {
      total += product.price * product.qty;
    });

    return total;
  }

  addProduct = () =>{
    firebase
      .firestore()
      .collection('products')
      .add({
        title: 'Washing Machine',
        price: 5999,
        qty: 2,
        img: ''
      })
      .then((docRef) => {console.log('Product Added',docRef);})
      .catch((err) => {console.log('Error', err);});
  }

  render(){
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{padding: 10, fontSize: 20}}>Add a Product</button>
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDelete = {this.handleDelete}
        />
        {loading && <h1>Loading Products ... </h1>}
        <div style={{fontSize: 20, padding: 10}}>TOTAL : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
