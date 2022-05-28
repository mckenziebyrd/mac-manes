import React from 'react'
import DateTimePicker from '../DateTimePicker'

const RequestForm = () => {
 
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
                />
                
            </div>
        </fieldset>
        <fieldset>
            <div className='form-group'>
                <label htmlFor='current-client'>Current Client: </label>
                <input
                    type="checkbox"
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
    </form>
  )
}

export default RequestForm