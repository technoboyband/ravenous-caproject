import Business from "./Business";

interface businessCardProps {
    business: Business;
}

function BusinessCard (props:businessCardProps){
    return (<>
        <img src={props.business.image}></img>
        <h1>{props.business.name}</h1>
        <h1>{props.business.address}</h1>

        </>);
}

export default BusinessCard;