import './Home.css';
import image from '../../content/woman-image.png'

export default function Home({ homeRef }) {



    return (
        <div className="home" ref={homeRef}>
            <div className="home-container">
                <div className="home-container-inner">
                    <div className="home-heading-container">
                        <h2>Welcome to your luxurious home away from home </h2>
                        <p>Write a paragraph that talks about your brand or property here. Convince your prospective clients to choose you and your offerings by highlighting the qualities that set you apart from the competition. Your audience is already on your website, so push a little bit harder to seal the deal!</p>

                    </div>
                    <img src={image} className="home-image" />
                </div>
            </div>
        </div>
    )
}