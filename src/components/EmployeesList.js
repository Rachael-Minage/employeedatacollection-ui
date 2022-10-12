
import {useState,useEffect} from 'react'


function Employees() {
  const [employee,setEmployee] = useState([])

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/employee/',{
      'method':'GET',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : 'Token 0d66d6ebbde4695f3d0302d56ac497418d64947468b28c5ac78780b9b8bf7621a0bf0b16fb6d9b561f5612511583d4e5cc5b28408d751210a27783fa8900e0bd'
      }
    })
    .then(resp=>resp.json())
    .then(employee=>{
      setEmployee(employee);
      console.log(employee);

    })
    .catch(error=>console.log(error))
    
  },[])


    
  return (
    <div>
              
        <h1>List Of Employees</h1>

<div>
  
  <table>
  <tr>
    <th>First Name</th>
    <th>Middle Name</th>
    <th>Date Of Graduation</th>
    <th>Date Of Employment</th>
    <th>Position</th>
    <th>Salary</th>
    <th>Supervisor</th>
    <th>Employee Code</th>

</tr>
 <tbody>
   {employee.map((employee) =>

          <tr>
          <td>{employee.first_name}</td>
          <td>{employee.middle_name}</td>
          <td>{employee.date_of_graduation}</td>
          <td>{employee.date_of_employment}</td>
          <td>{employee.position}</td>
          <td>{employee.salary}</td>
          <td>{employee.supervisor}</td>
          <td>{employee.employee_code}</td>
          </tr>
                    
    )}
  
    </tbody>
</table>


</div>      

</div>
);
  
}

export default Employees;