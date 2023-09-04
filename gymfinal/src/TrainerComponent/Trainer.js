import React from 'react'
import { useNavigate} from "react-router-dom";

import TrainNavbar from '../NavbarComponent/TrainerNavbar';




 const Trainer =() =>{

    
    const navigate = useNavigate();

    const logout = () => {
        
        localStorage.removeItem('train_name')
        localStorage.removeItem('train_email')
        localStorage.removeItem('train_contact')
        localStorage.removeItem('train_address')
        localStorage.removeItem('train_password')
        localStorage.removeItem('train_role')
        navigate('/login')
        
    }

        return (
            <div className='container'>
                
               
                <TrainNavbar/>   

                <div className="container">
                <h1 style={{textAlign:'center'}}> Hello Trainer, {localStorage.getItem('train_name')}</h1>
                </div> 
         <br/>
                <br/>
                <button className="btn btn-success" onClick={logout}>Sign Out</button>
                <br/>
                <br/>
                
               
            </div>
            
        )
    
}
export default Trainer













