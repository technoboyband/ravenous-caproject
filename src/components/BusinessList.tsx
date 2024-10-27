import type Business from "./Business"
import BusinessCard from "./BusinessCard";
import '../styles/BusinessList.css'


interface BusinessListProps {
    businesses: Business[];
}

function BusinessList(props: BusinessListProps){
    return (<div className="BusinessList">
        {props.businesses.map(business => {
            return (<BusinessCard business={business} />);
        })}
    </div>)
}

export default BusinessList;