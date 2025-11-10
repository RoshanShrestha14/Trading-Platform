import React from 'react';

function Universe() {
    return (
        <> 
        <div className='container' style={{marginTop:'6rem'}}> 
    <h2 className='text-center'> 
        Dividend History & Breakdown
        
    </h2>
    <p className='text-center awardPara mt-4'  style={{fontSize:'1.2rem'}}>
        Track your dividend income and investment performance with detailed breakdowns. 
          The platform provides comprehensive analytics for each holding in your portfolio.
    </p>
    <div  className='row mt-5'> 
        <div className='col-12 d-flex justify-content-center accordion-body'> 
             <img src='media/images/table.png' className='mobileImage rightSectionImg'       alt='aboutImage'
                             style={{
                                  width: '80%',
                                  height: 'auto', 
                                 objectFit: 'cover',
                                 borderRadius:"5%"
                                }} />

        </div>
        <p className='text-center awardPara mt-5'  style={{fontSize:'1.2rem'}}>
        The platform includes comprehensive dividend tracking and portfolio analytics, allowing users to monitor their investment performance with detailed breakdowns. Users can view dividend history, track holding periods, analyze split adjustments, and measure returns across their entire portfolio through intuitive data visualizations and detailed reporting."
    </p>

        

        
    </div>
   
    
    </div> 
        </>
    );
}

export default Universe;