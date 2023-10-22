import React, { useCallback, useContext, useEffect } from "react";
import { Box, styled } from '@mui/material'
import { DataContext } from "../context/DataProvider";
import Editor from "./Editor";
import './Code.css';


const Code = () => {

    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

    const handleSaveHtml = useCallback(() => {
        localStorage.setItem("html", html);
        alert("saved")
    }, [html])

    const handleSaveCss = useCallback(() => {
        localStorage.setItem("css", css);
        alert("saved")
    }, [css])

    const handleSaveJs = useCallback(() => {
        localStorage.setItem("js", js)
        alert("saved")
    }, [js])


    return (
        <div className="containerEditor">
            <Editor
                heading='HTML'
                icon="/"
                color="red"
                handleSave={handleSaveHtml}
                value={html}
                onChange={setHtml} />
            <Editor
                heading='CSS'
                icon="*" color="#0ebeff"
                handleSave={handleSaveCss}
                value={css} onChange={setCss} />
            <Editor heading='JavaScript' icon="( )" handleSave={handleSaveJs} color="#FCD000" value={js} onChange={setJs} />
        </div>
    )
}

export default Code;