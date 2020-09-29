import React from 'react'
import './Home.css'
import Product from '../Products/Product'

function Home() {
    return (
        <div className="home">
            {/* banner */}
            <img className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/Events/2020/APDHF2/XCM_CUTTLE_1255085_1315904_US_PD20_3296237_1500x600_2X_US_en._CB402659267_.jpg" alt="banner"/>

            {/* Row one */}
            <div className="home__row">
                <Product
                    id="123"
                    title="Test Product"
                    price={11.99}
                    rating={5}
                    image="https://ekit.co.uk/GalleryEntries/eCommerce_solutions_and_services/MedRes_Product-presentation-2.jpg?q=27012012153123"
                />
                <Product
                    id="123"
                    title="Test Product"
                    price={11.99}
                    rating={5}
                    image="https://ekit.co.uk/GalleryEntries/eCommerce_solutions_and_services/MedRes_Product-presentation-2.jpg?q=27012012153123"
                />
            </div>
            {/* Row two */}
            <div className="home__row">
                <Product
                    id="123"
                    title="Test Product"
                    price={11.99}
                    rating={5}
                    image="https://ekit.co.uk/GalleryEntries/eCommerce_solutions_and_services/MedRes_Product-presentation-2.jpg?q=27012012153123"
                />
                <Product
                    id="123"
                    title="Test Product"
                    price={11.99}
                    rating={5}
                    image="https://ekit.co.uk/GalleryEntries/eCommerce_solutions_and_services/MedRes_Product-presentation-2.jpg?q=27012012153123"
                />
                <Product
                    id="123"
                    title="Test Product"
                    price={11.99}
                    rating={5}
                    image="https://ekit.co.uk/GalleryEntries/eCommerce_solutions_and_services/MedRes_Product-presentation-2.jpg?q=27012012153123"
                />
            </div>
            {/* row three */}
            <div className="home__row">
                <Product
                    id="123"
                    title="Test Product"
                    price={11.99}
                    rating={5}
                    image="https://ekit.co.uk/GalleryEntries/eCommerce_solutions_and_services/MedRes_Product-presentation-2.jpg?q=27012012153123"
                />
            </div>

            {/* Product */}


        </div>
    )
}

export default Home
