import { useEffect, useState } from "react"
export default function OutputStudy() {
    const[메세지, 변경메세지] = useState('');
    function start() {

       const data =  localStorage.getItem('study');//key
       if(data !== '' && data !== 'null'){
        변경메세지(data);
       }
    }
    useEffect(() => {
        start();
    }, []
    )
    return (
        <div>
            <h1>OutputStudy</h1>
            {메세지}
        </div>
    )
}