import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees: []
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers:{
        addEmployee:(state,action) => {
            console.log(action);
            state.employees.push(action.payload)
        },

        updateEmployee:(state,action) => {
            console.log(action.payload)
            const {ID, updatedEmployee} = action.payload
            const index = state.employees.findIndex(employee => employee.ID === ID)
            if(index !== -1){
                state.employees[index] = {...state.employees[index],...updatedEmployee}
            }
        },

        deleteEmployee:(state,action) => {
            console.log(action.payload)
            state.employees = state.employees.filter(employee => employee.ID !== action.payload)
        }

    }
})

export const { addEmployee, updateEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;