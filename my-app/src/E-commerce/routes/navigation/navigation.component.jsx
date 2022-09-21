import { Fragment, useContext } from "react";
import { Outlet, Link} from "react-router-dom";
import './navigation.styles.css'
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

export default function  Navigation(){
    const {currentUser, setCurrentUser} = useContext(UserContext);

    const signOutHandler = async () =>{
        await signOutUser();
        setCurrentUser(null);
    }
    
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to ='/'>
                    <CrownLogo className='logo'/>
                </Link>
                <div className="nav-links-container">
                    <Link className=" nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                        ) : (
                            <Link className=" nav-link" to='/auth'>
                                SIGN IN
                            </Link>
                        )
                    }
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}