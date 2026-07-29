import { useState } from "react";
import { requestCsrfAPIJsonResponse } from "../../../api/csrf";
import { getUserId } from "../../../module/module";
import { useNavigate } from "react-router-dom";
export const PasswordUpdateSubmit = ({password, onUpdate, isSubmitEnable}) =>{
    const navigate = useNavigate();
    async function handleUpdate(){
        const csrf = await requestCsrfAPIJsonResponse();
        const userId = await getUserId();
        try{
        const response = await fetch(`/users/${userId}/password`, {
            method: 'PATCH',
            credentials:"include",
            headers: {
                'Content-Type': 'application/json',
                [csrf.headerName] : csrf.token

            },
            body: JSON.stringify({
                password: password,
            })
        });

        if (!response.ok) {
            throw new Error('비밀번호 업데이트 실패');
        }else{
            onUpdate(true);
            setTimeout(()=>{
                navigate('/board')
            }, 5000)
        }
    }catch(error){
        console.error('비밀번호 변경 중 오류 발생:', error);
    }
    }
    return(
        <>
            <button id="updatePwdBtn" onClick={handleUpdate} disabled={!isSubmitEnable}>수정하기</button>
        </>
    )
}