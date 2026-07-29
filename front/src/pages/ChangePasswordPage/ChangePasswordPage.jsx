import './ChangePasswordPage.css'
import { useState } from 'react'
import { PasswordUpdateForm } from './components/PasswordUpdateForm'
import { PasswordUpdateSubmit } from './components/PasswordUpdateSubmit'
import { pwdHelperTextMaker, confirmPwdHelperTextMaker } from '../../utils/helperTextMaker'
import { Header } from '../../components/Header/Header'

export const ChangePasswordPage = ()=>{
    const [password, setPassword] = useState("")
    const [confirmPwd, setConfirmPwd] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [pwdHelperText, setPwdHelperText]=useState("")
    const [confirmPwdHelperText, setConfirmPwdHelperText] = useState("")
    
    function handlePasswordChange(input) {
        setPassword(input);

        const helperText = pwdHelperTextMaker(input, confirmPwd);
        setPwdHelperText(helperText);

        if (confirmPwd.length > 0) {
            setConfirmPwdHelperText(
                confirmPwdHelperTextMaker(input, confirmPwd)
            );
        }
    }

    function handleConfirmPwdChange(input) {
        setConfirmPwd(input);

        const helperText =
            confirmPwdHelperTextMaker(password, input);

        setConfirmPwdHelperText(helperText);
    }

    const isSubmitEnable =
        password.length > 0 &&
        confirmPwd.length > 0 &&
        pwdHelperText === "" &&
        confirmPwdHelperText === "";
    return(
        <>
            <div id="headerContainer">{<Header/>}</div>
    
            <main className="mypage-password-page">
                <h3>비밀번호 수정</h3>
                <div id="changePwdForm">
                    {<PasswordUpdateForm 
                    pwdHelperText={pwdHelperText}
                    confirmPwdHelperText={confirmPwdHelperText}
                    onPasswordChange = {handlePasswordChange} onConfirmPwdChange={handleConfirmPwdChange}/>}
                    {<PasswordUpdateSubmit password={password} onUpdate={setShowToast} isSubmitEnable={isSubmitEnable}/>}
                
                {showToast && (
                    <h5 className="toastMsg" id="upateSuccessToastMsg" >
                        수정완료
                     </h5>
                )}
                </div>
            </main>
        </>
    )
}