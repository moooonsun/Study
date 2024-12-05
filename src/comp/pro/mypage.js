import { useEffect, useState } from "react"
export default function Mypage() {
    const[id, setId] = useState('');
    const[pw, setPw] = useState('');
    const[gender, setGender] = useState('');
    const[hobby, setHobby] = useState('');
    const[birth, setBirth] = useState('');

    function start() {

       const data =  localStorage.getItem('user');//key
       if(data !== '' && data !== 'null'){
        const userData = JSON.parse(data); 
        setId(userData.id);
        setPw(userData.pw);
        setGender(userData.gender)
        setHobby(userData.hobby)
        setBirth(userData.birth)
       }
    }
    useEffect(() => {
        start();
    }, []
    )
    return (
        <div>
            <h1>mypage</h1>
            <span>id : {id}</span><br/>
            <span>pw : {pw}</span><br/>
            <span>gender : {gender}</span><br/>
            <span>hobby : {hobby}</span><br/>
            <span>birth : {birth}</span>
            

        </div>
    )
}