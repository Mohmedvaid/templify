import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Header() {
    return (
        <nav className="header">
            {/* nav logo */}
            <Link to="/">
                <img className="header__logo" src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white.png" alt="amazon logo"/>  
            </Link>

            {/* search bar */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>

            <div className="header__nav">
                {/* link 1 */}
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne" > hellow me</span>
                        <span className="optionLineTwo">Sign In</span>
                    </div>
                </Link>
                {/* link 2 */}
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne"> hellow me</span>
                        <span className="optionLineTwo">Sign In</span>
                    </div>
                </Link>
                {/* link 3 */}
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne"> hellow me</span>
                        <span className="optionLineTwo">Sign In</span>
                    </div>
                </Link>

                {/* basket */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                         <span className="header_optionLineTwo header__basketCount">0</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header