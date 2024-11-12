import React, { useContext, useState } from 'react'
import { ApiContext } from '../context/ApiContext'

export default function Urlap() {
    const {postAdat, katLista}=useContext(ApiContext);
    /* az űrlapadatokhoz */
    const [adat, setAdat]=useState({
        title:"Ez a termék neve",
        price:1000,
        category:'...',
        description:'...',
        image:'...'
    })

    function valtoztatasKezeles(event){

        /* az inputba beírt adatokkal kell frissíteni az objektumunkat */
        const sObj={...adat}
        sObj[event.target.id]=event.target.value
        setAdat({...sObj})
    }

    function elkuld(event){
        /* leszedjük a zalapértelmezett eseménykezelőt */
        event.preventDefault()
        /* összegyűjtjük az adatokat az űrlap mezőiből és összeállítunk egy objektumot
        Ezt az objektumot küldjük el a post kéréssel a végpontra */
        console.log("elküld", adat)
        /* itt kellene validálni az adatokat és csak akkor elküldeni, ha formailag helyes */
        postAdat("/products",adat)
    }

  return (
    <div>
        <form onSubmit={elkuld}>
        <div class="mb-3">
            <label htmlFor="title" className="form-label"> A termék neve </label>
            <input type="text" value = {adat.title} onChange = {valtoztatasKezeles} className="form-control" id="title" aria-describedby="titleHelp" />
        </div>

        <div className="mb-3">
            <label htmlFor="price" className="form-label"> A termék ára </label>
            <input type="number" min="1000" max="100000" value={adat.price} onChange={valtoztatasKezeles} className="form-control" id="price" aria-describedby="Help"/>
        </div>

        <div className="mb-3">
            <label htmlFor="description" className="form-label"> A termék leírása </label>
            <textarea className="form-control" id="description" rows="3" onChange = {valtoztatasKezeles}></textarea>
        </div>

        <div className="mb-3">
            <select onChange={valtoztatasKezeles} className="form-select" value={adat.category} id="category" aria-label="Floating label select example">
                <option> A termék kategóriák </option>
                <>
                   {katLista.map((elem)=>{
                        return  <option value={elem}>{elem}</option>
                    })} 
                </>
            </select>
        </div>

        <button type="submit" class="btn btn-primary">
            Submit
        </button>
        </form>
    </div>
  )
}
