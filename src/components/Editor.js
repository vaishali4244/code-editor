import React, { useCallback, useEffect, useState } from "react";
import { Box} from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import { hover } from "@testing-library/user-event/dist/hover";
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import './Editor.css'



const Editor = ({ heading, icon, color, value, onChange, handleSave }) => {

    const [open, setOpen] = useState(true);
    const [lock, setLock] = useState(true);
    const savedData = localStorage.getItem("code") || "";

    useEffect(()=>{
        if(savedData){
        console.log("savedData", savedData);
        }
    },[savedData])
    

    const handleChange = useCallback((editor, data, value) => {
        onChange(value);
    },[value])

    const handleCopy = useCallback(()=>{
        navigator.clipboard.writeText(value);
        alert("copied");
    },[value])


    const handleLock =useCallback(()=>{
        setLock(!lock);
    },[lock])

    return (
        <div className="container" style={open ? null : { flexGrow: 0 }} >
            <div className="contentHeader">
                <div className="heading">
                    <div
                        component="span"
                        style={{
                            backgroundColor: color,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            borderRadius: 5,
                            marginLeft: 5,
                            paddingBottom: 2,
                            color: '#000'
                        }}
                    >{icon}</div>
                    {heading}
                </div>
                <div className="symbol">
                    <button className="copy" 
                     onClick={handleLock}
                     >
                        {lock===false?<LockIcon fontSize="small"/>
                        :<LockOpenIcon fontSize="small"/>}
                     </button>
                    <button className="copy" style={{backgroundColor:hover?lock===true?"rgb(95, 255, 47)":"grey":"default"}} disabled={!lock} onClick={handleSave}>Save</button>
                    <button className="copy"
                     style={{backgroundColor:hover?lock===true?"rgb(95, 255, 47)":"grey":"default"}}
                    disabled={!lock} onClick={handleCopy}>Copy</button>
                    <CloseFullscreenIcon
                        fontSize="medium"
                        onClick={() => setOpen(prevState => !prevState)} />
                </div>
            </div>

            <ControlledEditor className="controlledEditor"
                value={value}
                onBeforeChange={handleChange}
                options={{
                    mode: 'xml',
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </div>
    )
}

export default Editor;