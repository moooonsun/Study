
import { useEffect,  useState } from 'react';
import { areaList, memberIdCheck, memberRegist } from '../api/member'

export default function Join() {
  const [아이디, 변경아이디] = useState(''); // 아이디 입력
  const [password, setPassowrd] = useState('')//비밀번호 입력
  const [name, setName] = useState('')//이름 입력
  const [email, setEamil] = useState('');//이메일 입력
  const [gender, setGender] = useState('M');//성별 체크
  const [birth, setBirth] = useState('');//생일 입력
  const [areas, setAreas] = useState([]);//지역 리스트
  const [area, setArea] =useState(0); //지역 번호
  useEffect(() => {
    startList();
  }, []); //page가 처음으로 불러오는 현상 (마운트) 이때만 동작 되게 해달라
  //useMemo(startList(), [startList]);
  //랜더링이 더이상 ( 개발자가 생각한 외에 발생 ) 
  function startList() {
    console.log('ㅎㅇㅎㅇ ');
    areaList()
      .then(res => {
        console.log(res);
        setAreas(res.data.data);// select 지역리스트 추가
        setArea(res.data.data[0].idx); //지역코드 기본값 (첫번째 idx)
      })
  }
  /**
   * 회원가입 시 동작 되도록!
   */
  function JoinAction(){
    //유효성검사
    const obj ={
      'userId': 아이디,
      'userPw': password,
      'userName':name,
      'email': email,
      'birth': birth,
      'gender': gender,
      'areaIdx':area
    }
    console.log(obj);
    memberRegist(obj)
    .then(res =>{
      console.log(res)
    })
    .catch(err =>{
      console.log(err);
    })
  }
  console.log(areas);
  return (
    <div>
      <input type='text' placeholder='아이디 입력' value={아이디} onChange={
        e => 변경아이디(e.target.value)
      } />
      <input type='button' value='중복 체크' onClick={
        () => {
          let obj = new Object();
          obj.id = 아이디;

          const check = memberIdCheck(obj);

          check.then(res => {
            console.log('성공');
            console.log(res);
          })

          check.catch(err => {
            console.log(err);
          });
        }
      } /><br />
      <input type="password" placeholder="비밀번호 입력" value={password} onChange={
        e => setPassowrd(e.target.value)
      } /><br />
      <input type="text" placeholder="이름 입력" value={name} onChange={
        e => setName(e.target.value)
      } /><br />
      <input type="email" placeholder="이메일 입력" value={email} onChange={
        e => setEamil(e.target.value)
      } /><br />
      <input type="radio" name='gender' value='M' checked onChange={
        e => setGender(e.target.value)
      } />남자<br />
      <input type="radio" name='gender' value='F' onChange={
        e => setGender(e.target.value)
      } />여자<br />
      <input type='date' value={birth} onChange={
        e => setBirth(e.target.value)
      } /><br />
      지역코드
      <select onChange={
        e=>setArea(e.target.value)
      }>
        {areas.map((item, index) => (
          <option key={index} value={item.idx}>
            {item.areaName}
          </option>
        ))}
      </select>
      <input type='button' value="회원가입" onClick={JoinAction} />
    </div>
  );
}

