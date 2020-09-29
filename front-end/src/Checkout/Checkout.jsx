import React from 'react'
import { useStateValue } from '../DataLayer/StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const[{basket}, dispatch] = useStateValue()
    return (
        <div className="checkout"> 
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/Events/2020/APDHF2/PD20_PDP_DO_ReciprocalHero_r2t2_Us_en.jpg" alt="ad"/>

            {/* if empty */}
            { basket?.length ===0 ? (
                <div>
                    <h2>Your Basket Is Empty</h2>
                </div>
            ):(
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {/* list of products */}
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            )
            
            }
            
        </div>
    )
}

export default Checkout
