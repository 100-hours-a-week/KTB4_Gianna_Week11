import "./SignupPage.css"
import { SignupForm } from "./components/SignupForm"
import { SignupSubmit } from "./components/SignupSubmit"
import { useState } from "react"
import { emailHelperTextMaker, pwdHelperTextMaker, confirmPwdHelperTextMaker, nicknameHelperTextMaker,pfpHelperTextMaker } from "../../utils/helperTextMaker"

export const SignupPage = () =>{
    const [nickname, setNickname] = useState("");
    const [nicknameHelperText, setNicknameHelperText] = useState("");
    
    const [email, setEmail] = useState("");
    const [emailHelperText, setEmailHelperText] = useState("");
    
    const [password, setPassword] = useState("");
    const [pwdHelperText, setPwdHelperText] = useState("");
    
    const [confirmPwd, setConfirmPwd] = useState("");
    const [confirmPwdHelperText, setConfirmPwdHelperText] = useState("");
    const [pfpHelperText, setPfpHelperText] = useState("")

    const [profilePicture, setProfilePicture] = useState(null);

    function handleNicknameChange(input){
        const helperText = nicknameHelperTextMaker(input)
        
        setNickname(input);
        setNicknameHelperText(helperText);
    }

    function handleEmailChange(input){
        const helperText = emailHelperTextMaker(input);
        setEmail(input);
        setEmailHelperText(helperText)
    }

    function handlePwdChange(input){
        const helperText = pwdHelperTextMaker(input)
        setPassword(input)
        setPwdHelperText(helperText);
    }
    
    function handleConfirmPwdChange(input){
        const helperText = confirmPwdHelperTextMaker(password, input);
        setConfirmPwd(input)
        setConfirmPwdHelperText(helperText)
    }

    function handleProfilePictureChange(input){
        const helperText = pfpHelperTextMaker(input);
        setProfilePicture(input)
        setPfpHelperText(helperText)
    }

    const isSignupEnable =
    nickname !== "" &&
    email !== "" &&
    password !== "" &&
    confirmPwd !== "" &&
    profilePicture !== "" &&

    nicknameHelperText === "" &&
    emailHelperText === "" &&
    pwdHelperText === "" &&
    confirmPwdHelperText === "" &&
    pfpHelperText === "";

    return(
        <main class="signup-page">
            <section class="signup-container">
                <h2>회원가입</h2>
                <div id="signup-form">
                <SignupForm 
                    onNicknameChange = {handleNicknameChange} 
                    nicknameHelperText ={nicknameHelperText}
                    onEmailChange = {handleEmailChange}
                    emailHelperText={emailHelperText}
                    onPasswordChange={handlePwdChange}
                    pwdHelperText ={pwdHelperText}
                    onConfirmPasswordChange={handleConfirmPwdChange}
                    confirmPwdHelperText ={confirmPwdHelperText}
                    onProfilePictureChange={handleProfilePictureChange}
                    pfpHelperText ={pfpHelperText}
                />
                <SignupSubmit 
                    isSignupEnable={isSignupEnable}
                    nickname={nickname}
                    email={email}
                    password={password}
                    profilePicture={profilePicture}/>
                 </div>
                <a class="login-link" href={"/login"}>로그인하러 가기</a>
            </section>
        </main>
    )
}