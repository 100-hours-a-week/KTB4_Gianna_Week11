import { PostEditForm } from "./components/PostEditForm"
import { PostEditSubmit } from "./components/PostEditSubmit"
import { useState, useEffect } from "react"
import { getPostIdFromURL } from "../../module/module"
import { requestCsrfAPIJsonResponse } from "../../api/csrf"
export const PostEditPage = ()=>{
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState("");

    useEffect(()=>{
        const postId = getPostIdFromURL();
        async function handleGetPost() {
            const csrf = await requestCsrfAPIJsonResponse();
            try{
                const response = await fetch(`http://localhost:8080/posts/${postId}`, {
                    method: 'GET',
                    credentials:"include",
                    headers: {
                        [csrf.headerName] : csrf.token
                    },
                });
            
                if (!response.ok) {
                    throw new Error('게시물 상세 조회 실패');
                }
            
                const data = await response.json();
                setTitle(data.data?.title || "")
                setContent(data.data?.content || "")
                setFile(data.data?.file || "");            
            }catch(error){
                console.error('boardView 오류 발생:', error);
            }   
        }


        handleGetPost();
    }, [])
    const isPostEnable = title.length > 0 && content.length > 0;
    return(
        <>
            <main className="post-write-page">
                <h1 id="postWriteTitle">취향 기록</h1>
                {<PostEditForm 
                    title={title}
                    content={content}
                    file={file}
                    onTitleChange={setTitle}
                    onContentChange={setContent} 
                    onFileChange={setFile}/>}
                {<PostEditSubmit
                    isPostEnable={isPostEnable}
                    title={title} 
                    content={content} 
                    file = {file}/>}
            </main>
        </>
    )
}