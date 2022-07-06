import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Button from './RequestFormButton';
import "./Button.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { appendOwnerState } from '@mui/base';

const RequestForm = () => {
    const loggedInUser = parseInt(localStorage.getItem("manes_user")) 
    const [requests, change] = useState({
        name: "",
        currentClient: false,
        appointmentType: "",
        description: "",
        hairHistory: "",
        img: "",
        appointmentDateTime: new Date('2014-09-18T21:11:54'),
        senderId: ""
    })
const [image, setImage] = useState('')
const [loading, setloading] = useState(false)
const [users, updateUser] =useState([])

useEffect(
    () => {
        fetch("http://localhost:8088/users")
        .then((res) => res.json())
        .then((data) => {
          updateUser(data);
          
    })}, [])

    const history = useHistory()

    const submitRequest = (evt) => {
        const newRequest = {
            name: requests.name,
            currentClient: requests.currentClient,
            appointmentType: requests.appointmentType,
            description: requests.description,
            hairHistory: requests.hairHistory,
            img: image,
           appointmentDateTime: requests.appointmentDateTime.toString(),
            senderId: loggedInUser
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
               
            })
    }

    const setDateTime = (appointmentDateTime) => {
        const copy = {...requests}
        copy.appointmentDateTime = appointmentDateTime
        change(copy)
    }
//uploads image to cloudinary
    const uploadImage= async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'mac-manes')
        setloading(true)
        const res = await fetch(
            "https:api.cloudinary.com/v1_1/dhac1yozz/image/upload" ,
            {
                method: 'POST',
                body: data
            }
        )

        const file = await res.json()

        setImage(file.secure_url)
        setloading(false)

    
    }

    //working on having logged in user's name auto filled in the name part of the form
    // const findMessageSender = users.find((user) => {
    //     return user.id === loggedInUser;
    //   });
    
    // console.log(findMessageSender)
    return (
        < div className='request-form-container'>
    <form className='requestForm'>
    <button className='btn' onClick={() => history.push("/requests")}>X</button>
         <h2>Appointment Request Form</h2>
        <h3></h3>
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
                <label htmlFor='appointment-type'>Appointment: </label>
                <select 
                    type="text"
                    className='form-control'
                    placeholder='Appointment Type'
                    onChange={
                        (evt) => {
                            const copy = {...requests}
                            copy.appointmentType = evt.target.value
                            change(copy)
                        }
                    }
                >
                    <option>Choose Appointment Type</option>
                    <option>Full Highlight</option>
                    <option>Base Color</option>
                    <option>Bleach and Tone</option>
                    <option>Balayage</option>
                    <option>Transformation Color</option>
                    <option>Haircut</option>
                </select>
            
               

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
                    name="file"
                    onChange={uploadImage}
                     />
                {loading ? (
                        <h3>Loading...</h3>
                    ) : (
                        <img src={image} style={{width: '300px'}} />
                    )}
            </div>
        </fieldset>
        <fieldset>
        <div style={{margin: "3% 5%"}}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          
          <DateTimePicker
            className='form-control'
            label="Date&Time picker"
            value={requests.appointmentDateTime}
            onChange={setDateTime}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </div>
    
        </fieldset>
        <button   
            onClick={submitRequest}
            className="btn btn-primary">
            Submit Request    
            </button>
            
    </form>
    </div>
  )
}

export default RequestForm