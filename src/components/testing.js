import '../testing.css'

export default function Testing(props){

  
    return(
        
        <div className="contacts">
            <div className="contact-card">
                <img src={props.img} alt="cat"/>
                {props.name && <h3>Name :{props.name} </h3>}
                <input type='text' placeholder='Name' disabled={props.status}></input>
                <div className="info-group">
                    <i className="fa-solid fa-phone"></i>
                    <span>{props.t_no}</span>
                </div>
                <div className="info-group">
                    <i className="fa-solid fa-envelope"></i>
                    <span>{props.email}</span>
                </div>
            </div>
        </div>
       
    )
}