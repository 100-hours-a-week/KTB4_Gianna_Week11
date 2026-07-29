import './PostWritePage.css'
import { PostWriteForm } from './components/PostWriteForm';
import { PostWriteSubmit } from './components/PostWriteSubmit';
import { Header } from '../../components/Header/Header';
import { use, useState } from 'react';
export const PostWritePage = () =>{
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState("");

    const isPostEnable = title.length > 0 && content.length > 0;
    return(
        <>
            <div id="headerContainer">{<Header/>}</div>

            <main className="post-write-page">
                <h1 id="postWriteTitle">취향 기록</h1>
                {<PostWriteForm 
                    onTitleChange={setTitle}
                    onContentChange={setContent} 
                    onFileChange={setFile}/>}
                {<PostWriteSubmit 
                    isPostEnable={isPostEnable}
                    title={title} 
                    content={content} 
                    file = {file}/>}
            </main>
        </>
    );
}