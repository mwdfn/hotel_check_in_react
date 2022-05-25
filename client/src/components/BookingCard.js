import { deleteBooking } from "../services/BookingServices";
import React from "react";

const BookingCard = ({booking, removeBooking}) => {

    // const handleUpdate = () =>{
    //     editStatus(booking._id).then(()=>
    //         removeBooking(booking._id))
    //     return
    // }

    const handleDelete = () => {
        deleteBooking(booking._id).then(()=>{
            removeBooking(booking._id);
        })
    }

    return(
        <>
        <div>
            Name: {booking.Name},
            Email: {booking.Email},
            Date: {booking.Date}
            {/* <button onClick={handleUpdate}>Update</button> */}
            <button onClick={handleDelete}>Delete</button>
        </div>
        </>

    )
}

export default BookingCard