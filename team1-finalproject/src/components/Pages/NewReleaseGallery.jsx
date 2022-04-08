import { Link } from "react-router-dom";

const NewReleaseGallery = () => {
    return ( 

        <>
       
        <h3> New Release Gallery </h3>

        <Link to="/newreleasegallery/doctor-strange-in-the-multiverse-of-madnes">
        <img src="https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg" alt="Doctor" width="200px" />
        </Link>
        <h5> Doctor Strange in the Multiverse of Madness </h5>

        <Link to="/newreleasegallery/minions-the-rise-of-gru">
        <img src="https://m.media-amazon.com/images/M/MV5BYjZkNzM0MDItZGQ0Zi00N2MzLTlhM2MtNjJlMTczZDBkNWUxXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UY720_.jpg" alt="Minion" width="200px" />
        </Link>
        <h5> Minions: The Rise of Gru </h5>

        <Link to="/newreleasegallery/operation-mincemeat">
        <img src="https://m.media-amazon.com/images/M/MV5BOGZlNjZhNjgtMjQzZC00MDI0LWFmNGQtNmNiYTIyYTE3ODhkXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" alt="Operation" width="200px" />
        </Link>
        <h5> Operation Mincemeat </h5>

        <Link to="/newreleasegallery/dc-league-of-super-pets">
        <img src="https://m.media-amazon.com/images/M/MV5BYzVlZjk4YzMtZDNhNC00ZjY0LTg5ZmEtNjU1MTJlN2NhY2VlXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg" alt="SuperPets" width="200px" />
        </Link>
        <h5> DC League of Super-Pets </h5>

        </>

     );
}
 
 export default NewReleaseGallery;