
import { Link } from "react-router-dom"

const Navbar = () => {

    return ( 
        <>
            <Link to="/home"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/search"> Search </Link>
            <Link to="/listing-gallery"> Listing Gallery </Link>
            <Link to="/getting-there"> Getting There </Link>
            <Link to="/places-to-go"> Places to Go </Link>
            <Link to="/opening-times"> Opening Times </Link>
            <Link to="/emailform"> E-mail Form </Link>
            <Link to="/site-navigation"> Site Navigation </Link>
            <Link to="/classification"> Classification </Link>
            <Link to="/discussion-board"> Discussion Board </Link>
            <Link to="/screens"> Screens </Link>
            <Link to="/newreleasegallery"> New Release Gallery </Link>
            <Link to="/contactpage"> Contact Page </Link>            
        </>
     );
}
 
export default Navbar;