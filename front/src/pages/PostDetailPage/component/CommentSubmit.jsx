import { requestCsrfAPIJsonResponse } from "../../../api/csrf";
import { getUserId  } from "../../../module/module";
import { useParams } from "react-router-dom";
export const CommentSubmit = ({commentValue, isEdit, setIsEdit, commentId, setEditCommentId}) =>{
    const postId = useParams()?.postId;

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

            location.reload();
        }catch(error){
            console.error('댓글 작성 중 오류 발생:', error);
        }
    }

    async function handleCommentEdit(){
        const csrf = await requestCsrfAPIJsonResponse();

        try{
        const response = await fetch(`/posts/${postId}/comments/${commentId}`, {
            method: 'PATCH',
            credentials:"include",
            headers: {
                "Content-Type": "application/json",
                [csrf.headerName] : csrf.token
            },
            body: JSON.stringify({
                content: commentValue,
            })
        });

        if (!response.ok) {
            throw new Error('댓글 수정 실패');
        }

        setEditCommentId(0)
        location.reload();
    }catch(error){
        console.error('댓글 작성 중 오류 발생:', error);
    }
    }

    function getBtnName(){ 
        if(commentValue.length === 0) {
            { () => setEditCommentId(0) }
            return "댓글 등록";
        }else{
            return isEdit ? "댓글 수정" : "댓글 등록";
        }
        return "오류...";
    }
    const btnName =  getBtnName();

    return (
        <>
            <button id="postCommentBtn" onClick={isEdit ? handleCommentEdit : handleCommentSubmit}> { btnName } </button>
        </>
    )
}