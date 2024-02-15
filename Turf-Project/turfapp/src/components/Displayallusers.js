import React, { useEffect, useState } from 'react'
import UserService from '../Services/UserService'
export default function Displayallusers() {

 const [users,setUsers] = useState([]);
 useEffect(()=>{
    UserService.getUser().then((res)=>{
        console.log(res.data);
        setUsers(res.data);
    })
 },[]);


  return (
<table className="container mt-5 table">
     <thead>
       <tr>
        <th scope='col'>User Id</th>
        <th scope='col'>user Name</th>
        <th scope='col'>User Age</th>
        <th scope='col'>User Mobile No.</th>
        <th scope='col'>User User Name</th> 
        <th scope='col'>User Password</th>
        {/* <th scope='col'>User Delete</th> */}
       </tr>
     </thead>
     <tbody>
      { users && users.map((usr)=>(
       <tr>
        <td scope="row">{usr.userId}</td>
        <td scope="row">{usr.name}</td>
        <td scope="row">{usr.age}</td>
        <td scope="row">{usr.mobileNo}</td>
        <td scope="row">{usr.username}</td>
        <td scope="row">{usr.password}</td>
        {/* <td><button className='btn btn-primary' onClick={()=>deleteemployee(usr.id)}>Delete</button></td> */}
       </tr>
      ))
      }
     </tbody>
    </table>
  )
}
