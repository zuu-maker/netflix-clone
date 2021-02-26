import React, { useRef } from 'react'
import auth from '../firebase'
import "../styles/SignUp.css"

function SignUp() {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user);
        }).catch((err) => {
            alert(err.message)
        })

        emailRef.current.value=null
        passwordRef.current.value=null
    }

    const signIn = (e) => {
        e.preventDefault();
    
       auth.signInWithEmailAndPassword(
           emailRef.current.value,
           passwordRef.current.value
       ).then(user => {
           console.log(user);
       }).catch(err => {
           alert(err.message)
       })

        emailRef.current.value=null
        passwordRef.current.value=null
    }

    return (
        <div className="signUp">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email"/>
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button onClick={signIn} type="submit">Sign In</button>
                <h4>
                  <span className="signUp__gray">New to Netflix?</span> 
                  <span className="signUp__link" onClick={register} >Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUp
