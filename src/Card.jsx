import LocationTag from './assets/location.svg'
import './style.css';

export default function Card({item}){
    console.log(item);
    return(
        <div className="card">
            <img src={item.img_link} placeholder='scenary' id='location-img'></img>
            <div className="location-details">
                <div className="location">
                    <img src={LocationTag}></img>
                    <div className="location-name">{item.location}</div>
                    <a href={item.google_maps_link}>View on Google Maps</a>
                </div>
                <div className="title">{item.title}</div>
                <div className="visit-period">{item.start_date} - {item.end_date}</div>
                <div className="description">{item.description}</div>
            </div>
        </div>
    );
}