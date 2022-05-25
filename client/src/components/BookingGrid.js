import BookingCard from "./BookingCard";
import React from "react";

const BookingGrid =({bookings, removeBooking})=>{

    const bookingList = bookings.map((booking)=>{
        return <BookingCard booking={booking} key={booking._id} removeBooking={removeBooking}/>
    })

    return(
        <>
            <h1>hellô</h1>
            {bookingList}
        </>
    )
}

export default BookingGrid