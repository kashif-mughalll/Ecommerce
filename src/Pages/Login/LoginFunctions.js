import {auth,googleAuthProvider} from '../../Firebase/Firebase';



export var LoginWithEmailPass = async (Email,Password,history)=> {
    try {
        var user = await auth.signInWithEmailAndPassword(Email,Password);
        console.log("Login Succesful");
        history.push("/products");
    } catch (error) {
        console.log(error.message);
    }
}



export var GoogleAuth = async (history) => {
    try {
    var User = await auth.signInWithPopup(googleAuthProvider);
    console.log("login succesfull");
    history.push("/products");
    } catch (error) {
        console.log(error.message);
    }
}



// SignUP Function

export var SignUp = async (Name,Email,Password,history)=>{
    try {
        var user = await auth.createUserWithEmailAndPassword(Email,Password);
        console.log("Account created succesfully");   
        history.push("/products");   
    } catch (error) {        
        console.log(error);
    }
    
}



