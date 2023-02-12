import React, {useState} from 'react';
import './Sign.css';
// import {Link,Outlet} from 'react-router-dom';
import avatar from "./farm.png";
// import Home from './Home';
// import Home from './Home';

function Signin(){


    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    // const handleClick = (e)=>{
    //     // e.preventDefault();
    //     if(email && password){
    //         if(email==="abc@gmail.com" && password==='123'){
    //             alert("hi");
                
    //         }
    //     }
    // }

    return(
        
        <div class='page'>
        <div class="form-container">
            <div class='avt'>
                <img src={avatar} alt="fimg" />
                <h2>Welcome Back:)</h2>
            </div>
            <form>
                <label>Email</label>
                <input type='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} required />

                <label>Password</label>
                <input type='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>

                <button><a href='https://main--dainty-ganache-8c4ad1.netlify.app/'>Sign ip</a></button>
                
            </form>
            
        </div>
        </div>
    );
}

export default Signin;