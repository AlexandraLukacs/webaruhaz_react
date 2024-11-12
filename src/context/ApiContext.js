/* 1. createContext
2. provider
2.3. provider és a context összekötése
3. körbeölelgetés
4. felhasználás a komponensben */

/* Alapszerkezet (mindig így néz ki) 
import { createContext, useState } from "react";

export const ApiContext=createContext("")

export const ApiProvider=({children})=>{
    const [termekLista, setTermekLista]=useState([])
    return (
    <ApiContext.Provider value={{termekLista }}>
        {children}
    </ApiContext.Provider>
    )
} */
import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";


export const ApiContext=createContext("")

export const ApiProvider=({children})=>{
    const [termekLista, setTermekLista]=useState([]);
    const [katLista, setKatLista]=useState([]);
    const getAdat= async (vegpont, callbackFv)=> {
        try {
            const response = await myAxios.get(vegpont);
            console.log(response)
            callbackFv([...response.data])
            }catch (err){
                console.log("Hiba történt az adatok lekérésekor.")
            }finally{

            }
        };


    const postAdat= async (vegpont, adat)=> {
        try {
            const response = await myAxios.post(vegpont,adat);
            console.log(response.data)
            }catch (err){
                console.log("Hiba történt az adatok küldésekor.")
            }finally{

            }
        };


        //asszinkron hívások kezelése useEffekt hook
        useEffect(() => {
            getAdat("/products", setTermekLista);
            getAdat("/products/categories", setKatLista);
        }, []);

    return (
        <ApiContext.Provider value={{termekLista, postAdat, katLista}}>
            {children}
        </ApiContext.Provider>
    )
}