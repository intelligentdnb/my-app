import React from 'react'
import IntelligentHeader from './header/IntelligentHeader'
import Footer from '../footer/Footer.jsx'
import "./home.css"

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
            <Footer />
        </div>
    )
}

export default Home
