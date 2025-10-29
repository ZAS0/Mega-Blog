// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// export default function Protected({ children, authentication = true }) {
//   const navigate = useNavigate();
//   const [loader, setLoader] = useState(true);
//   const authStatus = useSelector((state) => state.auth.status);

//   useEffect(() => {
//     //if (authStatus === undefined) return; // wait until authStatus is known

//     if (authentication && authStatus !== authentication) {
//       navigate("/login");
//     } else if (!authentication && authStatus !== authentication) {
//       navigate("/");
//     }
//     if (loader) setLoader(false);
//   }, [authStatus, navigate, authentication]);
//   return loader ? <h1>Loading...</h1> : <>{children}</>;
// }

import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}



/*
  
🧠 Purpose

It ensures that only authenticated users can access certain pages (like dashboard, profile, etc.),
and unauthenticated users are redirected (e.g., to /login).Likewise, it can also prevent
logged-in users from visiting public routes (like login/register pages).

Just like in Spring Boot
 
*/
