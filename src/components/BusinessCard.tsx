import Business from "./Business";
import '../styles/BusinessCard.css'

interface businessCardProps {
    business: Business;
}

function BusinessCard (props:businessCardProps){
    return (<div className="BusinessCard">
        <img className="card-image" src={props.business.image}></img>
        <h1>{props.business.name}</h1>
        <h1>{props.business.address}</h1>

        </div>);
}

export default BusinessCard;