import React from "react";
import Footer from "../footer/Footer";
import "./portfolio.css";
import APIdogsIMG from "../../assets/pidogsscreenpng.png";
import b2bIMG from "../../assets/b2bscreen.png";
import youtubeIMG from "../../assets/youtubescreen.png";

const Portfolio = () => {

    const projects = [{
        name: "YouTube v3",
        url: "https://intelligent-youtube.vercel.app/",
        img: youtubeIMG
    },{
        name: "B2B Commodities",
        url: "https://github.com/intelligentdnb/Commodities-Project",
        img: b2bIMG
    },{
        name: "API Dogs",
        url: "https://github.com/intelligentdnb/PIDogs",
        img: APIdogsIMG
    },]

    return (
        <div className="portfolio-container">
            <div className="projects-container">
                {projects.map( (e, index) => (
                    <div key={index} className="card-project">
                        <img src={e.img} alt={e.url} />
                        <h1><a href={e.url}>{e.name}</a></h1>
                        <a href={e.url}>{e.url}</a>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio;