import './MyPage.css'
import { Header } from '../../components/Header/Header'
import { ProfileUpdateForm } from './components/ProfileUpdateForm'
import { useState, useEffect } from "react"
import { getUserId, getUser } from "../../module/module"

export const MyPage = () =>{
    const [user, setUser] = useState(null);
    const [nickname, setNickname] = useState("");


    useEffect(()=>{
        async function handleGetUser() {
            const userId = await getUserId();
            const getUserResponse = await getUser(userId);
            setUser(getUserResponse)
            setNickname(getUserResponse.nickname)
        }
        

        handleGetUser();

    }, [])
    return(
        <>
            <div id="headerContainer">{<Header/>}</div>
    
            <main className="mypage-update-page">
                <h1>회원정보수정</h1>
                {<ProfileUpdateForm email={user?.email || ""} userId={user?.userId || ""    } nickname={nickname} onNicknameChange={setNickname}/>}
            </main>
        </>
    )
}