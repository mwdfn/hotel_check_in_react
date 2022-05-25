import React, { useState } from 'react'
import { postBooking } from "../services/BookingServices" 

const BookingForm = ({addBooking})=>{

    const [formData, setFormData] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [date, setDate] = useState()

        const handleDateChange = (event) =>{
            setDate(event.target.value)
        }

        const handleEmailChange = (event) => {
            setEmail(event.target.value)
        }

        const handleNameChange = (event) => {
            setName(event.target.value)
        }

        const onSubmit = (event)=>{
            event.preventDefault()
            setFormData({
                Name: name,
                Email: email,
                Date: date 
            })
            postBooking(formData).then((data)=>{
                addBooking(data)
                })
        }

    return(
        <>
            <form onSubmit={onSubmit}>
                <h2>Add a Booking</h2>
                    <div>
                        <label htmlFor="Name">Name: </label>
                        <input onChange={handleNameChange} type="text" id="Name"/>
                    </div>
                    <div>
                        <label htmlFor="Email">Email: </label>
                        <input onChange={handleEmailChange} type="text" id="Email"/>                    
                    </div>
                    <div>
                        <label htmlFor="Date">Date: </label>
                        <input onChange={handleDateChange} type="text" id="Date"/>
                    </div>
                    <input type="submit" value="Save" id="save"/>
            </form>
        </>
    )
}

export default BookingForm
