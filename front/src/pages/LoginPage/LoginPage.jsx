import "./LoginPage.css"
import { emailHelperTextMaker, pwdHelperTextMaker } from "../../utils/helperTextMaker.js";
import { LoginForm } from "./components/LoginForm.jsx";
import { use, useState } from "react";

export const LoginPage = ()=>{
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [emailHelperText, setEmailHelperText] = useState(null);
    const [pwdHelperText, setPwdHelperText] = useState(null);
    
    function handleEmailChange(input){
        const helperText = emailHelperTextMaker(input);
        setEmail(input);
        setEmailHelperText(helperText);
    }

    function handlePwdChange(input){
        const helperText = pwdHelperTextMaker(input);
        setPwdHelperText(helperText);
        setPassword(input);
    }

    function checkLoginStatus(){
        if(email && emailHelperText.length === 0
            && password && pwdHelperText.length === 0
        ){
            return true;
        } else{
            return false;
        }
    }
    
    const isLoginEnabled = checkLoginStatus();

    return (
        <div>
            <main className="login-page">
                <section className="login-container">
                    <h2>로그인</h2>
                    {<LoginForm 
                    onEmailChange={handleEmailChange} 
                    onPasswordChange={handlePwdChange} 
                    emailHelperText={emailHelperText} 
                    pwdHelperText={pwdHelperText}
                    isLoginEnabled={isLoginEnabled}/>}
                    <a className="signup-link" href={"/signup"}>회원가입</a>
                </section> 
            </main>
        </div>
    );
}