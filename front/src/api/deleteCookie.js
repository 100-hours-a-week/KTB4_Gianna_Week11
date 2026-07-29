import { requestCsrfAPIJsonResponse } from "./csrf.js";

export const deleteCookie = async () =>{

    const csrf = await requestCsrfAPIJsonResponse();

    const response = await fetch("/deleteCookie", {
        method: "POST",
        credentials: "include",
        headers: {
            [csrf.headerName]: csrf.token
        }
    });

    if (!response.ok) {
        throw new Error(`로그아웃 실패: ${response.status}`);
    }

    return response.status;
};