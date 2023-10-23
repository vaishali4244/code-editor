import { createContext, useState } from "react";


export const DataContext = createContext();

const DataProvider = ({children})=>{

const [html,setHtml] = useState(localStorage.getItem("html") || ""); 
const [css,setCss] = useState(localStorage.getItem("css") || "");
const [js,setJs] = useState(localStorage.getItem("js") || "");

    return(
        <DataContext.Provider
        value = {{ html,setHtml,css,setCss, js,setJs}}
        >
            {children}
            </DataContext.Provider>
    )
}


export default DataProvider;