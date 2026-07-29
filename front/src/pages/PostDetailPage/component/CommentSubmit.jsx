import { requestCsrfAPIJsonResponse } from "../../../api/csrf";
import { getPostIdFromURL, getUserId  } from "../../../module/module";
export const CommentSubmit = ({commentValue}) =>{
    const postId = getPostIdFromURL();

    async function handleCommentSubmit(){
        const csrf = await requestCsrfAPIJsonResponse();
        const userId = await getUserId();

        try{
            const response = await fetch(`/posts/${postId}/comments/${userId}`, {
                method: 'POST',
                credentials:"include",
                headers: {
                    "Content-Type": "application/json",
                    [csrf.headerName] : csrf.token
                },
                body: JSON.stringify({
                    content: commentValue
                })
            });

            if (!response.ok) {
                throw new Error('댓글 작성 실패');
            }

            const data = await response.json();
            location.reload();
        }catch(error){
            console.error('댓글 작성 중 오류 발생:', error);
        }
    }
    return (
        <>
            <button id="postCommentBtn" onClick={() => {handleCommentSubmit()}}>댓글 등록</button>
        </>
    )
}