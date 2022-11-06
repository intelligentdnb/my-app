import React from 'react'
import {MdHomeMax} from "react-icons/md"
import {FaWallet} from "react-icons/fa"
import {MdMessage} from "react-icons/md"
import {GoMarkGithub} from "react-icons/go"
import {BsLinkedin} from "react-icons/bs"
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <a href='/' ><MdHomeMax /></a>
            <a href='/portfolio'><FaWallet /></a>
            <a href='/contact'><MdMessage /></a>
            <a href="https://github.com/intelligentdnb" target="__BLANK"><GoMarkGithub /></a>
            <a href='https://www.linkedin.com/in/juandimca/' target="__BLANK"><BsLinkedin /></a>
            <h5>juandiarts@gmail.com</h5>
        </div>
    )
}

export default Footer
