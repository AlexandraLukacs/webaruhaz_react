

export const KosarContext=createContext("")

export const KosarProvider=({children})=>{
    const [kosarLista, setKosarLista]=useState([])
    return (
    <KosarContext.Provider value={{kosarLista}}>
        {children}
    </KosarContext.Provider>
    )
}