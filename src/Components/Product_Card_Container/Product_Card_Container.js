import React from 'react'
import './product_Card.css'
import Product_Card from './Product_Card/Product_Card'


var Product_Card_Container = (props)=> {
    return (
        <div className="Product_Card_Container">

            <div className="flex1"><h6 className="Title_Style"> What's New: {props.product.Title} </h6></div>

            <div className="Image_Block_Container_Down" >
                <Product_Card product={props.product} />
                <Product_Card product={props.product} />
                <Product_Card product={props.product} />
            </div>
        </div>
    )
}

export default Product_Card_Container
