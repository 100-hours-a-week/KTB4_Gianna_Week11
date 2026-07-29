import './Main.css';
import { useNavigate } from 'react-router-dom';
export const Main = () =>{
    const navigate = useNavigate();

    return(
        <div className="landing-page-div">
            <h2 id="mainpageTitle">Raffiné</h2>
            <h3 id="mainpageSubTitle"> 좋아하는 것을 쓰다.<br/> 좋아하는 것이 되다.</h3>
            <h5 id="mainpageDesc">일상부터 책, 음악, 영화, 뉴스까지. <br/> 기록을 쌓을 수록 선명해지는 취향을 느껴보세요.</h5>
            <button id="gotoSignupBtn" onClick={() =>{navigate('/signup')}}></button>
            <button id="gotoLoginBtn" onClick={()=>{navigate("/login")}}></button>
        </div>
        
    )
}