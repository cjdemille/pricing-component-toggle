import './Card.css'

export default function Card({tier, price, storageSize , users , sendLimit}){

    return(
        <div className="Card">
            <h2 className="Card__title">{tier}</h2>
            <div className="Card__price-box">
            <span className="dollar-sign">&#36;</span><span className="Card__price">{price}</span>
            </div>
          
            <ul className="Card__list">
                <li className="Card__list-item">{storageSize} Storage</li>
                <li className="Card__list-item">{users} Users Allowed</li>
                <li className="Card__list-item">Send up to {sendLimit}</li>
            </ul>
            <a href="#" className="btn">Learn More</a>
        </div>
    )

}