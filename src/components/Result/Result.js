import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../../context/DataProvider';


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
    }, [sourceCode])

    return (
        <div className='container-result'>
            <iframe
                srcDoc={src}
                src="" title='Output'
                frameBorder="0"
                sandbox="allow-scripts"
                width="100%"
                height="100%"
            ></iframe>
        </div>
    )
}

export default Result;