import { CommentSubmit } from "./CommentSubmit"
import { useState } from "react"

export const CommentForm = () =>{
    const [comment, setComment] = useState("")
    return(
        <>
           <section id="postCommentContainer" className="comment-write-container">
                <textarea id="commentContentEnter" placeholder="댓글을 남겨주세요!" onChange={(event)=>{setComment(event.target.value)}}></textarea>
                {<CommentSubmit commentValue={comment}/>}
            </section>  
        </>
    )
}