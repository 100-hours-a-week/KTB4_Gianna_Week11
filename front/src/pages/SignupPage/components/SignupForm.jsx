export const SignupForm = ({onNicknameChange, nicknameHelperText, onEmailChange, emailHelperText, 
    onPasswordChange, pwdHelperText, onConfirmPasswordChange, confirmPwdHelperText, onProfilePictureChange, pfpHelperText }) =>{
    return (
        <>
            <div class="profile-field">
                <label for="profilePicture">프로필 사진</label>
                    <p id="pfpHelperText" class="helper-text profile-helper">{pfpHelperText}</p>
                    <label class="profile-upload" for="profilePicture">
                    <span>+</span>
                </label>
                <input id="profilePicture" type="file" accept="image/png, image/jpeg" onChange={(event)=>{onProfilePictureChange(event.target.value)}}/>
            </div>

            <label for="email">이메일*</label>
            <input id="email" class="email-label" type="text" placeholder="이메일을 입력하세요" onChange={(event)=>{onEmailChange(event.target.value)}}/>
            <p id="emailHelperText" class="helper-text">{emailHelperText}</p>

            <label for="password">비밀번호*</label>
            <input id="password" class="pwd-label" type="password" placeholder="비밀번호를 입력하세요" onChange={(event)=>{onPasswordChange(event.target.value)}}/>
            <p id="pwdHelperText" class="helper-text">{pwdHelperText}</p>

            <label for="confirm-password">비밀번호 확인*</label>
            <input id="confirmPassword" type="password" placeholder="비밀번호를 한번 더 입력하세요" onChange={(event)=>{onConfirmPasswordChange(event.target.value)}}/>
            <p id="confirmPwdHelperText" class="helper-text">{confirmPwdHelperText}</p>

                <label for="nickname">닉네임*</label>
                <input id="nickname" type="text" placeholder="닉네임을 입력하세요" onChange={(event)=> {onNicknameChange(event.target.value)}}/>
                <p id="nicknameHelperText" class="helper-text">{nicknameHelperText}</p>
        </>
    )
}