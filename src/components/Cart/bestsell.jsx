import './style.bestsell.scss'
import StarIcon from "../../assets/star.svg"

const BestCardComponent = ({ title, price, rate, image }) => {
    return (
        <div className="bcart-container">
            <img src={image} alt="image" className='bcart-image' />
            <div className='bcart-content'>
                <h5 className='btitle'>{title}</h5>
                <div className='bprice'>
                    <h5 className='bprice-text'>${price}</h5>
                    <div className='bdivider'></div>
                    <div className='brate'>
                        {rate}<img src={StarIcon} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BestCardComponent