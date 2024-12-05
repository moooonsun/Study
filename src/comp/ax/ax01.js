import axios  from "axios"
import { useRef, useState } from "react";

export default function Ax1(){



    const [지역, 변경지역] = useState([]);

    const text = useRef(); // 변수를 가상 dom에만 저장 하고, 랜더 현상을 일으키지 않는다.


    const text2 = useRef();


    function axios01(){
        console.log('=== axios get 방식');

        axios.get('http://localhost:8080/api/area/list')
        .then(res => {
            console.log(res);
            if(res.data.code === '200'){
                변경지역(res.data.data);
            }
        })

    }

    function axios02() {
        // document.getElementById('aaa') == text.current
        console.log(text.current.value);
        
        const obj = {
            id: '1'
        }

        console.log(obj);

        
        axios.get('http://localhost:8080/api/area/byId', {params: {
            id: '1'
        }})
        .then(res => {
        console.log(res);
        
        })
    
    }

    function axios03() {

        axios.post('http://localhost:8080/api/member/list')
        .then(res => {
            console.log(res);
        })

    }

    function axios04() {

        const obj = {
            "id": text2.current.value
        }
        axios.post('http://localhost:8080/api/member/findId', JSON.stringify(obj)
        , {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then(res => {
            console.log(res);
        })
    }


    return(
        <div>
            <h1>Axios 연습</h1>
            <input type="button" value='get방식'onClick={axios01}/>
            <input type="text" ref={text}/>
            <input type="button" value= 'get방식 2' onClick={axios02}/>

            <h4>Post 방식</h4>

            {/* Tomcat은 get과 post만 사용한다. */}


            <input type="button" onClick={axios03} value='post 방식' /><br/>
            <input type="text" ref={text2}/>
            <input type="button" onClick={axios04} value='post 방식 2' /><br/>
        </div>
    )
}