import { useState } from "react";

function Card({id, name, info, image, price, removeTour})
{
        const [readMore, setReadMore] = useState(false);
        const description = readMore? info : `${info.substring(0,200)}...`
        function readMoreHandler()
        {
            setReadMore(!readMore);
        }
        return (
            <div className="Card">
                <img src={image} alt="place image" className="image"></img>
                <div className="tour-info">
                    <h4 className="tour-price">	₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div>
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readMore? 'show less' : 'read more'}
                    </span>
                </div>
                <button className="btn" onClick={()=>removeTour(id)}>Not Interested</button>
            </div>
        );
}
export default Card;