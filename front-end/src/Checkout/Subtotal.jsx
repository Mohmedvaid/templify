import React from 'react'
import './Subtotal.css'
import { useStateValue } from '../DataLayer/StateProvider'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../DataLayer/Reducer'

function Subtotal() {
    const[{basket}, dispatch] = useStateValue()
    return (
        <div className="subtotal">
            <button>Proceed To Checkout</button>
            <CurrencyFormat

                renderText={(value) =>(
                    <>
                        <p>
                            Subtotal ({basket.length} items):<strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />
        </div>
    )
}

export default Subtotal
