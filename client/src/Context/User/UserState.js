
import { useContext, useState } from "react";
import userContext from "./UserContext";


const UserState = (props)=>{

    
    const initialUser = [];
    const [user,setUser] = useState('');

    const loginUser = (data)=>{
        console.log("usert context : ",data)
    }

    return(
        <userContext.Provider value={{user,setUser,loginUser}}>
            {props.children}
        </userContext.Provider>
    )

}

export default UserState;