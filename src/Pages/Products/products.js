import React from 'react'
import './css.css'
import Product_Card_Container from '../../Components/Product_Card_Container/Product_Card_Container';


function products() {
    var image1 = "https://images.prismic.io/rushordertees-web/c46d32cd-469a-49a9-b175-7362171d29a7_Custom+Short+Sleeve+T-Shirt.jpg?auto=format%2Ccompress&rect=0%2C0%2C800%2C900&w=800&h=900&fit=max&q=50";
    var image2 = "https://www.buyon.pk/image/cache/data/members/shopngreet/822431833282-600x600.jpg";
    var image3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26SWQt9if_5Z8U9xnQLaQ3D7cKHoBaZDmYg&usqp=CAU";
    var image4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN5jcQl2f6JYHOSHSCOTeapj6rRezfRuwTDQ&usqp=CAU";

    return (
        <div className="productpage">
            <h1 className="heading_Style">Products</h1>
            <Product_Card_Container image={image1}  Category_Name="The Denim shirt" />
            <Product_Card_Container image={image2}  Category_Name="The Stylish Cap" />
            <Product_Card_Container image={image3}  Category_Name="The Jeans" />   
            <Product_Card_Container image={image4}  Category_Name="The Bags" />            
        </div>
    )
}

export default products
