import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

// To read data from store we need useSelector
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from './employeeSlice';

const EmployeeList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const employees = useSelector(state=>state.employee.employees)

    const handleDelete = (ID) => {
        dispatch(deleteEmployee(ID))
    }
    
  return (
    <div>
        <h4>Employee List</h4>
        <div className='mt-3'>
            <Button variant="success" onClick={()=>navigate('/addEmployee')}>Add</Button>
        </div>
        
        <div className='container mt-5'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>Employee Name</th>
                        <th>Position</th>
                        <th>Company Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee,index)=>(
                    <tr key={employee.ID}>
                        <td>{index+1}</td>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.position}</td>
                        <td>{employee.company}</td>
                        <td>
                            <Button className='me-2' variant="primary" onClick={() => navigate(`/editEmployee/${employee.ID}`)}>Edit</Button>
                            <Button className='ms-2' variant="danger" onClick={() => handleDelete(employee.ID)}>Delete</Button>
                        </td>
                    </tr>
                    ))}
                </tbody>    
            </Table>
        </div>
    </div>
    
  )
}

export default EmployeeList