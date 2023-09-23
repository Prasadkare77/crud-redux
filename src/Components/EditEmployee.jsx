import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { EmployeeContext } from './EmployeeStore';

const EditEmployee = () => {
  const navigate = useNavigate()

  const {ID} = useParams()
  console.log(ID);

  const {employees, updateEmployee} = useContext(EmployeeContext)

  const [id,setId] = useState()
  const [name,setName] = useState()
  const [position,setPosition] = useState()
  const [company,setCompany] = useState()

  useEffect(()=>{
    const employee = employees.find((employee) => employee.ID === parseInt(ID))
    console.log(employee)
    if(employee){
      setId(employee.id)
      setName(employee.name)
      setPosition(employee.position)
      setCompany(employee.company)
    }
  },[ID,employees])

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedEmployee = {ID:parseInt(ID),id,name,position,company}
    updateEmployee(parseInt(ID),updatedEmployee)
    navigate('/')
  }

  return (
    <div>
      <p>Edit Employee</p>
      <div>
        <Form onSubmit={handleUpdate} className='mt-5'>
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

            <Button className='m-3' variant="outline-primary" type="submit" onSubmit={()=>navigate('/')}>
                Update
            </Button>
            <Button variant="outline-warning" type="submit" onClick={()=>navigate('/')}>
                Cancel
            </Button>
        </Form>
      </div>
    </div>
  )
}
export default EditEmployee;
