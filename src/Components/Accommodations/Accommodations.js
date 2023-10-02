import './Accommodations.css'
import deluxeRoom from '../../content/deluxe-room.jpg'
import seaViewRoom from '../../content/deluxe-room-sea.jpg'
import familySuite from '../../content/family-suite.jpg'

export default function Accommodations() {
    return (
        <div className="accommodations">
            <div className="accommodations-container">
                <h2>Accommodations</h2>
                <div className="accommodations-container-inner">
                        <div className="room-card">
                            <img src={deluxeRoom} className="carousel-image" />
                            <div className="room-card-description">
                                <span className="room-people-count">2 adults | 1 child below 7</span>
                                <h3 className="room-title">Deluxe Room</h3>
                                <span className="room-price">from $189 a night</span>
                            </div>
                        </div>
                        <div className="room-card">
                            <img src={seaViewRoom} className="carousel-image" />
                            <div className="room-card-description">
                                <span className="room-people-count">2 adults | 1 child below 7</span>
                                <h3 className="room-title">Deluxe Sea View</h3>
                                <span className="room-price">from $189 a night</span>
                            </div>
                        </div>
                        <div className="room-card">
                            <img src={familySuite} className="carousel-image" />
                            <div className="room-card-description">
                                <span className="room-people-count">2 adults | 1 child below 7</span>
                                <h3 className="room-title">The Wellhall Family Suite</h3>
                                <span className="room-price">from $189 a night</span>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}