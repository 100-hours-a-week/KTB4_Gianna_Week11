import { getUserId, formalizeDate } from "../../../module/module";
import { requestCsrfAPIJsonResponse } from "../../../api/csrf";
export const CommentItem = ({comment, setComment, onEdit, setEditCommentId}) =>{
    function checkIsAuthor () {
        const userId = getUserId();
        return userId === Number(comment.userId)
    }
    
    const handleDelete = async () => {
        const confirmed = window.confirm("댓글을 삭제하시겠습니까?");
        const csrf = await requestCsrfAPIJsonResponse();

        
        if (!confirmed) {
            return;
        } else if(confirmed){
            try{
                const response = await fetch(`/posts/${comment.postId}/comments/${comment.id}`, {
                    method: 'DELETE',
                    credentials:"include",        
                    headers:{
                        [csrf.headerName] : csrf.token
                    }
                });

                if (!response.ok) {
                    throw new Error('로그인 실패');
                }

                location.reload(); //목록 갱신
            } catch(error){
                console.error('로그인 중 오류 발생:', error);
            }
        }
    };

    const isAuthor = checkIsAuthor();

    return (
        <article className="comment-item">
            <div className="comment-profile" />

            <div className="comment-meta">
                <h5 className="comment-author-text">
                    {comment.author || "익명"}
                </h5>

                <h6 className="comment-date-text">
                    {formalizeDate(comment.createdAt)}
                </h6>
            </div>

            <h6 className="comment-content-text">
                {comment.content}
            </h6>

            {isAuthor && (
                <div className="comment-action-group">
                    <button
                        className="comment-update-button"
                        type="button"
                        onClick={()=>{
                            onEdit(true)
                            setComment(comment.content)
                            setEditCommentId(comment.id)
                        }}
                    >
                        수정
                    </button>

                    <button
                        className="comment-delete-button"
                        type="button"
                        onClick={handleDelete}
                    >
                        삭제
                    </button>
                </div>
            )}
        </article>
    );
};