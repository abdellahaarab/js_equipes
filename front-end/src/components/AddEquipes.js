import axios from 'axios'
import React, { useState } from 'react'

function AddEquipes() {
  const [message,setMessage] = useState("")
  const [name,setName] = useState("")
  const [contry,setContry] = useState("")

  const fadd = (e)=>{
    // e.preventDefault()
    axios.post(
        'http://127.0.0.1:9000/api/v1/equipes',
        {
            "id": 1,
            "name":name,
            "contry":contry 
        }
    )
      .then( () =>setMessage("The item has been added Successfully !!"))
      .catch(err=>console.log(err))
  }
  return (
    <div>
        <div className='alert alert-success'>{message}</div>

        <div class="form">
            <input type="text" value={name} onChange={e=>setName(e.target.value)} className="form-control" placeholder='Nome'/> <br/>
            <input type="text" value={contry} onChange={e=>setContry(e.target.value)} className="form-control" placeholder='Contry'/><br/>
            <input type="button" value="Add New Groupe" onClick={fadd} className="btn btn-primary"/>
        </div>
    </div>
  )
}

export default AddEquipes