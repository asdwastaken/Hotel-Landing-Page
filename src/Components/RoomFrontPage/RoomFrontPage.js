import './RoomFrontPage.css';
import familySuite from '../../content/family-suite.jpg';
import hotelRoom from '../../content/hotel-room.png';
import hotelBathroom from '../../content/hotel-bathroom.png';


export default function RoomFrontPage() {


    return (
        <div className="room-front-page">
            <div className="room-front-page-container">
                <div className="room-front-page-container-inner">
                    <h2>The Family Suite</h2>
                    <p>Showcase the best your property has to offer by highlighting one of your accommodations. Add a flattering photo, then describe the room's best feature.</p>
                </div>
                <div className="room-front-page-image-section">
                    <div className="room-front-page-image-section-inner">
                        <img src={familySuite} className="room-front-page-image" />
                        <div className="room-front-page-image-description">
                            <p>An intriguing caption that describes the room goes here.
                                Use a flattering photo, then describe away!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="room-front-page-second-section">
                <div className="room-front-page-second-section-inner">
                    <img src={hotelRoom} className="room-front-page-image-detailed" />
                    <p>An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!</p>
                </div>
                <div className="room-front-page-second-section-inner" id="room-front-page-second-section-inner-bigger">
                    <img src={hotelBathroom} className="room-front-page-image-detailed" id="front-page-image-highlight" />
                    <p>An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!</p>
                </div>

            </div>
        </div>
    )
}