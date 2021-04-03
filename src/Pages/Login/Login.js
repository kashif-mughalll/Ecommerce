import './Login.css';
import {useState} from 'react';
import {GoogleAuth,SignUp,LoginWithEmailPass} from './LoginFunctions';
import { useHistory } from 'react-router-dom';



var Login = ()=> {
  const history = useHistory();
  var [Toggle,setToggle] = useState(true);
  var [FullName,setFullName] = useState("");
  var [Email,setEmail] = useState("");
  var [Password,setPassword] = useState("");


  return (
    <div className={"LoginContainer"}>
      <div>
      {
        Toggle ? 
        
        <div className={"flex"} id={"FirstDiv"}>
          <p id="sub_heading">Sign In</p>
          <input onChange={(e)=> setEmail(e.target.value)} id="EmailBar" className={"inputbarstyle"} type="text" placeholder="Enter email address"/>
          <input onChange={(e)=> setPassword(e.target.value)} id="PasswordBar" className={"inputbarstyle"} type="password" placeholder="Enter Password"/>
          <div className="flex1">
          <button onClick={()=> LoginWithEmailPass(Email,Password,history)} className="loginbtn">Log In</button>
          <button className={"loginbtn"} onClick = {()=> setToggle(!Toggle)} > {Toggle ? "Sign Up" : "Sign in"}</button>
          </div>
          <p id="paragraph_style">Or sign in with social media networks</p>
          <div className={"flex1"}>
            <button onClick={()=> GoogleAuth(history)} className={"circlebtnstyle"}> G+ </button>
            <button className={"circlebtnstyle"}> f  </button>
            <button className={"circlebtnstyle"}> Ln </button>
          </div> 
        </div>

      : 

      <div className={"flex fadeout"} id="thirddiv">
      <p id="sub_heading">Create New Account</p>
          <input onChange={(e)=> setFullName(e.target.value)} className={"inputbarstyle"} type="text" placeholder="Enter full name"/>
          <input onChange={(e)=> setEmail(e.target.value)} className={"inputbarstyle"} type="text" placeholder="Enter email address"/>
          <input onChange={(e)=> setPassword(e.target.value)} className={"inputbarstyle"} type="password" placeholder="Enter Password"/>
          <div className="flex1">
          <button onClick={()=> SignUp(FullName,Email,Password,history)} className="loginbtn">Sign Up</button>
          <button className={"loginbtn"} onClick = {()=> setToggle(!Toggle)} > {Toggle ? "Sign Up" : "Sign in"}</button>
          </div>
          <p id="paragraph_style">Or sign in with social media networks</p>
          <div className={"flex1"}>
            <button onClick={()=> GoogleAuth(history)} className={"circlebtnstyle"}> G+ </button>
            <button className={"circlebtnstyle"}> f  </button>
            <button className={"circlebtnstyle"}> Ln </button>
          </div> 
      </div>
    
      }
      </div>
            
    </div>
  );
}

export default Login;

