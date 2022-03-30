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

        axios.get(`http://www.omdbapi.com/?i=${query}&apikey=86e6f97c`)
        .then((response) => {  
            console.log(response.data);
            if (Array.isArray(response.data)) {
                setData(response.data)
            } else {
                setData([response.data])
            }

        }) 
    }

    // const deleteData = () => {
    //     axios.delete(`http://www.omdbapi.com/?i=tt3896198&apikey=86e6f97c/${id}`)
    //     .then(() => {
    //         console.log(" Deleted");
    //     });
    // }

    // const postData = () => {
    //     axios.post(`http://www.omdbapi.com/?i=tt3896198&apikey=86e6f97c/`, search) 
    //     .then((response) => {
    //         console.log(response);
    //     })
    // }

    // const putData = () => {
    //     axios.put(`https://www.omdbapi.com/?i=tt3896198&apikey=86e6f97c/${id}`, search) 
    //     .then((response) => {
    //         console.log(response);
    //     })
    // }

    return ( 
        <>
            <h5>Get</h5>

            <input type="text" value={query} onChange={(e) => { setQuery(e.target.value) }} />
            <button type="button" onClick={getData}> Click to get data</button>
            <br></br>


            {
                data.map((search, key) => {
                    return <h2> Name: {search.Title}</h2>
                })
            }
        </> 
    );
}
 
export default Search;