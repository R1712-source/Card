import profPic from "./assets/Smile.jpg"

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profPic} alt="profile picture"></img>
            <h2 className="card-title">Wazim chan</h2>
            <p className="card-text">I study german culture and listen to limbus ost</p>
        </div>
    )
}

export default Card