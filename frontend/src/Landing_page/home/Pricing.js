import React from 'react';
import "./Pricing.css"

function Pricing() {
    return ( 
          
        <div className='container mt-5'>

            <h1 className='text-center'style={{marginTop: '6rem' ,color:'aqua'}} > 
                Unbeatable pricing
            </h1>  
            <h5 className='text-center mt-4'> 
                We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
            </h5>

            <div className='row' style={{marginTop: '4rem'}}> 
                  <div className='col-6'> 
                    <img src='media/images/money.png'  alt='IntraTrading'  
                                     className='mt-1'   style={{
                                              width: '100%',
                                              maxWidth: '90rem', 
                                              height: 'auto', 
                                              objectFit: 'cover',
                                              borderRadius:'2rem'
                                          }} 
                                    />
                </div>
                  <div className='col-6' > 

                       
                        <h2 className='pricingH2'>
                             <i class="fa-brands fa-free-code-camp"></i> &nbsp; &nbsp;Open Account in 0 Rupees
                        </h2>
                        <h2 className='pricingH2'>
                             <i class="fa-solid fa-chart-simple"></i> &nbsp;&nbsp;Free  Equity Delivery and Direct Mutuals Funds 
                        </h2 >
                        <h2 className='pricingH2'> 
                             <i class="fa-solid fa-chart-simple"></i> &nbsp;&nbsp;Trade in intraday stocks with less amount
                        </h2>



                  </div>

            </div>
            
        </div>
         );
}

export default Pricing;