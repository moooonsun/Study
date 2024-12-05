
import { useEffect, useState } from 'react';

import { memberlogin, memberList } from '../api/member'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [아이디, 변경아이디] = useState('');
    const [비밀번호, 변경비밀번호] = useState('');
    const [areas, setAreas] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        startList();
    }, []); //page가 처음으로 불러오는 현상 (마운트) 이때만 동작 되게 해달라
    //useMemo(startList(), [startList]);
    //랜더링이 더이상 ( 개발자가 생각한 외에 발생 ) 
    function startList() {
        console.log('ㅎㅇㅎㅇ ');
        memberList()
            .then(res => {
                console.log(res);
                setAreas(res.data.data);

            })
    }
    console.log(areas);

    return (
        <div>
            <h1>로그인</h1>
            <input type='text' placeholder='아이디 입력' value={아이디} onChange={
                e => 변경아이디(e.target.value)
            } /><br/>
            <input type='text' placeholder='비밀번호 입력' value={비밀번호} onChange={
                e => 변경비밀번호(e.target.value)
            } /><br/>
            <input type='button' value='로그인' onClick={
                () => {
                    let obj = new Object();
                    obj.userId = 아이디;
                    obj.userPw = 비밀번호;
                    

                    const check = memberlogin(obj);

                    check.then(res => {
                        if(res.data.data === 'Y' && res.data.code == '200'){
                            console.log('성공');
                            navigate('/itemList'); //아이템리스트 이동
                            
                        }else{
                            변경아이디('');
                            변경비밀번호('');
                            
                            console.log('실패');
                        }
                   
                    })

                    check.catch(err => {
                        console.log(err);
                    });
                }
            } />
            <input type='button' value='회원가입' onClick={
                () => {
                    navigate('/pro1');
                }
            }/>
            
        </div>
    );
}

