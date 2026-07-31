import { getUserId } from "../../../module/module";
import { useNavigate } from "react-router-dom";
import { requestCsrfAPIJsonResponse } from "../../../api/csrf";

const defaultPostImages = [
    "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1458560871784-56d23406c091?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
];

export const PostWriteSubmit = ({isPostEnable, title, content, file}) =>{
    const navigate = useNavigate();

    async function handleSubmitPost(){
        const csrf = await requestCsrfAPIJsonResponse();
        const userId = await getUserId();
        const randomThumbNailIdx = Math.floor(Math.random() * 100 % defaultPostImages.length);
        try{
            const response = await fetch(`/posts/${userId}`, {
                method: 'POST',
                credentials:"include",
                headers: {
                    'Content-Type': 'application/json',
                    [csrf.headerName] : csrf.token
        
                },
                body: JSON.stringify({
                    title : title,
                    content : content,
                    date : new Date(),
                    file : file.length === 0 ? defaultPostImages[randomThumbNailIdx] : file
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