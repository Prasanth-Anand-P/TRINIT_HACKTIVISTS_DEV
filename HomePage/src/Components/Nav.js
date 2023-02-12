import React from 'react';
import "./Nav.css";

export default function Nav(){
    return(
        <>
        <div>
            <nav>
                <h1 id='tit'>FarmFriend</h1>
                <div class="links">
                    <ul>
                        <li><a href="https://transcendent-shortbread-e1fc8b.netlify.app/">Home</a></li>
                        <li><a href="https://transcendent-shortbread-e1fc8b.netlify.app/">Services</a></li>
                        <li><a href="https://transcendent-shortbread-e1fc8b.netlify.app/">Contact</a></li>
                        <li><a href="https://transcendent-shortbread-e1fc8b.netlify.app/">FAQs</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    );
}