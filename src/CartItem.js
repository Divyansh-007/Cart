import React from 'react';

// a function component
const CartItem = (props) => {
    const {title, price, qty} = props.product; //state variables calling
    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} />
            </div>
            <div className="right-block">
                <div style={styles.item_name}>{title}</div>
                <div style={{color: '#777'}}>Rs. {price}</div>
                <div style={{color: '#777'}}>Qty: {qty}</div>
                <div>
                    {/* Buttons */}
                    <img 
                        alt='increase' 
                        className='action-icons' 
                        src='https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1620040392~hmac=6f5c9b52d3090718f27462872e4b3daf'
                        onClick={() => props.onIncreaseQuantity(props.product)}
                    />
                    <img 
                        alt='decrease' 
                        className='action-icons' 
                        src='https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1620040218~hmac=358702c9c207bb54173d2da8e32fdd42'
                        onClick={() => props.onDecreaseQuantity(props.product)}
                    />
                    <img 
                        alt='delete' 
                        className='action-icons' 
                        src='https://www.flaticon.com/svg/vstatic/svg/3096/3096687.svg?token=exp=1620040423~hmac=9ec3e74ea832a573ef72fc71f07ad240'
                        onClick={() => props.onDelete(props.product.id)}
                    />
                </div>
            </div>
        </div>
    );
}


// class CartItem extends React.Component{
//     // dynamically using props from Cart
//     render () {
//         const {title, price, qty} = this.props.product; //state variables calling
//         return(
//             <div className="cart-item">
//                 <div className="left-block">
//                     <img style={styles.image} />
//                 </div>
//                 <div className="right-block">
//                     <div style={styles.item_name}>{title}</div>
//                     <div style={{color: '#777'}}>Rs. {price}</div>
//                     <div style={{color: '#777'}}>Qty: {qty}</div>
//                     <div>
//                         {/* Buttons */}
//                         <img 
//                             alt='increase' 
//                             className='action-icons' 
//                             src='https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1620040392~hmac=6f5c9b52d3090718f27462872e4b3daf'
//                             onClick={() => this.props.onIncreaseQuantity(this.props.product)}
//                         />
//                         <img 
//                             alt='decrease' 
//                             className='action-icons' 
//                             src='https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1620040218~hmac=358702c9c207bb54173d2da8e32fdd42'
//                             onClick={() => this.props.onDecreaseQuantity(this.props.product)}
//                         />
//                         <img 
//                             alt='delete' 
//                             className='action-icons' 
//                             src='https://www.flaticon.com/svg/vstatic/svg/3096/3096687.svg?token=exp=1620040423~hmac=9ec3e74ea832a573ef72fc71f07ad240'
//                             onClick={() => this.props.onDelete(this.props.product.id)}
//                         />
//                     </div>
//                 </div>
//             </div>
//         );
//     }


    // state set up
    // constructor(){
    //     super();
    //     this.state = {
    //         price: 999,
    //         title: 'Phone',
    //         qty: 1,
    //         img: ''
    //     }
    // }

    // increaseQuantity = () => {
    //     // console.log(this);
        
    //     // setState form 1
    //     // this.setState({
    //     //     qty: this.state.qty + 1
    //     // });

    //     // setState form 2
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty + 1
    //         }
    //     });
    // }

    // decreaseQuantity = () => {
    //     const {qty} = this.state;
    //     if(qty === 0){
    //         return;
    //     }
        
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty - 1
    //         }
    //     });
    // }
    // render () {
    //     const {title, price, qty} = this.state; //state variables calling
    //     // using state
    //     return(
    //         <div className="cart-item">
    //             <div className="left-block">
    //                 <img style={styles.image} />
    //             </div>
    //             <div className="right-block">
    //                 <div style={styles.item_name}>{title}</div>
    //                 <div style={{color: '#777'}}>Rs. {price}</div>
    //                 <div style={{color: '#777'}}>Qty: {qty}</div>
    //                 <div>
    //                     {/* Buttons */}
    //                     <img 
    //                         alt='increase' 
    //                         className='action-icons' 
    //                         src='https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1620040392~hmac=6f5c9b52d3090718f27462872e4b3daf'
    //                         onClick={this.increaseQuantity}
    //                     />
    //                     <img 
    //                         alt='decrease' 
    //                         className='action-icons' 
    //                         src='https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1620040218~hmac=358702c9c207bb54173d2da8e32fdd42'
    //                         onClick={this.decreaseQuantity}
    //                     />
    //                     <img 
    //                         alt='delete' 
    //                         className='action-icons' 
    //                         src='https://www.flaticon.com/svg/vstatic/svg/3096/3096687.svg?token=exp=1620040423~hmac=9ec3e74ea832a573ef72fc71f07ad240'
    //                     />
    //                 </div>
    //             </div>
    //         </div>
    //     );
        
        // simple hardcoding
        // return(
        //     <div className="cart-item">
        //         <div className="left-block">
        //             <img style={styles.image} />
        //         </div>
        //         <div className="right-block">
        //             <div style={styles.item_name}>Phone</div>
        //             <div style={{color: '#777'}}>Rs. 999</div>
        //             <div style={{color: '#777'}}>Qty: 1</div>
        //             <div>
        //                 {/* Buttons */}
        //                 <img alt='increase' className='action-icons' src='https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1620040392~hmac=6f5c9b52d3090718f27462872e4b3daf'/>
        //                 <img alt='decrease' className='action-icons' src='https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1620040218~hmac=358702c9c207bb54173d2da8e32fdd42'/>
        //                 <img alt='delete' className='action-icons' src='https://www.flaticon.com/svg/vstatic/svg/3096/3096687.svg?token=exp=1620040423~hmac=9ec3e74ea832a573ef72fc71f07ad240'/>
        //             </div>
        //         </div>
        //     </div>
        // );
    
// }

const styles = {
    image : { 
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc' 
    },
    item_name : {
        fontSize: 25
    }
}

export default CartItem;