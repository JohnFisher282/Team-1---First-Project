import { Link } from "react-router-dom"

const Navbar = () => {
    return ( 
        <div>
            <Link to="/home"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/listing-gallery"> Listing Gallery </Link>
            <Link to="/getting-there"> Getting There </Link>
            <Link to="/placestogo"> Places to Go </Link>
        </div>
     );
}
 
export default Navbar;