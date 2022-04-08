import { Link } from "react-router-dom"

const Footer = () => {
    return ( 

        <div>
            <h3> Footer </h3>
            <Link to="/home"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/contactpage"> Contact Page </Link>
            
        </div>
     );
}
 
export default Footer;