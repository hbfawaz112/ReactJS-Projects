import React, {useState,useEffect} from 'react'
import "./Navbar.css"
function Navbar() {

    const [show, handleShow] = useState(false);

    useEffect(()=>{
      window.addEventListener("scroll", () =>{
          if(window.scrollY >200) {
              handleShow(true);
          }else{
              handleShow(false);
          }
      }) ;
      return () => {window.removeEventListener("scroll");  
     }; },[])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt="Neflix Logo"
            />

        <img 
         className="nav__avatar"
         src="https://mir-cdn.behance.net/v1/rendition/project_modules/max_632/84c20033850498.56ba69ac290ea.png"
         alt="Netflix Avatar"
        />

            
        </div>
    )
}

export default Navbar
