import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

export default function RegistrationForm() {
  return (
   <section>
    <div className='register'>
        <div className='col-1'>
            <h2>Sign In</h2>
            <span>register</span>

            <form id="form" className='flex flex-col'>
                <input type='text' placeholder='username' />
                <input type='text' placeholder='password' />
                <input type='text' placeholder='confirm password'/>
                <input type='text' placeholder='email address'/>
                <button className='btn'>Sign In</button>
            </form>
        </div>
        <div className='col-2'></div>
    </div>
   </section>
  )
}
