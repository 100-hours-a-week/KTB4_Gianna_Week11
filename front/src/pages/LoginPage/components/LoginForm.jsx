export const LoginForm = ({onEmailChange, onPasswordChange, emailHelperText, pwdHelperText, isLoginEnabled}) =>{

    return(
        <form id="login-form" action="/login-process" method="post">
            <label htmlFor="email">이메일</label>
            <input 
                id="email" 
                className ="email-label" 
                name="email" 
                type="text" 
                placeholder="이메일을 입력하세요" 
                onChange={(event)=>{ onEmailChange(event.target.value) }}/>
            <p id="emailHelperText" className="helper-text">{emailHelperText}</p>

            <label htmlFor="password">비밀번호</label>
            <input 
            id="password" 
            className="pwd-label" 
            name="password" 
            type="password" 
            placeholder="비밀번호를 입력하세요"
            onChange={(event)=>{onPasswordChange(event.target.value)}}/>
            <p id="pwdHelperText" className="helper-text">{pwdHelperText}</p>
            <button id="loginBtn" type="submit" disabled = {!isLoginEnabled}>로그인</button>
        </form>
    );
}