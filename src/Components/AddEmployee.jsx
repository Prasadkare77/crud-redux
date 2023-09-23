import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Import useDispatch for calling the action in the reducer
import { useDispatch } from 'react-redux';
// Import reducer action from employee Slice
import { addEmployee } from './employeeSlice';


const AddEmployee = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [id,setId] = useState()
    const [name,setName] = useState()
    const [position,setPosition] = useState()
    const [company,setCompany] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        const employee = {ID:Date.now(), id,name,position,company}
       
        // Call the employee action of employeeSlice
        dispatch(addEmployee(employee))
        alert(`Employee Added Successfully`)
        navigate('/')
    }

  return (
    <div>
        <Form onSubmit={handleSubmit} className='mt-5'>
            <Form.Group className="d-inline-block mb-3 me-3" controlId="formBasicEmail">
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" placeholder="Enter Id" value={id} onChange={(e)=>setId(e.target.value)}/>
            </Form.Group>
            <Form.Group className="d-inline-block mb-3 me-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="d-inline-block mb-3 me-3" controlId="formBasicEmail">
                <Form.Label>Position</Form.Label>
                <Form.Control type="text" placeholder="Enter Position" value={position} onChange={(e)=>setPosition(e.target.value)}/>
            </Form.Group>
            <Form.Group className="d-inline-block mb-3 me-3" controlId="formBasicEmail">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" placeholder="Enter Company" value={company} onChange={(e)=>setCompany(e.target.value)}/>
            </Form.Group>

            <Button className='m-3' variant="primary" type="submit" onSubmit={()=>navigate('/')}>
                Add
            </Button>
            <Button variant="primary" type="submit" onClick={()=>navigate('/')}>
                Cancel
            </Button>
        </Form>
    </div>
  )
}
export default AddEmployee;