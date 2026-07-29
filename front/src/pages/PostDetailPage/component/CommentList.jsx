import { useEffect, useState } from "react"
import { requestCsrfAPIJsonResponse } from "../../../api/csrf"
import { CommentItem } from "./CommentItem"
export const CommentList = ({postId}) =>{
    const [commentList, setCommentList] = useState([])
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
                    throw new Error('로그인 실패');
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
            {
                commentList.map((comment,idx)=>{
                    return <CommentItem 
                    key={comment.id}
                    comment={comment}/>
                })
            }
        </>
    )
}