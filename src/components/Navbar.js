import React from 'react'
import '../css/navbar.css'
import searchIcon from '../icon/search.png'
import userIcon from '../icon/user.png'
import cartIcon from '../icon/shopping.png'
import testIcon from '../Images/logo.png'

function Navbar() {
    return (
      <div className="nav">
        <div className="nav_left">
          <img src={testIcon} alt="test" />
        </div>
        <div className="nav_right">
          <div className="nav_1">Track Order</div>
          <div className="nav_2">
            <img src={searchIcon} alt="search" />{" "}
          </div>
          <div className="nav_2">
            <img src={userIcon} alt="account" />
          </div>
          <div className="nav_2">
            <img src={cartIcon} alt="cart" />
          </div>
        </div>
      </div>
    );
}

export default Navbar
