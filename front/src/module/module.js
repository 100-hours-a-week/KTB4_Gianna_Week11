
export const getUserId = () =>{
    const documentCookies = document.cookie.split(';');
    const userIdCookie = documentCookies.find(cookie=>cookie.trim().startsWith('userId='));
    if(!userIdCookie){
        return null;
    }

    const [, value] = userIdCookie.split("=");
    const userId = Number(value.trim());
    return Number.isInteger(userId) && userId > 0 ? userId : null;
};

import { requestCsrfAPIJsonResponse } from "../api/csrf.js";
export const getUser = async(userId) =>{
    const csrf = await requestCsrfAPIJsonResponse();
    try{
        const response = await fetch(`/users/${userId}`, {
            method: 'GET',
            credentials:"include", 
            headers:{
                [csrf.headerName] : csrf.token                
            }   
        });

        if (!response.ok) {
            console.error('오류 발생 : 사용자 정보 조회 실패', response.status);
            return response;
        }else{ 
            const data = await response.json();
            return data.data;
        }
       
    }catch(error){
        console.error('오류 발생:', error);
    }
} 


export const formalizeDate = (datetime) =>{
    const [date, time] = datetime.split("T");
    const [hourMinSec, milliSec] = time.split(".");
    return `${date} ${hourMinSec}`;
}

const formalizeLikeViewComments = (value)=>{
    if(value < 1000){ 
        return value;
    }else{
        return `${Math.floor(value/1000)}k`
    }

}
