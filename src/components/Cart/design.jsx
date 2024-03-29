import './design.scss'

const DesignCardComponent = ({ title, description, image }) => {
    return (
        <div className="dcart-container">
            <img src={image} alt="image" className='dcart-image' />
            <div className='dcart-content'>
                <h2 className='dtitle'>{title}</h2>
                <p className='desc'>{description}</p>
            </div>
        </div>
    )
}
export default DesignCardComponent