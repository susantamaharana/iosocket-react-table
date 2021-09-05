import React, { useState, useEffect } from "react";
import DataGrid from './dataGrid';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";
const Callput = () => {
    const [response, setResponse] = useState([]);
    useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
        socket.on("rrbf", data => {
        setResponse((response) => [...response, data])
        });
    }, []);

    return (
       <DataGrid data={response} />
   );
}
 
export default Callput;