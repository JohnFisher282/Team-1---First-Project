import { useState } from "react"
import axios from 'axios';

const Search = () => {

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
              <h5>Search</h5>

            <input type="text" placeholder= "Search term" value={query} onChange={(e) => { setQuery(e.target.value) }} />
            <button type="button" onClick={getData}> Click to search</button>
            <br></br>

            {       
        data.map((search, key) => {
        return <h5> Name: {search.Title}, {search.Year} </h5>
        })
    }
        </> 
    );
}
 
export default Search;