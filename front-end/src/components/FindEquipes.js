import axios from 'axios'
import React, { useState } from 'react'

function FindEquipes() {
    const [equipe,setEquipe] = useState([{name:"",contry:""}])
    const [id,setId] = useState("")
  const find = (e)=>{
    e.preventDefault()
    setId(e.target.value)
    axios.get(`http://127.0.0.1:9000/api/v1/equipes/${id}`)
    .then(equipe =>setEquipe(equipe.data[0]))
    .catch(err=>console.log(err))
  }
  return (
    <div>
        <div className='my-2 mx-auto'><a href="/"> Go Back </a></div>

        <input type="text" value={id} onChange={find} placeholder="insert something" className="form-control"/><br/>
        <button onClick={find} className="btn btn-info">Search</button>
        <div>
            <span>{equipe.name}</span> - <span>{equipe.contry}</span>
        </div>
    </div>
  )
}

export default FindEquipes