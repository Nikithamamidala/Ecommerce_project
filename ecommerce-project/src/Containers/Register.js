import { useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import { register } from "../UserSlice";
function Register(){
    var appState=useSelector(appState=>appState);
    console.log("appState",appState);
    if(appState.isUserLoggedIn.value!="notLoggedIn"){
        appState.isUserLoggedIn.then(data=>{
            console.log("data",data);
            console.log(data.value);
            appState.isUserLoggedIn.value=data.value
        });
    }
    const dispatch=useDispatch();
   const[form,setForm]= useState({
        username:'',
        passward:'',
        email:'',
        role:"customer"
    })
    const updateState=(event)=>{
    var name= event.target.name;
    var value=event.target.value;
    setForm({...form,[name]:value});
    }
    const registerUser=(event)=>{
        event.preventDefault();
        console.log(form);
        dispatch(register(form));
        

    }
    return(
        <>
        <h1 style={{textAlign:"center"}}>REGISTER</h1>
        <form style={{textAlign:"center"}}>
            <input onChange={updateState} type="text" name="username" placeholder="username"></input><br></br>
            <input onChange={updateState} type="text" name="password" placeholder="password"></input><br></br>
            <input onChange={updateState} type="text" name="email" placeholder="email"></input><br></br>
            <button onClick={registerUser}>Register</button>
        </form>
        </>
    )
}
export default Register;