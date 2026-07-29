import { useNavigate } from "react-router-dom";
export const SignupSubmit = ({isSignupEnable, nickname, email, password, profilePicture}) =>{
    const navigate = useNavigate();

    async function signUpProcess(){
        try {
            const response = await fetch('/users/signup', {
                method: 'POST',
                credentials:"include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    nickname: nickname,
                    profilePicture: profilePicture
                })
            });
            if (!response.ok) {
                throw new Error('회원가입 실패');
            }
            console.log('회원가입 성공');
            navigate('/login');
        } catch(error){
            console.error('회원가입 중 오류 발생:', error);
        }   
    }
    return(
        <>
            <button id="signupBtn" type="button" disabled={!isSignupEnable} onClick={() =>{if(isSignupEnable) signUpProcess()}}>회원가입</button>
        </>
    )
}