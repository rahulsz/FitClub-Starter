import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const handleJoin = (e) => {
    e.preventDefault();emailjs.sendForm(
        "service_irlsn1k","template_kzq62hd",form.current,
        "KrFuwvYf9oDpRN8Py")
      .then(
        (result) => {
          console.log("done");
          window.location.reload(); // Reload the window
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <div className="Join" id='join-us'>
     <div className="left-j">
         <hr />
         <div><span className='stroke-text'>Ready to</span><span>Level up</span></div>
         <div><span>your body</span><span className='stroke-text'>with us?</span></div>
     </div>
     <div className="right-j">
         <form className="email-container" ref={form} onSubmit={handleJoin}>
             <input type="email" name='user_email' placeholder='Enter your Email Address here...'/>
             <button type='submit' className="btn btn-j">Join now</button>
         </form>
     </div>
    </div>
   )
 }

export default Join;
