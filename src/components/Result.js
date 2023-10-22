import { useContext, useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
height:35vh;
`

const Result = () => {

    const [src, setSrc] = useState('');

    const { html, css, js } = useContext(DataContext);

    const sourceCode = `
<html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>  
</html>
`
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(sourceCode);
        }, 2000)
        return () => clearTimeout(timeout)
    }, [html, css, js])

    return (
        <Container>
            <iframe srcDoc={src} src="" title='Output' frameborder="0" sandbox="allow-scripts" width="100%" height="100%"></iframe>
        </Container>
    )
}

export default Result;