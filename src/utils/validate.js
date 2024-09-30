export const validateForm = (email, password) =>{

    const emailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!emailValid) return "Email is not valid"
    if(!passwordValid) return "Password must contain at least 8 characters, including uppercase letters, lowercase letters, numbers, and special characters"

    return null;
}