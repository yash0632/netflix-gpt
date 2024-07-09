import { useState ,useRef} from 'react';

import {Header} from './Header.jsx'
import { checkValidateData } from '../utils/Validate.js';
export function Login(){
    const[isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    
    const handleButtonClick = () => {
        //validate the form data
        const message =checkValidateData(email.current.value,password.current.value);
        
        setErrorMessage(message);
        
    }

    const toggleSignUpForm = () =>{
        setIsSignInForm(!isSignInForm);
    };
    
    return(
        <div>
            <Header></Header>
            <div className='absolute'>
                <img
                
                src = 'https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg'
                alt='BackGroundImage'></img>
            </div>
            <form onSubmit={e=>e.preventDefault()}
             className='w-3/12 bg-black absolute   my-32 mx-auto right-0 left-0 text-white p-6 bg-opacity-80 rounded-lg'>
                <h1 className='font-bold text-3xl py-2'>{isSignInForm === true ? 'Sign In' : "Sign Up"}</h1>
                {!isSignInForm && (
                    <input 
                    type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-slate-900'/>
                    )
                }
                <input ref={email} type="text" placeholder="Email Address" className='p-4 my-4 w-full bg-slate-900'/>
               <input ref={password} type="text" placeholder="Password" className='p-4 my-4 w-full bg-slate-900'/>
               
               <p className='text-red-50 pt-2 pb-2 text-lg'>{errorMessage}</p>
               
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm === true ? 'Sign In' : "Sign Up"}</button>
                <p className='font-small cursor-pointer' onClick={toggleSignUpForm}>{isSignInForm === true ? 'New to Netflix? Sign Up Now' : "Already Have a Account? Sign In Now"}</p>
            </form>
            
        </div>
        
    );
}
