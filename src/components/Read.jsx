import React, { useEffect, useState } from 'react'
import "../style/read.css"
import { Link } from 'react-router-dom'
import axios from 'axios'

const Read = () => {

  //useState to store server data for the purpose to display 
  const [data,setData] = useState([]);
  
  
 
  //function for getting data from server
  const getFormData = async () => {
      await axios.get("https://64ba6a3e5e0670a501d620a4.mockapi.io/crud-app")
      .then((resp) => {
       setData(resp.data);
      }).catch((err) => console.log(err));
  }

  //function to delete data
  const deleteFormData = (id) => {
      axios.delete(`https://64ba6a3e5e0670a501d620a4.mockapi.io/crud-app/${id}`)
      .then(() => getFormData());
  }
  
  //function to store data which is to be updated
  const storeUpdateData = (id,name, email) => {
           localStorage.setItem("id",id)
           localStorage.setItem("name",name)
           localStorage.setItem("email",email)
  }

   useEffect(()=> {
    getFormData();
   },[]);
  return (
     <>
    <Link to="/">
      <button className='back-btn'>Back</button>
    </Link> 
    <div className='showdata'>
      <table>
       <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th></th>
        <th></th>
       </tr>
          {
            data.map((formData) =>{
              const {id,name,email} = formData;
              return (
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      <Link to="/update">
                      <button 
                       className='edit-btn'
                       onClick={() => storeUpdateData(id,name, email)}>Edit</button>
                      </Link>
                    </td>
                    <td>
                   <Link to="/read">
                   <button 
                      className='delete-btn' 
                      onClick={() =>deleteFormData(id)}>Delete</button>
                   </Link>
                    </td>
              </tr>
              )
            })
          }
      </table>
    </div>
     </>
  )
}

export default Read
