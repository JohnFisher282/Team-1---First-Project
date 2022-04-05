import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"

const Navbar = () => {

    const [data, setData] = useState([])
    const [query, setQuery] = useState("")
    const [id, setID] = useState(0)
    const [search, setSearch] = useState({})

    const setObject = (event) => {
        const {title, value} = event.target;
        setSearch((prevValue) => ({
            ...prevValue, [title]: value,
        }));
    };

    const getData = () => {

        axios.get(`http://www.omdbapi.com/?s=${query}&apikey=86e6f97c`)
        .then((response) => {  
            console.log(query);
            console.log(response.data.Search);
            if (Array.isArray(response.data.Search)) {
                setData(response.data.Search)
            } else {
                setData([response.data.Search])
            }

        }) 
    }

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
            

            <h5>Search</h5>

            <input type="text" value={query} onChange={(e) => { setQuery(e.target.value) }} />
            <button type="button" onClick={getData}> Click to search</button>
            <br></br>
        </>
     );
}
 
export default Navbar;