import './Layout.scss'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <nav>
            <ul className="navbar">
                <li className="nav-item">  <Link to="/">Weather Today</Link>  
                </li>
                <li className="nav-item"> <Link to="/current">Current Weather</Link>  </li>

            </ul>
       </nav>
       <Outlet />
       </>
    )
}
export default Layout