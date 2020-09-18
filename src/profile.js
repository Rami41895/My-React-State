import React  from 'react'

const Profile =(props)=>{
    return(
        <div className="body">
            
        <h1>My Profile</h1><br/>
        <h2> full Name : {props.state.fullName}</h2>
        <h2> bio : {props.state.bio}</h2>
        <h2>
          {" "}
          imgSrc : <img className="img" src={props.state.imgSrc} />
        </h2><br/>
        <h2> profession: {props.state.profession}</h2><br/>
          <h5>* time at {props.state.time.toLocaleTimeString()} *</h5>

        </div>
    )
}

export default Profile