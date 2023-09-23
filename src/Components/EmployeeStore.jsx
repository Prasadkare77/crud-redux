import React, { createContext, useState } from 'react'

export const EmployeeContext = createContext()

export const EmployeeProvider = ({children}) => {
    const [employees,setEmployee] = useState([])

    const addEmployee = (employee) => {
        console.log(employee);
        setEmployee([...employees,employee])
    }

    const updateEmployee = (ID, updatedEmployee) => {
      setEmployee(
        employees.map((employee) => 
          employee.ID === ID ? updatedEmployee : employee
        )
      )
    }

    const deleteEmployee = (ID) => {
      console.log(ID)
      setEmployee(
        employees.filter((employee)=> employee.ID !== ID

        )
      )
    }

  return (
    <div>
        <EmployeeContext.Provider value={{employees, addEmployee, updateEmployee, deleteEmployee}}>
            {children}
        </EmployeeContext.Provider>
    </div>
  )
}
