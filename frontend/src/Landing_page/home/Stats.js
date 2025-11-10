import React from 'react';
import "./Stats.css"

function Stats() {
    return (<div className='container'style={{marginTop:'6rem'}}>
                  <h1 className='mt-5 text-center statsH1'>  
                          Made For All Market Segments
                  </h1>
                  <p className='mt-4 text-center statsPara'>  
                    All the features you need for any segment you prefer
                  </p>
                  <div className='row mt-5'> 
                       <div className='col-12 col-md-6 col-lg-4 mb-4'>
                            <div className="glow-card p-3 text-white">
                                 <h2 > 
                                   Built For 
                                 </h2>
                                 <h2 className='text lh-1'>  
                                   Options Trading
                                 </h2>
                                   <p className='mt-4'> 
                                    Every feature on our platform is Made For Options Trading.
                                  </p> 
                                  <img src='media/images/optionTrading.jpg'  alt='HeroImage'  
                                     className='mt-1'   style={{
                                              width: '100%',
                                              maxWidth: '90rem', 
                                              height: '50%', 
                                              objectFit: 'cover',
                                              borderRadius:'2rem'
                                          }} 
                                    />
                           </div>
                       </div>
                        <div className='col-12 col-md-6 col-lg-4 mb-4'>
                              <div className="glow-card p-4 text-white">
                                    <h2 > 
                                   Built For 
                                 </h2>
                                 <h2 className='text'>  
                                  Intraday Trading
                                 </h2>
                                   <p className='mt-4'> 
                                     focuses on the price movements of securities within a single day
                                  </p> 
                                   <img src='media/images/intraTrading.jpg'  alt='IntraTrading'  
                                     className='mt-1'   style={{
                                              width: '100%',
                                              maxWidth: '90rem', 
                                              height: '50%', 
                                              objectFit: 'cover',
                                              borderRadius:'2rem'
                                          }} 
                                    />

                             </div>
                      </div>
                       <div className='col-12 col-md-6 col-lg-4 mb-4'>
                            <div className="glow-card p-3 text-white">
                               <h2 > 
                                   Built For 
                                 </h2>
                                 <h2 className='text'>  
                                  Investing
                                 </h2>
                                   <p className='mt-4'> 
                                       Only way to attain financial security is to save and invest over a long period of time.
                                  </p> 
                                  <img src='media/images/investing.jpg'  alt='IntraTrading'  
                                     className='mt-1'   style={{
                                              width: '100%',
                                              maxWidth: '90rem', 
                                              height: '50%', 
                                              objectFit: 'cover',
                                              borderRadius:'2rem'
                                          }} 
                                    />
                                 
                 
                           </div>
                      </div>
                 </div>
           </div> );
}

export default Stats;