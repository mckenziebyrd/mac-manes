import React, { useEffect, useState } from 'react'
import DateTimePicker from './DateTimePicker'


const RequestForm = () => {
    const [requests, change] = useState({
        name: "",
        currentClient: false,
        description: "",
        hairHistory: "",
    })

    

    const submitRequest = (evt) => {
        const newRequest = {
            name: requests.name,
            currentClient: requests.currentClient,
            description: requests.description,
            hairHistory: requests.hairHistory,
           
        }
        
        evt.preventDefault()

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRequest)
        }

        return fetch("http://localhost:8088/requests", fetchOption)
            .then(() => {
                console.log(newRequest)
            })
    }



    return (
    <form className='requestForm'>
        <h2>Appointment Request Form</h2>
        <fieldset>
            <div className='form-group'>
                <label htmlFor='name'>Name: </label>
                <input 
                    type="text"
                    className='form-control'
                    placeholder='Name'
                    onChange={
                        (evt) => {
                            const copy = {...requests}
                            copy.name = evt.target.value
                            change(copy)
                        }
                    }
                />
                
            </div>
        </fieldset>
        <fieldset>
            <div className='form-group'>
                <label htmlFor='current-client'>Current Client: </label>
                <input
                    type="checkbox"
                    className='form-control'
                    onChange={
                        (evt) => {
                            const copy = {...requests}
                            copy.currentClient = evt.target.value
                            change(copy)
                        }
                    }
                />

            </div>
        </fieldset>
        <fieldset>
            <div className='form-group'>
                <label htmlFor='description'>Description of hair goals: </label>
                <input 
                    type="text"
                    className='form-control'
                    placeholder='Descripton'
                    onChange={
                        (evt) => {
                            const copy = {...requests}
                            copy.description = evt.target.value
                            change(copy)
                        }
                    }
                />
                
            </div>
        </fieldset>
        <fieldset>
            <div className='form-group'>
                <label htmlFor='history'>Chemical Processes from the last 3 years: </label>
                <input 
                    type="text"
                    className='form-control'
                    placeholder='Hair History'
                    onChange={
                        (evt) => {
                            const copy = {...requests}
                            copy.hairHistory = evt.target.value
                            change(copy)
                        }
                    }
                />
                
            </div>
        </fieldset>
        <fieldset>
            <div className='form-group'>
                <label htmlFor='photo'>Upload photo here: </label>
                <input 
                    type="file"
                    className='form-control'
                    placeholder='Upload Photo Here'
                />
                
            </div>
        </fieldset>
        <fieldset>
        <div className='form-group'>
        
        <DateTimePicker />
        </div>
        </fieldset>
        <button   
            onClick={submitRequest}
            className="btn btn-primary">
            Submit Request    
            </button>
            
    </form>
  )
}

export default RequestForm