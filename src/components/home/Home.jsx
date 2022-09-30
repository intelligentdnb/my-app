import React from 'react'
import IntelligentHeader from './header/IntelligentHeader'
import "./home.css"
import {MdHomeMax} from "react-icons/md"
import {FaWallet} from "react-icons/fa"
import {MdMessage} from "react-icons/md"
import {GoMarkGithub} from "react-icons/go"
import {BsLinkedin} from "react-icons/bs"

const Home = () => {

    return (
        <div className='my-app'>
            <IntelligentHeader />
            <div className='home_container'>
            <h3 className='knowledgde'>technologies</h3>
                <div className='technologies'>
                    <h5>front</h5>
                    <div className='front'>
                        <p>JavaScript</p>
                        <p>CSS</p>
                        <p>React and Native</p>
                        <p>Redux</p>
                        <p>Photoshop</p>
                    </div>
                    <h5>back</h5>
                    <div className='back'>
                        <p>Node.js</p>
                        <p>Express</p>
                        <p>Sequelize</p>
                        <p>PostgreSQL</p>
                    </div>
                </div>
                <div className="urls">
                    <ul>
                        <li>
                            <a className="portfolio" href="/portfolio">portfolio</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a className="videos" href="/videos">videos</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a className="contact" href="/contact">contact me</a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/juan-diego-mas-ca-836710243/' target="__BLANK">linkedln</a>
                        </li>
                        <li>
                            <a href="https://github.com/intelligentdnb" target="__BLANK">github</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer">
               <a href='/home' ><MdHomeMax /></a>
                <a href='/portfolio'><FaWallet /></a>
                <a href='/contact'><MdMessage /></a>
                <a href="https://github.com/intelligentdnb" target="__BLANK"><GoMarkGithub /></a>
                <a href='https://www.linkedin.com/in/juan-diego-mas-ca-836710243/' target="__BLANK"><BsLinkedin /></a>
                <h5>juandiarts@gmail.com</h5>
            </div>
        </div>
    )
}

export default Home
