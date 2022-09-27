import React from 'react'
import img from "../../assets/intelligentdnb.jpeg"
import "./Nav.css"

const Nav = () => {
    return (
        <div className='Navbar'>
            <div className='container__card'>
                <img src={img} />
                <div className='nav__items'>
                    <p>intelligentdnb</p>
                    <p>linkedin</p>
                </div>
            </div>
        </div>
    )
}

export default Nav
