import React, { useState } from 'react'
import SignUp from '../componets/SignUp'
import "../styles/Login.css"

function Login() {

    const [signIn, setSignIn] = useState(false)

    return (
        <div className="login">
            <div className="login__background" >
              <img className="login__logo"  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
               <button className="login__button" onClick={() => setSignIn(true)}>
                Sign In
               </button>
            </div>
               {/* <div className="login-gradient"/> */}
               <div className="login__body">
                  
                   {signIn ? <SignUp/> :
                   <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere cancel anytime</h2>
                    <h3>Ready to watch enter your email to create or restart membership</h3>
                     
                     <div className="login__input">
                         <form >
                           <input type="email" placeholder="Email.."/>
                           <button onClick={() => setSignIn(true)} className="login__getstarted">GET STARTED</button>
                         </form>

                     </div>
                   </>
                   }
                </div>
        </div>
    )
}

export default Login
