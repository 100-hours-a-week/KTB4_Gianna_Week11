export const pfpHelperTextMaker = (profilePicture) =>{
    if(!profilePicture || profilePicture.length === 0 ){
        return "*프로필 사진을 추가해주세요"
    }
    return ""
}


export const emailHelperTextMaker = (email)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.length === 0){
        return "*이메일을 입력해주세요.";
    } else if (!emailRegex.test(email)){
        return "*올바른 이메일 주소 형식을 입력해주세요. (예: example@adapterz.kr)";
    }
    //이메일 중복 기능 구현 필요 

    return "";
}

export const pwdHelperTextMaker = (password, confirmPassword ="")=>{
    const passwordRegex =  /^(?=\S{8,20}$)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])\S+$/;
    if(!password && password.length === 0){
        return "*비밀번호를 입력해주세요.";
    } else if(!passwordRegex.test(password)){
        return "비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다.";
    } else if(confirmPassword.length > 0 && password !== confirmPassword){
        return "*비밀번호가 다릅니다"
    }
    return "";
}

export const confirmPwdHelperTextMaker = (password, confirmPassword) =>{
    if(!confirmPassword && confirmPassword.length === 0 ){
        return "*비밀번호를 한 번 더 입력해주세요."
    } else if(confirmPassword !== password){
        return "*비밀번호가 다릅니다"
    }
    return "";
}

export const nicknameHelperTextMaker = (nickname) =>{
    if(nickname.length === 0){
        return "*닉네임을 입력해주세요."
    } else if(nickname.length > 10){
        return "*닉네임은 최대 10자까지 작성 가능합니다."
    } else if(nickname.includes(" ")){
        return "*띄어쓰기를 없애주세요."
    }
    //닉네임 중복 기능 구현 필요
    return ""
}