import React from 'react'
import { connect } from 'react-redux'
import {AddProductToCart} from '../../../Redux/Cart/cartActions'


var Product_Card = ({product,AddProductToCart,Cart})=> {
    var NewProduct = {...product};
    NewProduct.Quantity = 1;   

    return (
        <div className="Image_Block">
            
            <div className="Picture_Container">
                <img className="image_styl" src={product.Image} width="100%" height="auto"/>
            </div>

            <div className="Picture_Container_Bottom" >
                <div className="Picture_Container_Bottom_Left">
                    <p className="paragraph_Style1" >{product.Title}</p>
                    <p className="paragraph_Style1" >Quantity : {product.Quantity}</p>
                    {/* <p className="paragraph_Style2" >2 color available</p> */}
                    <button onClick={()=> AddProductToCart(Cart,NewProduct)} className="Add_to_Cart">Add to Cart</button>
                </div>
                <div className="Picture_Container_Bottom_Right flex3">
                    <p className="paragraph_Style1" >Rs {product.Price}</p>
                </div>                
            </div>
        </div>
    )
}

var actions = {
    AddProductToCart
}

var mapState = (state) => ({
    Cart: state.Cart
})


export default connect(mapState,actions)(Product_Card)





