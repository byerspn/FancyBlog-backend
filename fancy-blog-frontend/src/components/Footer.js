import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">

                    <div className="col">
                        <h4>About</h4>
                        <ul className="list-unstyled">
                            <li>blog</li>
                            <li>about</li>
                            <li>careers</li>
                        </ul>
                    </div>
                    
                    <div className="col">
                        <h4>Help</h4>
                        <ul className="list-unstyled">
                            <li>site rules</li>
                            <li>help center</li>
                            <li>contact us</li>
                        </ul>
                    </div>

                    <div className="col">
                        <h4>tools</h4>
                        <ul className="list-unstyled">
                            <li>fancy blog for iPhone</li>
                            <li>fancy blog for android</li>
                            <li>fancyblog@gmail.com</li>
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
