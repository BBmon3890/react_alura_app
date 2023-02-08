import React,{useState} from "react";
export const ColorModeContext = React.createContext({
    mode: "",
    setMode: ()=>{alert("Cu")},
    toggleMode:()=>{alert("cu2")}
});


export default function ColorModeProvider(props){
    const [mode,setMode] = useState(props.initiolMode);
    
    
    
    function toggleMode(){
        (mode === "dark")?setMode("light"):setMode('dark')
    }

    return(
        <ColorModeContext.Provider value={{mode: mode, setMode: setMode, toggleMode:toggleMode}}>
            {props.children}
        </ColorModeContext.Provider>
    )
}
