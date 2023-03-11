import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



function AllEquipes() {
  const [lesDonne,setLesDonne] = useState([])
  const [message,setMessage] = useState("")

  // get all data from database
  useEffect(()=>{
    axios.get('http://127.0.0.1:9000/api/v1/equipes')
      .then(equipes =>setLesDonne(equipes.data))
      .catch(err=>console.log(err))
  },[])

  // function delete
  const fdelete  = (e)=>{
    // e.preventDefault()
    axios.delete(`http://127.0.0.1:9000/api/v1/equipes/${e.target.value}`)
    .then(equipes =>setMessage(equipes.data.message))
    .catch(err=>console.log(err))
  }
  return (
    <div>
        <div className='alert alert-info'>{message}</div>
        <div className="my-2">
        <a href="/add" className="m-1 btn btn-primary">Add item </a> <a href="/find" className="m-1 btn btn-info">Find item ?</a>
        </div>
        <h1 className='m-5'>List des Equipes</h1>
        <div>
            <table className="table">
              <thead>
                <tr className="table-light table-active">
                  <th>Nome</th>
                  <th>Contry</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
{lesDonne.map((elemnt,index)=><tr key={index} className="table-light"><td>{elemnt.name}</td><td>{elemnt.contry}</td><td><button onClick={fdelete} value={elemnt._id} className="btn btn-info">Delete</button> <Link className="btn btn-info" to="/update/" state={elemnt._id}>Update</Link></td></tr>)}
              </tbody>
            </table>
        </div>
    </div>
  )
}

export default AllEquipes