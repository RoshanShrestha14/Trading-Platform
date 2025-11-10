import React from 'react';

function CreateTicket() {
    return ( <>

     <div className="container py-5">
    

            {/* Contact Cards */}
            <div className="row g-4 mb-5">
                <div className="col-md-4">
                    <div className="card text-center p-4 border-0" style={{backgroundColor:'#51beed'}}>
                        <div className="fs-1 mb-3">📞</div>
                        <h5>Call Support</h5>
                        <p className="text-muted">+123 456-789TRADE</p>
                        <p className="small text-muted">Mon-Sun: 8AM - 10PM</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center p-4 border-0 "style={{backgroundColor:'#51beed'}}>
                        <div className="fs-1 mb-3">📧</div>
                        <h5>Email Support</h5>
                        <p className="text-muted">support@tradepro.com</p>
                        <p className="small text-muted">Response within 2 hours</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center p-4 border-0"style={{backgroundColor:'#51beed'}}>
                        <div className="fs-1 mb-3">💬</div>
                        <h5>Live Chat</h5>
                        <p className="text-muted">24/7 Available</p>
                        <p className="small text-muted">Instant connection</p>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="row">
                <div className="col-lg-8 mx-auto" >
                    <h3 className="mb-4">Common Questions</h3>
                    
                    <div className="card mb-3">
                        <div className="card-body" style={{backgroundColor:'#51beed'}}>
                            <h5>How do I deposit money?</h5>
                            <p className="text-muted mb-0">Go to Wallet → Deposit → Choose payment method</p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body"style={{backgroundColor:'#51beed'}}>
                            <h5>What are trading hours?</h5>
                            <p className="text-muted mb-0">Equity: 9:15 AM - 3:30 PM IST</p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body"style={{backgroundColor:'#51beed'}}>
                            <h5>Zero brokerage really?</h5>
                            <p className="text-muted mb-0">Yes! Zero brokerage on equity delivery trades</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body"style={{backgroundColor:'#51beed'}}>
                            <h5>How to place orders?</h5>
                            <p className="text-muted mb-0">Search stock → Enter quantity → Market/Limit → Execute</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    



    </>);
}

export default CreateTicket;