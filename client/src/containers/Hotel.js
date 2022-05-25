import React, { useState, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import BookingGrid from "../components/BookingGrid";
import { getBooking } from "../services/BookingServices";


const Hotel = ()=>{

    const[bookings, setBookings] = useState([])

    useEffect( () => {
        getBooking()
        .then( (allBookings) => {
            setBookings(allBookings)
        })
    }, [])


    const addBooking =(booking) => {
        const temp = bookings.map(b => b);
        temp.push(booking);
        setBookings(temp);
        }
        
        // const newBooking = bookingsCopy
        // newBooking.push(booking)
        // // if(!roomIsBooked){ this is for not allowing a booking if a room is arleady booked
        // //     copyList.push(newBooking)
        // // }
        // setBookings(newBooking)
    

    const removeBooking=(id)=>{
        const temp = bookings.map(b => b);
        const indexToDel = temp.map(b => b._id).indexOf(id);
    
        temp.splice(indexToDel, 1);
        setBookings(temp);
        }


    return(
        <>
            <BookingForm addBooking={addBooking}/>
            <BookingGrid bookings={bookings} removeBooking={removeBooking}/>
        </>
    )
}

export default Hotel