import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Calc1 from './comp/calc/study01';

import Inp1 from './comp/inp/input01';
import Oup1 from './comp/inp/output01';
import Join from './comp/join/join';
import Page from './comp/join/mypage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <About/>
      <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/about"} element={<About />}/>
      <Route path={"/cal1"} element={<Calc1 />}/>
      <Route path={"/inp1"} element={<Inp1 />}/>
      <Route path={"/oup1"} element={<Oup1 />}/>
      <Route path={"/join"} element={<Join />}/>
      <Route path={"/mypage"} element={<Page />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
function Home(){
  return(
    <div>
      <h1>Start Home</h1>
      <Link to="/about"> About로 이동</Link><br/>
      <Link to="/cal1"> Calc로 이동</Link>

      <h4>데이터 옮기기</h4>
      <Link to="/inp1">데이터 입력</Link><br/>
      <Link to="/oup1">데이터 출력</Link>

      <h4>회원가입</h4>
      <Link to="/join">회원가입</Link><br/>
      <Link to="/mypage">마이페이지</Link><br/>

    </div>
  )
}
function About(){
  return(
    <div style={{border: '2px solid blue'}}>

      <Link to="/"> Home로 이동</Link>
    </div>
  )
}
export default App;
