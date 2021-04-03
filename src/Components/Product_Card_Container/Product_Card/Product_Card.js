import React from 'react'


var Product_Card = (props)=> {    

    return (
        <div className="Image_Block">
            
            <div className="Picture_Container">
                <img className="image_styl" src={props.image} width="100%" height="auto"/>
            </div>

            <div className="Picture_Container_Bottom" >
                <div className="Picture_Container_Bottom_Left">
                    <p className="paragraph_Style1" >{props.Category_Name}</p>
                    <p className="paragraph_Style1" >Light blue color</p>
                    {/* <p className="paragraph_Style2" >2 color available</p> */}
                    <button onClick={()=> Add_To_Cart()} className="Add_to_Cart">Add to Cart</button>
                </div>
                <div className="Picture_Container_Bottom_Right flex3">
                    <p className="paragraph_Style1" >Rs 3450</p>
                </div>                
            </div>
        </div>
    )
}

export default Product_Card


var Add_To_Cart = (product)=> {
    
}
