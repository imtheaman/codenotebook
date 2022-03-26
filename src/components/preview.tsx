import "./preview.css";
import { useRef, useEffect } from "react";

interface PreviewProps {
  code: string;
  err: string;
}

const html = `
    <html>
    <head>
    <style>
    {background-color: white;}
    </style>
    </head>
    <body>
    <div id='root'></div>
    <script>
        const handlerError = (err) => {
            const root = document.querySelector('#root');
            root.innerHTML = '<div>
        }
    </script>
    </html>
`;
