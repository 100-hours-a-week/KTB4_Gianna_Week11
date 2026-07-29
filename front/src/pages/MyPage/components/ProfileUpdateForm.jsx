import { AccountDeleteBtn } from "./AccountDeleteBtn"
import { requestCsrfAPIJsonResponse } from "../../../api/csrf";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const ProfileUpdateForm = ({email, userId, nickname, onNicknameChange}) =>{
    const [showToast, setShowToast] = useState(false)
    const navigate = useNavigate();
    async function handleNicknameChange(input){
        const csrf = await requestCsrfAPIJsonResponse();
        
        try{
            const response = await fetch(`/users/${userId}/nickname`, {
                method: 'PATCH',
                credentials:"include",
                headers: {
                    'Content-Type': 'application/json',
                    [csrf.headerName] : csrf.token

                },
                body : JSON.stringify({
                    nickname:nickname
                })
                
            });

            if (!response.ok) {
                throw new Error('닉네임 수정 실패');
            } else{
                setShowToast(true);
                setTimeout(()=>{
                    setShowToast(false);
                    navigate('/board')
                }, 5000)
            }
        } catch(error){
            console.error('오류 발생:', error);
        }
    }  
    

    return(
        <>
            <div id="updateContainer" className="mypage-update-container">
                <section className="profile-section">
                    <h5 id="profilePictureLabel">프로필 사진*</h5>
                    <label className="profile-picture-edit" htmlFor="newProfilePicture">
                        <span>변경</span>
                    </label>
                    <input id="newProfilePicture" type="file" accept="image/png, image/jpeg"/>
                </section>

                <section className="profile-form-section">
                    <h5 id="emailLabel">이메일</h5>
                    <input id="emailText" type="text" value={email} disabled ></input>

                    <h6 id="emailDesc"></h6>

                    <h5 id="nickNameLabel">닉네임</h5>
                    <input id="nicknameText" type="text" value={nickname} onChange={(event)=>{onNicknameChange(event.target.value)}}></input>
                    <h6 id="nicknameHelperText"></h6>

                    <button id="updateBtn" onClick={handleNicknameChange}>수정하기</button>
                    {<AccountDeleteBtn userId={userId}/>}
                </section>   

                {showToast && (
                    <h5 className="toastMsg" id="upateSuccessToastMsg">
                        수정완료
                     </h5>
                )}
            </div>
        </>
    )
}