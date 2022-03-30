import { Link } from "react-router-dom"

const Footer = () => {
    return ( 

        <div>
            <h3> Footer </h3>
            <Link to="/home"> Home </Link>
            <Link to="/opening-times"> Opening Times </Link>
            <Link to="/emailform"> E-mail Form </Link>
            <Link to="/site-navigation"> Site Navigation </Link>
            
            
        </div>
     );
}
 
export default Footer;