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

const RequestForm = () => {
    const [requests, change] = useState({
        name: "",
        currentClient: false,
        appointmentType: "",
        description: "",
        hairHistory: "",
        appointmentDateTime: "",
    })

    const history = useHistory()

    const submitRequest = (evt) => {
        const newRequest = {
            name: requests.name,
            currentClient: requests.currentClient,
            appointmentType: requests.appointmentType,
            description: requests.description,
            hairHistory: requests.hairHistory,
           appointmentDateTime: requests.appointmentDateTime
        }
        
        evt.preventDefault()

        // if (!input) {
        //     alert('Please add a task')
        //     return
        //   }

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

    const setDateTime = (appointmentDateTime) => {
        const copy = {...requests}
        copy.appointmentDateTime = appointmentDateTime
        change(copy)
    }
    const [value, setValue] = React.useState(new Date('2014-09-18T21:11:54'));
 
  const handleChange = (newValue) => {
    this.setValue(newValue);
  };
      
    
    return (
        < div className='request-form-container'>
    <form className='requestForm'>
    <button className='btn' onClick={() => history.push("/requests")}>X</button>
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
        {/* <fieldset>
            <div className='form-group'>
                <label htmlFor='photo'>Upload photo here: </label>
                <input 
                    type="file"
                    className='form-control'
                    placeholder='Upload Photo Here'
                    
                />
                
            </div>
        </fieldset> */}
        <fieldset>
        <div style={{margin: "3% 5%"}}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          
          <DateTimePicker
            className='form-control'
            label="Date&Time picker"
            value={value}
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