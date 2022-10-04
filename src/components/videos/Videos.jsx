import React from 'react'
import Footer from '../footer/Footer'
import ReactPlayer from 'react-player'
import "./videos.css"
import { useState } from 'react'

const Videos = () => {

    const vids = ["https://www.youtube.com/watch?v=fU7hZ3smj0g", "https://www.youtube.com/watch?v=LRkgN7wnRpo", "https://youtu.be/cxN4nKk2cfk", "https://youtu.be/6vKE1Ix6BPQ"];
    const itemsPerPage = 1;

    const [videos, setVideos] = useState(vids);
    const [items, setItems] = useState([...vids].splice(0, itemsPerPage));
    const [currentPage, setCurrentPage] = useState(0)

    const nextHandler = (e) => {
        const totalItems = vids.length;
        const nextPage = currentPage + 1;
        const firstIndex = nextPage * itemsPerPage;

        if(firstIndex === totalItems) return;
        setItems([...videos].splice(0, itemsPerPage));
        setCurrentPage(nextPage);
        console.log("ENTROOO")
    }

    return (
        <div>
            <div className='container'>
                {items.map(e => <ReactPlayer url={e} />)}
            </div>
            <button>prev</button> 
            <button onClick={(e) => nextHandler(e)}>next</button> 
            <Footer />
        </div>
    )
}

export default Videos
