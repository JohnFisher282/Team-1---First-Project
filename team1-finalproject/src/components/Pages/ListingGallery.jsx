import React from "react";
import { Link } from "react-router-dom";

const ListingGallery = () => {
    return ( 
        <>
       
        <h3> Listing Gallery </h3>

        <Link to="/listing-gallery/batman">
        <img src="https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg" alt="Batman" width="200px" />
        </Link>
        <h5> The Batman </h5>

        <Link to="/listing-gallery/spider-man-no-way-home">
        <img src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg" alt="Spiderman" width="200px" />
        </Link>
        <h5> Spider-Man: No Way Home </h5>

        <Link to="/listing-gallery/uncharted">
        <img src="https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_FMjpg_UY474_.jpg" alt="Uncharted" width="200px" />
        </Link>
        <h5> Uncharted </h5>

        <Link to="/listing-gallery/sonic-the-hedgehog-2">
        <img src="https://m.media-amazon.com/images/M/MV5BMzExMWVjODMtYjgzOC00ZDljLTgxMTktYWQ0NGNiOTcxNGYxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg" alt="Sonic2" width="200px" />
        </Link>
        <h5> Sonic the Hedgehog 2 </h5>

        </>
     );
    }
     
 
export default ListingGallery;