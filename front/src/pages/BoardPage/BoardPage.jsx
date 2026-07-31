import './BoardPage.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react';
import { requestCsrfAPIJsonResponse } from '../../api/csrf.js';
import { PostItem } from './components/PostItem.jsx';
import { Header } from '../../components/Header/Header.jsx'
export const BoardPage = () =>{
    const navigate = useNavigate();
    const [postItems, setPostItems] = useState([]);
    
    useEffect(()=>{
        async function getPostList(){
        const csrf = await requestCsrfAPIJsonResponse();
        try{
        const response = await fetch('/posts', {
            method: 'GET',
            credentials:"include",
            headers: {
                [csrf.headerName] : csrf.token    
            }      
        });

        if (!response.ok) {
            throw new Error('게시물 목록 조회 실패');
        }

        const data = await response.json();
        const postList = data?.data?.postList || [];
        setPostItems(postList)
    } catch(error){
        console.error('오류 발생:', error);
    }
}
    getPostList();
    },[])

    return(
        <>
            <div id="headerContainer"> {<Header/>} </div>
            <main className="board-page">
                <section className="board-intro">
                    <h1>온전한 '나의 취향'을 <br/>만들어가는 공간. <br/></h1>
                    <button className="write-post-link" type="button" onClick={()=>{navigate('/post/write')}}>게시글 작성</button>
                </section>
                
                <section id="post-list-container" className="post-list-container">
                    {postItems.map((post)=>{
                        return <PostItem
                        key={post.id}
                        post={post}
                        />
                })}</section>
            </main> 
        </>
    )
}