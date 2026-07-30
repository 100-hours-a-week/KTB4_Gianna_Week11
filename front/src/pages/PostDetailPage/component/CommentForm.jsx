import { CommentSubmit } from "./CommentSubmit"
import { CommentItem } from "./CommentItem"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { requestCsrfAPIJsonResponse } from "../../../api/csrf"
export const CommentForm = () =>{
    const [comment, setComment] = useState("")
    const [commentList, setCommentList] = useState([])
    const [isEdit, setIsEdit] = useState(false);
    const [editCommentId, setEditCommentId] = useState(0);
    const postId = useParams()?.postId;

    useEffect(()=>{ 
            async function getCommentList(){
                const csrf = await requestCsrfAPIJsonResponse();
                
                try{
                    const response = await fetch(`/posts/${postId}/comments`, {
                        method: 'GET',
                        credentials:"include",
                        headers:{
                            [csrf.headerName] : csrf.token
                        }
                    });
    
                    if (!response.ok) {
                        throw new Error('댓글 조회 실패');
                    }
    
                    const data = await response.json();
                    //console.log(data.data)
                    setCommentList(data.data.commentsList);
                }catch(error){
                    console.error('로그인 중 오류 발생:', error);
                }
            }
            getCommentList();
        }, [] )
    return(
        <>
           <section id="postCommentContainer" className="comment-write-container">
                <textarea id="commentContentEnter" placeholder="댓글을 남겨주세요!" value={comment.length===0 ? "" : comment} onChange={(event)=>{setComment(event.target.value)}}></textarea>
                {<CommentSubmit commentValue={comment} isEdit = {isEdit} setIsEdit = {setIsEdit} commentId ={editCommentId} setEditCommentId={setEditCommentId}/>}
            </section>  

            {
                commentList.map((comment,idx)=>{
                    return <CommentItem 
                        key={comment.id}
                        comment={comment}
                        setComment={setComment}
                        onEdit = {setIsEdit}
                        setEditCommentId ={setEditCommentId}/>
                    })
            }
        </>
    )
}