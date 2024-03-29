import "./Feedback.scss"
import Leftbtn from "../assets/leftbtn.png"
import Rightbtn from "../assets/rightbtn.png"

const Feedback = () => {
    return (
        <div className="feedback-text">
            <h2 className="Title">Feedback Corner</h2>
            <div className="feedback-container">
                <div className="feed-cards">
                    <div className="feedback-card">
                        <h2>"</h2>
                        <h3>Emily Wilson</h3>
                        <p>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!</p>
                    </div>
                    <div className="feedback-card">
                        <h2>"</h2>
                        <h3>Sarah Thompson</h3>
                        <p>I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!</p>
                    </div>
                    <div className="feedback-card">
                        <h2>"</h2>
                        <h3>Olivia Martinez</h3>
                        <p>I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!</p>
                    </div>
                </div>
            </div>
            <div className="btn">
                <button className="left-btn"><img src={Leftbtn} alt="" /></button>
                <button className="right-btn"><img src={Rightbtn} alt="" /></button>
            </div>
        </div>
    )
}
export default Feedback;