import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../style/create.css";
import axios from 'axios';

const Create = () => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const history = useNavigate();
 const postFormData = async (e) => {
       e.preventDefault();
      await axios.post(
        "https://64ba6a3e5e0670a501d620a4.mockapi.io/crud-app",
        {
          name:name,
          email:email,
        }
       );
       history('/read');
 }



  return (
  <div>
     <h2>Simple CRUD App</h2>
     <Link to="/read">
      <button id='showdata'>Show data</button>
     </Link>
        <div className='form-container'>
      <form>
        <div className="group">
        <input 
          type="text" 
          placeholder='Usename'
          onChange={(e) =>{setName(e.target.value)}}/>
        </div>
        <div className="group">
        <input 
          type="email"
          placeholder='Email' 
          onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className="group">
        <input 
          type="submit"
          value={"Add"} 
          onClick={postFormData}/>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Create
