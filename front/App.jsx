import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Main } from "./src/Main.jsx";
import { LoginPage } from "./src/pages/LoginPage/LoginPage.jsx";
import { SignupPage } from "./src/pages/SignupPage/SignupPage.jsx";
import { BoardPage } from "./src/pages/BoardPage/BoardPage.jsx";
import { PostWritePage } from "./src/pages/PostWritePage/PostWritePage.jsx";
import { PostDetailPage } from "./src/pages/PostDetailPage/PostDetailPage.jsx";
import { PostEditPage } from "./src/pages/PostEditPage/PostEditPage.jsx";
import { MyPage } from "./src/pages/MyPage/MyPage.jsx";
import { ChangePasswordPage } from "./src/pages/ChangePasswordPage/ChangePasswordPage.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/board" element={<BoardPage/>}/>
        <Route path="/posts/write" element={<PostWritePage/>}/>
        <Route path="/posts/:postId" element={<PostDetailPage/>}/>
        <Route path="/posts/:postId/edit" element={<PostEditPage/>}/>       
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/mypage/password" element={<ChangePasswordPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);