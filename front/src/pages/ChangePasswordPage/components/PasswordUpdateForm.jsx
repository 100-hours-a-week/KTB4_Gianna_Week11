import {requestCsrfAPIJsonResponse} from '../../../api/csrf'
export const PasswordUpdateForm= ({pwdHelperText, confirmPwdHelperText, onPasswordChange, onConfirmPwdChange})=>{

    return(
        <>
            <h5 id="password-input-">비밀번호</h5>
            <input type="password" id="passwordInput" placeholder="비밀번호를 입력하세요" onChange={(event)=>{onPasswordChange(event.target.value)}}></input>
            <p className="helper-text" id="pwdHelperText">{pwdHelperText}</p>

            <h5>비밀번호 확인</h5>
            <input type="password" id="passwordInputCheck" placeholder="비밀번호를 한번 더 입력하세요" onChange={(event)=>{onConfirmPwdChange(event.target.value)}}></input>
            <p className="helper-text" id="pwdCheckHelperText">{confirmPwdHelperText}</p>
        </>    
)
}