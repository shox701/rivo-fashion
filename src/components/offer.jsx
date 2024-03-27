import Offerpng from "../assets/offeropa.png"
import "./offer.scss"
import PromotionTimer from "../components/timer"; // Предполагается, что у вас есть компонент PromotionTimer

const Offer = () => {
    return (
        <div className="offer-container">
            <div className="exclusive-offer">
                <div className="left-content"></div>
                <div className="right-content">
                    <h2 className="title">Exclusive offer</h2>
                    <p className="text">Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals</p>
                    <ul className="timer-list">
                        <li className="timer-item">
                            <PromotionTimer type="days" textClass="text" numberClass="number" />
                        </li>
                        <li className="timer-item">
                            <PromotionTimer type="hours" textClass="text" numberClass="number" />
                        </li>
                        <li className="timer-item">
                            <PromotionTimer type="minutes" textClass="text" numberClass="number" />
                        </li>
                        <li className="timer-item">
                            <PromotionTimer type="seconds" textClass="text" numberClass="number" />
                        </li>
                    </ul>
                    <button className="button">Buy now</button>
                </div>
            </div>
        </div>
    )
}
export default Offer