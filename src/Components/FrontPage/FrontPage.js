import './FrontPage.css';
import video from '../../content/front-page-video.mp4';
import { useEffect } from 'react';

export default function FrontPage({ homeRef, videoRef }) {


    useEffect(() => {
        videoRef.current.muted = true;
        videoRef.current.play();
        console.log(videoRef);

    }, [])



    const scroll = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <div className="front-page">
           
            
            <video controls={false} muted autoPlay playsInline loop className="front-page-video-container" ref={videoRef}>
                <source src={video} type="video/mp4"></source>
            </video>
            <div className="heading-container">
                <h3>WELCOME TO</h3>
                <h1>The Wellhall</h1>
                <h2>Resort & Spa Hotel</h2>
            </div>

            <button className="front-page-btn" onClick={() => scroll(homeRef)}>LEARN MORE</button>
        </div>
    );
}
