import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap'
const UserForm = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const handleNameChange = (e) => {

    const containsNumber = /\d/.test(e.target.value);
    if (containsNumber) {
      setNameError(true)
    } else {
      setNameError(false);
    }
    setName(e.target.value);
  }
  const handleEmailChange = (e) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valEmail = emailRegex.test(e.target.value)
    if (valEmail) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
    setEmail(e.target.value);
  }
  const handleAgeChange = (e) => {
    const bday = e.target.value;
    const parts = bday.split("-");
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const birthdateObj = new Date(year, month, day);

    // Calculate age
    const age = Math.floor((Date.now() - birthdateObj.getTime()) / (1000 * 60 * 60 * 24 * 365));
    if (age < 18) {
      setAgeError(true);
    } else {
      setAgeError(false);
    }
    setDob(e.target.value);
  }
  const handlePhoneChange = (e) => {
    const pattern = /^[0-9]{10}$/; // pattern to match 10 digit mobile number
    const value = e.target.value;
    if (!pattern.test(value)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
    setPhone(value);
  }
  const submitUserForm = (event) => {
    event.preventDefault();
    if (!name || !email || !phone || !dob) {
      alert("Please fill all fields")
      return
    }
    if (nameError || ageError || phoneError || emailError) {
      alert("Please enter valid inputs")
      return
    }
    setSubmitting(true);
    const data = { name, email, dob, phone };
      fetch('http://localhost:3001/api/user-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        alert("Form Submitted Successfully")
        navigate('/user-list');
      }
      )
      .catch(error => console.error(error));
      
      setSubmitting(false)
  }

  return (
    <>
      <h2 className='text-center mx-auto mt-6'>User Form</h2>
      {submitting && <h3 className='text-center mx-auto'> Submitting Form..... </h3>}
      <div className='container my-4'>
        <Form className='' onSubmit={submitUserForm}>
          <FormGroup>
            <Label for="username">
              Name
            </Label>
            <Input id="username" name='name' placeholder='xyz' value={name} onChange={handleNameChange} invalid={nameError} />
            {nameError &&
              <FormFeedback>
                Please Enter Valid Name
              </FormFeedback>
            }
          </FormGroup>
          <FormGroup>
            <Label for="useremail">
              Email
            </Label>
            <Input type='email' id='useremail' placeholder='example@gmail.com' value={email} invalid={emailError} onChange={handleEmailChange} />
            <FormFeedback invalid>
              Please enter valid email address
            </FormFeedback>
            <FormText>

            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="userdob">
              Date Of Birth
            </Label>
            <Input type='date' id='userdob' name='dob' value={dob} invalid={ageError} onChange={handleAgeChange} />
            <FormFeedback invalid>
              Age must be greater than 18
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="phoneno">
              Phone Number
            </Label>
            <Input type='number' name='phone' id='phoneno' value={phone} invalid={phoneError} onChange={handlePhoneChange} />
            <FormFeedback invalid>
              Mobile Number should be of 10 digit
            </FormFeedback>
          </FormGroup>
          <Button type='submit' className='btn-success'>Submit</Button>
        </Form>
      </div>
    </>
  )
}

export default UserForm
