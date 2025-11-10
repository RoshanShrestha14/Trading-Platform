import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( <> 
   <div className='container' style={{marginTop:'12rem'}}> 
    <h2 className='text-center'> 
        404- Page Not Found
    </h2>
    <p className='text-center mt-4'  style={{fontSize:'1.2rem'}}>
       Sorry ! the web server can't find the page you requested
    </p>

    <Link to="/">
     <div className='row justify-content-center align-items-center'>
    <button type="button" class="btn btn-outline-primary btn-lg" style={{display: 'block', width: '20%'}}>Go Home</button> 
    </div>
    
    </Link>

   
   
    
    </div> 

    
    
    </> 
        
    );
}

export default NotFound;