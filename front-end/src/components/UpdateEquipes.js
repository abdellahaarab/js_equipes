import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UpdateEquipes() {
  const [message,setMessage] = useState("")
  const [equipe,setEquipe] = useState("")
  const [name,setName] = useState("")
  const [contry,setContry] = useState("")
  var id = useLocation().state;


  useEffect(()=>{
    axios.get(`http://127.0.0.1:9000/api/v1/equipes/${id}`)
      .then(equipe =>setEquipe(equipe.data[0]))
      .catch(err=>console.log(err))
  },[])

  const fupdate = (e)=>{
    axios.put(
        'http://127.0.0.1:9000/api/v1/equipes/640ba5cae86ce808d0ad23ac',
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
        <div className='alert alert-success'>{message}</div>

        <div class="form">
            <input type="text" value={equipe.name} onChange={e=>setName(e.target.value)} className="form-control" placeholder='Nome'/> <br/>
            <input type="text" value={equipe.contry} onChange={e=>setContry(e.target.value)} className="form-control" placeholder='Contry'/><br/>
            <input type="button" value="Update" onClick={fupdate} className="btn btn-primary"/>
        </div>
    </div>
  )
}

export default UpdateEquipes