import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">

                    <div className="col">
                        <h4>FANCY BLOG INC</h4>
                        <ul className="list-unstyled">
                            <li>999-999-9999</li>
                            <li>United States</li>
                            <li>123 Street S</li>
                        </ul>
                    </div>
                    
                    <div className="col">
                        <h4>STUFF</h4>
                        <ul className="list-unstyled">
                            <li>999-999-9999</li>
                            <li>United States</li>
                            <li>123 Street S</li>
                        </ul>
                    </div>

                    <div className="col">
                        <h4>ANOTHER STUFF</h4>
                        <ul className="list-unstyled">
                            <li>999-999-9999</li>
                            <li>United States</li>
                            <li>123 Street S</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} FANCY BLOG INC | All rights reserved | Terms of Service | Privacy

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
