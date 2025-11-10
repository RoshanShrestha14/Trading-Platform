import React from 'react';
import "./Awards.css"

function Awards() {
    return ( 
    
 <div className='container award mt-5'>
             <div className='row' style={{marginTop:'8rem'}}>
                 <div  className='col-6'> 
                    <h1 className='awardH1'>  
                        Trade Anytime, Anywhere
                    </h1>
                    <p className='awardPara mt-5 '>  
                        Gain instant access to 1,000+ CFD products, free webinars, daily analysis, exclusive promotions, and so much more. Download now!
                    </p>
                    <img src='media/images/appStore.png' alt='appStore' className='appStore'
                     style={{
                             width: '35%',
                             height: 'auto', 
                             objectFit: 'cover',
                             }} />
                    <img src='media/images/googlePlay.png' alt='appStore' className='googlePlay'
                    style={{ 
                          width: '35%',
                         height: 'auto', 
                         objectFit: 'cover',
                         }} />
                </div>
                <div  className='col-6'> 
                        <img src='media/images/award.png' className='mobileImage'       alt='aboutImage'
                             style={{
                                  width: '100%',
                                  height: 'auto', 
                                 objectFit: 'cover',
                                }} 
                        />
                  </div>
             </div>
          

      </div>
    );
}

export default Awards;