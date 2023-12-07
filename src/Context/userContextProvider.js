import { useState } from "react"
import UserContext from "./userContext"

const UserContextProvider = ({children}) => {

    const [cartItems,setCartItems] = useState(0);
    const [items,setItems] = useState([]);
    const [Name,setName] = useState('');
    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
    const state = {
        cartItems,
        setCartItems,
        items,
        setItems,
        Name,
        setName,
        Email,
        setEmail,
        Password,
        setPassword
    };

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;