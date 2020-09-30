import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import  {useStateValue} from '../DataLayer/StateProvider'
import { auth } from 'firebase';

function Header() {

    const [{basket, user}] = useStateValue();
    const login = () => {
        if(user){
            auth.signOut();
        }

    }


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
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne" >Hello {user?.email} </span>
                        <span className="optionLineTwo">Sign In</span>
                    </div>
                </Link>
                {/* link 2 */}
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne"> hellow me</span>
                        <span className="optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
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
                          <span className="header_optionLineTwo header__basketCount">{basket?.length} </span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
