import { Action } from 'history'
import React from 'react'
import { connect } from 'react-redux'
import './css.css'
import Product_Card from '../../Components/Product_Card_Container/Product_Card/Product_Card'



var Cart = ({Cart})=> {
    console.log(Cart)
    return (
        <div>
            <h5 className="cartheading">Cart</h5>
            <button className="checkoutbtn">Check Out Now </button>

            <div className="Cart_Items">
                {Cart.map((element) =>  <Product_Card product={{...element}} />)}
            </div>
        </div>
    )
}


var mapState = (state) => ({
    Cart: state.Cart
})


export default connect(mapState)(Cart)
