export const checkValidateData = (email,password) =>{
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/.test(email);

    const isPassWordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid){
        return "Email is not Valid!";
    }
    if(!isPassWordValid){
        return "Password is not Valid!"
    }

    return null;

}