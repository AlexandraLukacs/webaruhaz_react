import React from 'react'
import "./Termek.css"

export default function Termek(props) {
    /* létre kell hozni egy terméket bootstrap card */
  return (
    <div className='card'>
        <h4 className='card-title'>{props.termek.title}</h4>
        <img className="card-img" src={props.termek.image} alt={props.termek.image}/>
        <p>{props.termek.description}</p>
        <p>{props.termek.category}</p>
        <button type="button" class="btn btn-primary">Kosárba</button>
        <p>{props.termek.price} $</p>
    </div>
  )
}
