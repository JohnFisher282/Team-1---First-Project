import { useState } from "react";
import axios from 'axios';

const TicketBooking = () => {

    const[data, setData] = useState([])

    const[booking, setBooking] = useState({});

    const setEntry = (event) => {
        const {name, movieTitle, seats, ticketType, value} = event.target;
        setBooking((prevValue) => ({
            ...prevValue, [name]: value, [movieTitle]: value, [seats]: value, [ticketType]: value,
        }));
    }

    const postData = () => {
        axios.post(`http://localhost:3000/bookings/create`, booking)
        .then((response) => {
            console.log(response);
        })
    }
    return (
        <>
        <h3> Ticket Booking </h3>
        <form action="" className="form">
            <h4>Please Book your Tickets below!</h4>

            <label htmlFor="name">Name:</label>
            <input type="text" placeholder="Enter name..." id="name" value={booking.name} onChange={setEntry}/><br />
            <label htmlFor="movieTitle">Movie Title:</label>
            <input type="text" placeholder="Enter movie title..." id="movieTitle" value={booking.movieTitle} onChange={setEntry}/><br />
            <label htmlFor="seats">No. of Seats:</label>
            <input type="number" placeholder="Enter no. of seats..." id="seats" value={booking.seats} onChange={setEntry}/><br />
            <p>Please select your ticket type:</p>
            <input type="radio" id="adult" name="ticketType" value={booking.ticketType} onChange={setEntry}/>
            <label htmlFor="adult">Adult</label><br />
            <input type="radio" id="child" name="ticketType" value={booking.ticketType} onChange={setEntry}/>
            <label htmlFor="child">Child</label><br />
            <input type="radio" id="concession" name="ticketType" value={booking.ticketType} onChange={setEntry}/>
            <label htmlFor="concession">Concession</label><br />
            <button type="button" onClick={postData}>Book Tickets!</button>
        </form>
        </>
     );
}
 
export default TicketBooking;