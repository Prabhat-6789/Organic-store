import { useState,useEffect,useContext } from "react";
import UserContext from "../../Context/userContext";
import LoginForm from "./loginForm";
const Profile = () => {
    const {Name,Email,Password} = useContext(UserContext);
    
    return ( 
        <div>
            {Name==='' || Email==='' || Password==='' ? 
            (<div>
               <LoginForm/>
             </div>
            ) :
            (<div style={{textAlign:'center'}}>
                <h2>Name:{Name}</h2>
                <h2>Email:{Email}</h2>
            </div>)
        }
        </div>
     );
}

export default Profile;