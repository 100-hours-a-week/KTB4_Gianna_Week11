import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { requestCsrfAPIJsonResponse } from "../../../api/csrf";
export const PostEditSubmit = ({isPostEnable, title, content, file}) =>{
    const navigate = useNavigate();
    const postId = useParams()?.postId;

    async function handleSubmitPost(){
        const csrf = await requestCsrfAPIJsonResponse();
        
        try{
            const response = await fetch(`/posts/${postId}`, {
                method: 'PATCH',
                credentials:"include",
                headers: {
                    'Content-Type': 'application/json',
                    [csrf.headerName] : csrf.token
        
                },
                body: JSON.stringify({
                    title : title,
                    content : content,
                    file : file 
                })
            });
        
            if (response.status === 401) {
                navigate("/login")
            }
        
            if (!response.ok) {
                throw new Error('게시글 작성 실패');
            }
        
            const data = await response.json();
            navigate('/board');
        }catch(error){
            console.error('오류 발생:', error);
        }
    }
    return (
        <>
            <button id="postWriteBtn" type="button" disabled={!isPostEnable} onClick={handleSubmitPost}>완료</button>
        </>
    )
}