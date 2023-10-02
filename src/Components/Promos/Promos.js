import './Promos.css';
import discountImage1 from '../../content/laptop-image.jpg'
import discountImage2 from '../../content/hotel-spa-people.jpg'
import discountImage3 from '../../content/suitcase-image.png'


export default function Promos() {

    return (
        <div className="promos">
            <div className="promos-container">
                <h1>Promos and Offers</h1>
                <div className="promos-container-inner">
                    <div className="promo-card">
                        <img src={discountImage1} className="carousel-image" />

                        <div className="promo-card-description">
                            <h3 className="promo-title">Early Bird Discount</h3>
                            <p>List your offers, promos, or special membership privileges and perks here to entice people to book your property.</p>
                        </div>
                    </div>
                    <div className="promo-card">
                        <img src={discountImage2} className="carousel-image" />

                        <div className="promo-card-description">
                            <h3 className="promo-title">Wellhall Members Club</h3>
                            <p>List your offers, promos, or special membership privileges and perks here to entice people to book your property.</p>
                        </div>
                    </div>
                    <div className="promo-card">
                        <img src={discountImage3} className="carousel-image" />

                        <div className="promo-card-description">
                            <h3 className="promo-title">Book 3 Nights,Get 1 Night Free</h3>
                            <p>List your offers, promos, or special membership privileges and perks here to entice people to book your property.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}