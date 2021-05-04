import React from 'react';
import CartItem from './CartItem';

// class Cart extends React.Component{
const Cart = (props) => {
    // state set up (moved to App.js after creation of Navbar.js)
    // constructor(){
    //     super();
    //     this.state = {
    //         products: [
    //             {
    //                 price: 99,
    //                 title: 'Watch',
    //                 qty: 1,
    //                 img: '',
    //                 id: 1
    //             },
    //             {
    //                 price: 999,
    //                 title: 'Phone',
    //                 qty: 1,
    //                 img: '',
    //                 id: 2
    //             },
    //             {
    //                 price: 9999,
    //                 title: 'Laptop',
    //                 qty: 1,
    //                 img: '',
    //                 id: 3
    //             }
    //         ]
    //     }
    // }

    // handleIncreaseQuantity = (product) =>{
    //     // console.log(product);
    //     const { products } = this.state;
    //     const index = products.indexOf(product);

    //     products[index].qty += 1;

    //     this.setState({
    //         products: products
    //     });
    // }

    // handleDecreaseQuantity = (product) =>{
    //     // console.log(product);
    //     const { products } = this.state;
    //     const index = products.indexOf(product);

    //     if(products[index].qty === 0){
    //         return;
    //     }

    //     products[index].qty -= 1;

    //     this.setState({
    //         products: products
    //     });
    // }

    // handleDelete = (id) => {
    //     const { products } = this.state;

    //     const items = products.filter((item) => item.id !== id);

    //     this.setState({
    //         products: items
    //     })
    // }

    // render(){
        // const { products } = this.state;
        const { products } = props;
        return(
            <div className='cart'>
                {products.map((product) => {
                    return (
                        <CartItem 
                            product = {product} 
                            key = {product.id}
                            // onIncreaseQuantity = {this.handleIncreaseQuantity}
                            // onDecreaseQuantity = {this.handleDecreaseQuantity}
                            // onDelete = {this.handleDelete}
                            onIncreaseQuantity = {props.onIncreaseQuantity}
                            onDecreaseQuantity = {props.onDecreaseQuantity}
                            onDelete = {props.onDelete}
                        />
                    );
                })}
            </div>
        );
    // }
}

export default Cart;