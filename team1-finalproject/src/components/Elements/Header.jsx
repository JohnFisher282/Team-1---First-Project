import HeaderLogo from "./HeaderLogo";
import PageTitle from "./PageTitle";
import { Link } from "react-router-dom"

const Header = () => {
    return ( 
        <>     
            <HeaderLogo/>
            <PageTitle/>
            <Link to="/ticket-booking"> Ticket Booking </Link>
            <Link to="/payment"> Payment </Link>
        </>



     );
}
 
export default Header;