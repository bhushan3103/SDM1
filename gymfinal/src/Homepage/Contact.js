import { Container } from "react-bootstrap"
import {Row,Col} from 'react-bootstrap'




const Contact= () => {
    return (
     <>
     <h1  style={{color:"tomato",textAlign:"center",marginTop:'50px'}}>Fit and Fab Gym's Contacts</h1>
     
     <Container style={{marginTop:'80px'}}>
     <Row >
       {/* <Col><Image src= {Swar} width= "100%" height="400px" /></Col> */}
       <Col>
       <h1 style={{color:"springgreen",textAlign:"center"}}>Fit and Fab Gym </h1><br/>
       {/* <h3>Swargandh Pradhan</h3><br/> */}
       <p>WE ARE ALWAYS READY TO HEAR FROM YOU :
       <br/>

OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS.<br/>
<br/>
Address:
<br/>
Phone:
<br/>
Email: </p>
       </Col>
     </Row>
   </Container>


  

  
    
   
 
   </>
    )
} 

export default Contact;