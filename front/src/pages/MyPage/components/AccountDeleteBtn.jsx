import { requestCsrfAPIJsonResponse } from "../../../api/csrf";
import { deleteCookie } from "../../../api/deleteCookie";
import { useNavigate } from "react-router-dom";
export const AccountDeleteBtn = ({userId}) =>{
    const navigate = useNavigate();
    async function handleDelete(){
        const csrf = await requestCsrfAPIJsonResponse();
        
        if(window.confirm('회원탈퇴 하시겠습니까?')){
                try{
                    const response = await fetch(`/users/${userId}`, {
                        method: 'DELETE',
                        credentials:"include",
                        headers: {
                            'Content-Type': 'application/json',
                            [csrf.headerName] : csrf.token
        
                        }, 
                    });
        
                    if (!response.ok) {
                        throw new Error('닉네임 수정 실패');
                    }
        
        
                    const status = await deleteCookie();
                    if(status === 204) navigate('/')
                } catch(error){
                    console.error('오류 발생:', error);
                }
            }
    }
    return(
        <>
            <button id="deleteBtn" onClick={handleDelete}>회원 탈퇴</button>
        </>
    )
}