import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


function UpdateEquipes() {
  const [message,setMessage] = useState("")
  const [equipe,setEquipe] = useState("")
  const [name,setName] = useState("")
  const [contry,setContry] = useState("")
  var id = useLocation().state;
  console.log(id);

  useEffect(()=>{
    axios.get(
      `http://127.0.0.1:9000/api/v1/equipes/${id}`)
      .then(equipe =>{
        setName(equipe.data[0].name)
        setContry(equipe.data[0].contry)
        setEquipe(equipe.data[0])
      })
      .catch(err=>console.log(err))
  },[])

  const fupdate = (e)=>{
    axios.put(
        `http://127.0.0.1:9000/api/v1/equipes/${id}`,
        {
            "id": 1,
            "name":name,
            "contry":contry 
        }
    )
      .then(equipe =>setMessage("Updeted Successfully !!"))
      .catch(err=>console.log(err))
  }
  return (
    <div>
        <div className='my-2 mx-auto'><a href="/"> Go Back </a></div>
        
        <div className='alert alert-success'>{message}</div>
        
        <div className="form">
            <input type="text" value={name} onChange={e=>setName(e.target.value)} className="form-control" placeholder='Nome'/> <br/>
            <input type="text" value={contry} onChange={e=>setContry(e.target.value)} className="form-control" placeholder='Contry'/><br/>
            <input type="button" value="Update" onClick={fupdate} className="btn btn-primary"/>
        </div>
    </div>
  )
}

export default UpdateEquipes