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
    const getAdat= async (vegpont)=> {
        try {
            const response = await myAxios.get(vegpont);
            setTermekLista(response.data)
            }catch (err){
                console.log("Hiba történt aza datok lekérésekor.")
            }finally{

            }
        };

        //asszinkron hívások kezelése useEffekt hook
        useEffect(() => {
            getAdat("/products");
        }, []);

    return (
        <ApiContext.Provider value={{termekLista }}>
            {children}
        </ApiContext.Provider>
    )
}