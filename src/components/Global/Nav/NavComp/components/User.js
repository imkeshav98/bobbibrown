import React from 'react'
import "./User.css"
import { FiX } from "react-icons/fi";
import { IconContext } from 'react-icons';
import { BsFacebook } from "react-icons/bs";


export default function User() {
    const crossIcon = () => {
        document.querySelector(".hiddenBoxofLogin").classList.add("hidden")
        console.log("cross is clicked")
    }

    return (
        <>
<div className='userbox'>
         
         <div className='crossIcon' onClick={crossIcon}>
             <IconContext.Provider value={{ color: "grey", size: "2rem" }}>
                 <FiX />
             </IconContext.Provider>
         </div>
         <div className='upperPortionOfUserBox'>
         <h3>Login</h3>
         <input className='emailAndPass my-1' type="text" placeholder="Email" />
         <br />
         <input className='emailAndPass my-1' type="text" placeholder="Password" />
         <br />
         <a href="/" className='allHyperLinks my-2'>Forgot Password?</a>
         <br />

         <button className='LogInButton my-3'>LOG IN</button>
         <hr className='horizontalLine' />
         <p>By clicking "CONTINUE WITH FACEBOOK", I agree <br></br>
             to the Bobbi Brown <a href="" className='allHyperLinks'>Terms and Conditions </a>
             and <br />  <a href="" className='allHyperLinks'>Privacy Policy</a>.</p>
         <div class="form-check">
             <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
             <label class="form-check-label" for="flexCheckIndeterminate">

                 Yes, sign me up to hear from Bobbi Brown! To <br /> learn more, view our  <a href="" className='allHyperLinks'>Privacy Policy</a> . If I am a <br /> California resident, I agree to the <a href="" className='allHyperLinks'> Notice of <br />Financial Incentive</a>.
             </label>
         </div>
         <button className='FacebookButton my-3'>
             <IconContext.Provider value={{ color: "white", size: "1.5rem", mr:"2"}} className="facebookIcon">
                 <BsFacebook className="facebookIcon" />
                 {/* <bs icon={BsFacebook}  /> */}
             </IconContext.Provider>
             Continue with Facebook</button>
             </div>
             <div className='Registerpart'>
                 <p>Don't have an account?</p>
                 <button className='RegisterOfUser'>REGISTER</button>

             </div>
          
     </div>
     <div class="arrowOfUser"></div>
        </>
        
    )
}
