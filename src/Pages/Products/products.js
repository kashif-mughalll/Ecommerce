import React from 'react'
import './css.css'
import Product_Card_Container from '../../Components/Product_Card_Container/Product_Card_Container';

var product1 = {
    Title : 'Denim Shirt',
    Price : 340,
    Quantity : 5,
    Image : 'https://images.prismic.io/rushordertees-web/c46d32cd-469a-49a9-b175-7362171d29a7_Custom+Short+Sleeve+T-Shirt.jpg?auto=format%2Ccompress&rect=0%2C0%2C800%2C900&w=800&h=900&fit=max&q=50'
}

var product2 = {
    Title : 'Mens Cap',
    Price : 200,
    Quantity : 4,
    Image : 'https://www.buyon.pk/image/cache/data/members/shopngreet/822431833282-600x600.jpg'
}

var product3 = {
    Title : 'The Jeans',
    Price : 500,
    Quantity : 10,
    Image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26SWQt9if_5Z8U9xnQLaQ3D7cKHoBaZDmYg&usqp=CAU'
}

var product4 = {
    Title : 'The Bags',
    Price : 800,
    Quantity : 15,
    Image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN5jcQl2f6JYHOSHSCOTeapj6rRezfRuwTDQ&usqp=CAU'
}


var products = ()=> {

    return (
        <div className="productpage">
            <h1 className="heading_Style">Products</h1>
            <Product_Card_Container product={product1} />
            <Product_Card_Container product={product2} />
            <Product_Card_Container product={product3} />   
            <Product_Card_Container product={product4} />            
        </div>
    )
}

export default products
