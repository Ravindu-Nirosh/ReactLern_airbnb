// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { aCoffee } from '@fortawesome/free-solid-svg-icons'


export default function Card(props){

    
    const BASE_URL ="https://Ravindu-Nirosh.github.io/ReactLern_airbnb/"
    let bgtext 
    if(props.item.openSpots === 0 ){
        bgtext='SOLD OUT'
    }else if(props.item.location ==='Online'){
        bgtext='ONLINE' 
    }
    return(

        <div className="card-container-sub">
            <img src={BASE_URL+props.item.coverimg} alt='card'/>
            {bgtext && <span className="stausbg">{bgtext}</span>}
            <div className="ratings">
                <i className="fa-solid fa-star"></i>
                <p className="no-star">{props.item.stats.rating}</p>
                <p className="no-pp">({props.item.stats.reviewcount})</p>
                <i className="fa-solid fa-circle"></i>
                <p className="country">{props.item.location}</p>
            </div>
            <h5 className="title">Life lessons with{props.item.title}</h5>
            <h6>From ${props.item.price} / person</h6>
         
        </div>
       
    )
}
