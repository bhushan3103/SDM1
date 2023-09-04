import React from 'react'
import { useNavigate}from "react-router-dom";

import MembNavbar from '../NavbarComponent/MemberNavbar';


 const Member =() =>{
  
    const navigate = useNavigate();

    const logout = () => {
        
        localStorage.removeItem('member_name')
        localStorage.removeItem('member_email')
        localStorage.removeItem('member_contact')
        localStorage.removeItem('member_address')
        localStorage.removeItem('member_password')
        localStorage.removeItem('member_role')
        navigate('/login')
        
    }
        return (
            <div>

                <MembNavbar/>   

                <div className="container">
                <h1 style={{textAlign:'center'}}> Hello Member, {localStorage.getItem('member_name')}</h1>
                </div> 
  
                <br/>
                <br/>
                <button className="btn btn-success" onClick={logout}>Sign Out</button>
                <br/>
                <br/>
                
               
            </div>
        )
    
}

export default Member