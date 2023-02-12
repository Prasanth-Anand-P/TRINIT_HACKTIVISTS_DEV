import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Sign.css';
import avatar from "./farm.png";

function Signup(){
    return(
        <div class='page'>
        <div class="form-container">
            <div class='avt'>
                <img src={avatar} alt="fimg" />
                <h2>&nbsp; &nbsp;Welcome :)</h2>
            </div>
            <form>
                <label>Name</label>    
                <input type='text' />

                <label>Email</label>
                <input type='email' />

                <label>Password</label>
                <input type='password' />

                <button>Sign up</button>
                <p class="signlink">Already Have Account? <Link to="/">Sign in</Link> </p> 
                
                <Outlet />
            </form>
            
        </div>
        </div>
    );
}

export default Signup;