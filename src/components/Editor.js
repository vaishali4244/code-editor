import React, { useCallback, useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
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


const Container = styled(Box)`
flex-grow:1;
flex-basic:0;
display:flex;
flex-direction:column;
padding: 0 8px;
height:61.5vh;
`

const Heading = styled(Box)`
background:#1d1e22;
display:flex;
padding:9px 12px;
height:2vh;
`
const ContentHeader = styled(Box)`
display: flex;
background: black;
color:white;
justify-content:space-between;
font-weight:600;
padding-top:0;
`
const Symbol = styled(Box)`
display:flex;
justify-content:flex-end;
margin:2px;

`

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

    // const handleSave = useCallback(()=>{
    //     localStorage.setItem("code",value)
    //     alert("saved")
    // },[value])

    const handleLock =useCallback(()=>{
        setLock(!lock);
    },[lock])

    return (
        <Container style={open ? null : { flexGrow: 0 }} >
            <ContentHeader>
                <Heading>
                    <Box
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
                    >{icon}</Box>
                    {heading}
                </Heading>
                <Symbol>
                    <button className="copy" 
                     onClick={handleLock}
                     >
                        {/* {lock===true?"unlocked":"lock"} */}
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
                </Symbol>
            </ContentHeader>

            <ControlledEditor className="controlledEditor"
                value={value}
                onBeforeChange={handleChange}
                options={{
                    mode: 'xml',
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </Container>
    )
}

export default Editor;