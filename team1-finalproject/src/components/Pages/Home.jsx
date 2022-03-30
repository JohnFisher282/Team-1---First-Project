import { Link } from "react-router-dom"

const Home = () => {
    return ( 

        <>
        <h1> Home </h1>
        <Link to="/classification"> Classification </Link>
        <Link to="/discussion-board"> Discussion Board </Link>
        <Link to="/ticket-booking"> Ticket Booking </Link>
        <Link to="/screens"> Screens </Link>

        </>
        
     );
}
 
export default Home;