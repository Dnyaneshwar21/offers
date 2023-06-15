import { useContext } from "react"
import { store } from "../App"
import { Link } from "react-router-dom"



const Navbar = () => {
    const [token, setToken] = useContext(store)
    return(
        <div>
            <ul>
                <li><Link to='/signup'>Sign-Up</Link></li>
                <li><Link to='/signin'>Sign-In</Link></li>
            </ul>
        </div>
    )
}

export default Navbar