
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Join() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [gender, setGender] = useState('');
  const [hobby, setHobby] = useState([]);
  const year = new Date().getFullYear();
  const [birth, setBirth] = useState(year);
  const navigate = useNavigate('');
  const years = Array.from({ length: 101 }, (_, i) => year - i);
  const handleChange = (e) => {
    setBirth(e.target.value);
  };
  function handleHobby(e) {
    
    //이미 체크가 되어있을 경우
    if(hobby.includes(e.target.value)) {
      //2. 1번에서 제외된 리스트를 다시 hobby에 저장.
      setHobby(
        //1. 체크된 결과값과 똑같은 값은 제외 처리
        hobby.filter(item => item !== e.target.value)
      )
    }
    //체크가 안 되어 있을 경우
    else {
      //마지막에 입력된 값을 추가 한다.
      setHobby([...hobby, e.target.value]);
    }
  }
  return (
    <div className="App">
      <h1>회원가입</h1>
      <input type='text' placeholder='아이디 입력' value={id} onChange={e => {
        setId(e.target.value)
      }} /><br />
      <input type='text' placeholder='비밀번호 입력' value={pw} onChange={e => {
        setPw(e.target.value)
      }} /><br />
      남자<input type='radio' name='gender' value='남자' onChange={e => {
        setGender(e.target.value);
      }} />
      여자<input type='radio' name='gender' value='여자' onChange={e => {
        setGender(e.target.value);
      }} /><br />
      운동<input type='checkbox' value='운동' onChange={e => {
        handleHobby(e)
      }} />
      게임<input type='checkbox' value='게임' onChange={e => {
        handleHobby(e)
      }} />
      영화<input type='checkbox' value='영화' onChange={e => {
        handleHobby(e)
      }} /><br/>
      
      <select value={birth} onChange={handleChange}>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>

      <br/>
      <input
        type="button"
        value="회원 가입"
        onClick={
          () => {
            const data ={
                id: id,
                pw: pw,
                gender: gender,
                hobby: hobby,
                birth: birth
            }
            localStorage.setItem('user', JSON.stringify(data)); // JSON으로 저장
            navigate('/mypage');
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            const radios = document.querySelectorAll('input[type="radio"]')
            console.log(`id: ${id}`);
            console.log(`pw: ${pw}`);
            console.log(`gender: ${gender}`);
            console.log(`hobby: ${hobby}`);
            console.log(`birth: ${birth}`);
            checkboxes.forEach((checkbox) => (checkbox.checked = false));
            radios.forEach((radio) => (radio.checked = false));
            setId('');
            setPw('');
            setGender(''); 
            setHobby([]); 
            setBirth(year);

          }
        }
      ></input>
    </div>
  );
}

