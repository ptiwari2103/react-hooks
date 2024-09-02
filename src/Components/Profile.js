import react, {useContext} from "react";
import { AppContext } from "../context/AppContext";


function Profile() {

    // const phone = useContext(AppContext);    
    // return(
    //     <>
    //     <h1>Profile</h1>
    //     <h2>Phone: {phone}</h2>
    //     </>
    // )

    const {name, phone} = useContext(AppContext);    
    return(
        <>
        <h1>Profile</h1>
        <h2>Name: {name}</h2>
        <h2>Phone: {phone}</h2>
        </>
    )
}

export default Profile;