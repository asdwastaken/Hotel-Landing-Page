import './InThePress.css';
import pressImage from '../../content/hotel-lobby.jpeg';


export default function InThePress() {

    return (
        <div className="press-section">
            <div className="press-image-wrapper">
                <img src={pressImage} className="press-image" />
            </div>
            <h1>In the Press</h1>
            <div className="press-section-container">
                <div className="press-section-container-inner">

                    <div className="press-quote-container">
                        <p>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                        <span>- Santa Solana Post</span>
                    </div>

                    <div className="press-quote-container">
                        <p>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                        <span>- Santa Solana Post</span>
                    </div>

                    <div className="press-quote-container">
                        <p>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                        <span>- Santa Solana Post</span>
                    </div>
                </div>

            </div>

        </div>
    )
}