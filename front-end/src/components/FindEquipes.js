import axios from 'axios'
import React, { useState } from 'react'

function FindEquipes() {
    const [equipe,setEquipe] = useState([])
    const [id,setId] = useState("640ba5cae86ce808d0ad23ac")
  const find = (e)=>{
    e.preventDefault()
    setId(e.target.value)
    axios.get(`http://127.0.0.1:9000/api/v1/equipes/${id}`)
    .then(equipe =>setEquipe(equipe.data[0]))
    .catch(err=>console.log(err))
  }
  return (
    <div>
        <input type="text" value={id} onChange={find} placeholder="insert something" className="form-control"/><br/>
        <div>
            <span>{equipe.name}</span> - <span>{equipe.contry}</span>
            
        </div>
    </div>
  )
}

export default FindEquipes