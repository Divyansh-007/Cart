import React from 'react'

class CartItem extends React.Component{
    render () {
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}></img>
                </div>
                <div className="right-block">
                    <div style={styles.item_name}>Phone</div>
                    <div style={{color: '#777'}}>Rs. 999</div>
                    <div style={{color: '#777'}}>Qty: 1</div>
                    <div>
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        );
    }
}

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