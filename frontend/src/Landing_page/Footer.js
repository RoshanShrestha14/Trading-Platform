import React from 'react';
import "./Footer.css"

function Footer() {
    return ( 
        <footer className="simple-footer text-white py-5 mt-5">
            <div className="container">
                <div className="row">
                    {/* Left Part - Logo */}
                    <div className="col-lg-4 col-md-12 mb-4 text-center text-md-start">
                         <img src='media/images/Nav.png' alt='IntraTrading'  
                              style={{
                                  width: '70%',
                                  height: 'auto', 
                                  maxWidth: '200px'
                              }} 
                         />
                    </div>

                    {/* Middle Part - Links */}
                    <div className="col-lg-5 col-md-8 mb-4">
                        <div className="row">
                            <div className="col-4">
                                <h6 className="fw-bold mb-3">Product</h6>
                                <div className="d-flex flex-column">
                                    <a href="#" className="footer-link mb-2">Features</a>
                                    <a href="#" className="footer-link mb-2">Pricing</a>
                                    <a href="#" className="footer-link">API</a>
                                </div>
                            </div>
                            <div className="col-4">
                                <h6 className="fw-bold mb-3">Support</h6>
                                <div className="d-flex flex-column">
                                    <a href="#" className="footer-link mb-2">Help Center</a>
                                    <a href="#" className="footer-link mb-2">Contact</a>
                                    <a href="#" className="footer-link">Status</a>
                                </div>
                            </div>
                            <div className="col-4">
                                <h6 className="fw-bold mb-3">Company</h6>
                                <div className="d-flex flex-column">
                                    <a href="#" className="footer-link mb-2">About</a>
                                    <a href="#" className="footer-link mb-2">Careers</a>
                                    <a href="#" className="footer-link">Blog</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Part - Social */}
                    <div className="col-lg-3 col-md-4 mb-4 text-center text-md-start">
                        <h6 className="fw-bold mb-3">Follow Us</h6>
                        <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                            <a href="#" className="social-icon">📘</a>
                            <a href="#" className="social-icon">🐦</a>
                            <a href="#" className="social-icon">📷</a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="row pt-4 border-top border-secondary">
                    <div className="col-12 text-center">
                        <p className="text-light mb-0">
                            © 2025 Trade Stack . All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;