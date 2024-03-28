import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
    const {isLoggedIn, user, logOutUser} = useContext(AuthContext);

    return(
        <nav>
            <Link to={"/"}>
                <button>Home</button>
            </Link>

            {isLoggedIn && (
                <>
                <Link to={"/notes"}>
                    <button>Notes</button>
                    </Link>
                <button onClick={logOutUser}>Logout</button>
                <span>{user && user.name}</span>
                </>
            )}

            {!isLoggedIn && (
                <>
                    <Link to={"/login"}><button>Login</button></Link>
                    <Link to={"/signup"}><button>Signup</button></Link>
                </>
            )}

        </nav>
    )
}

export default Navbar;