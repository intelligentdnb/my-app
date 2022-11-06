import React from 'react'
// import IntelligentHeader from './header/IntelligentHeader'
import Footer from '../footer/Footer.jsx'
import "./home.css"

const Home = () => {

    return (
        <div className='my-app'>
            {/* <IntelligentHeader /> */}
            <div className='intelligentH'>
                <div className='header-block'>
                    <h1>me as a dev</h1>
                    <p className='p-header'>Grateful for the ease as a web user, I want to help build more solutions for other people and myself. I enjoy learning new languages ​​and frameworks.</p>
                    <p className='p-header'>Interested in the data, how to present it, transmit it, and its respective security.</p>
                    <p>I want people to become financially empowered.</p>
                </div>
            </div>
            <div className='home_container'>
                <h3 className='knowledgde'>technologies</h3>
                <div className='technologies'>
                    <h5>languages</h5>
                    <div className='languagues'>
                    <h5>languages</h5>
                        <p>JavaScript</p>
                        <p>TypeScript</p>
                    </div>
                    <h5>front</h5>
                    <div className='front'>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>React / Native</p>
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
                            <a className="contact" href="/contact">contact me</a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/juandimca/' target="__BLANK">linkedln</a>
                        </li>
                        <li>
                            <a href="https://github.com/intelligentdnb" target="__BLANK">github</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
