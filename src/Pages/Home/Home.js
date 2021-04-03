import React from 'react'
import './css.css';

function Home() {
    return (
        <div className="Homepage">

            <div className="Home_Page_Top">
                <h1 className="Main_Heading" >Ecommerce Site</h1>
                <h6 className="Main_Heading2">Buy Whatever You Want With Resonable Price.</h6>
            </div> 

            <div className="Home_Page_second">
                <h1 className="homepage_heading">About Us</h1>
                <div style={{width : "650px"}}>
                <p className="paragraph_style">
                    When you develop a mockup page or backend API is not ready for data fetching and you have to make Frontend Development 
                    with static data until it comes, react-lorem-ipsum will create your gibberish texts for you.
                    In addition to Lorem Ipsum text, you can generate random avatars, names, surnames, 
                    full names and usernames to fill the fields about users randomly.
                </p>
                </div>
            </div>          
            
        </div>
    )
}

export default Home


{/* <h1 className="homepage_heading">About Us</h1>
                <p className="paragraph_style">
                    When you develop a mockup page or backend API is not ready for data fetching and you have to make Frontend Development 
                    with static data until it comes, react-lorem-ipsum will create your gibberish texts for you.
                    In addition to Lorem Ipsum text, you can generate random avatars, names, surnames, 
                    full names and usernames to fill the fields about users randomly.
                </p>*/}