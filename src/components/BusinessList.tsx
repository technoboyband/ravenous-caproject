import type Business from "./Business"
import BusinessCard from "./BusinessCard";


interface BusinessListProps {
    businesses: Business[];
}

function BusinessList(props: BusinessListProps){
    return (<div>
        {props.businesses.map(business => {
            return (<BusinessCard business={business} />);
        })}
    </div>)
}

export default BusinessList;