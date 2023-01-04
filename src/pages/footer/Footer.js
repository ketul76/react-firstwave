import './Footer.css';

function Footer(){
    return(
        <footer>
        <section className="footer-1">
            <div className="title">
                <img className="footer-logo" src="./images/footer-logo.svg" alt="" />
                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Morbi non <br/> leo at justo posuere
                    luctus. Maecenas <br/> id mauris sit. </p>
                <div className="quality-social-media">
                    <img className="isoimg" src="./images/footer-quality-img.svg" alt="" />
                    <div className="social-media-icons">
                        <div className="social-icon">
                            <img className="fb-icon" src="./images/fb.svg" alt=""/>
                        </div>
                        <div className="social-icon">
                            <img className="tw-icon" src="./images/twitter.svg" alt="" />
                        </div>
                        <div className="social-icon">
                            <img className="linkdin-icon" src="./images/linkdin.svg" alt="" />
                        </div>
                        <div className="social-icon">
                            <img className="instagram-icon" src="./images/instagram.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
  
            <div className="opmentek-features open ">
                <div className="feature-list">
                    <h3>Opmentek</h3>
                    <img src="/images/minus.svg" alt=""/>
                </div>
                <p><a href="">Get Demo</a></p>
                <p><a href="">Download</a></p>
            </div>
  
            <div className="opmentek-features">
                <div className="feature-list">
                    <h3>Products</h3>
                    <img src="./images/plus (1) 1.svg" alt="" />
                </div>
                <p><a href="">NMIS</a></p>
                <p><a href="">Open-AudiT</a></p>
                <p><a href="">opEvents</a></p>
                <p><a href="">opConfig</a></p>
                <p><a href="">opHa</a></p>
            </div>
  
            <div className="opmentek-features">
                <div className="feature-list">
                    <h3>Resources</h3>
                    <img src="./images/plus (1) 1.svg" alt="" />
                </div>
                <p><a href="">Blog</a></p>
                <p><a href="">Webinars</a></p>
                <p><a href="">Opmentek Wiki</a></p>
                <p><a href="">Prices</a></p>
                <p><a href="">Contact Us</a></p>
            </div>
  
            <div className="opmentek-features">
                <div className="feature-list">
                    <h3>Resources</h3>
                    <img src="./images/plus (1) 1.svg" alt="" />
                </div>
                <p><a href="">Blog</a></p>
                <p><a href="">Webinars</a></p>
                <p><a href="">Opmentek Wiki</a></p>
                <p><a href="">Prices</a></p>
                <p><a href="">Contact Us</a></p>
            </div>
        </section>
        <hr/>
  
        <section className="footer-2">
            <div className="supports">
                <h3>Reach Us</h3>
                <div className="support-list">
                    <img src="images/email-icon.svg" alt="" />
                    <h4>Support: <span> hello@landify.co </span></h4>
                </div>
                <div className="support-list">
                    <img src="images/phone-icon.svg" alt="" />
                    <h4>General: <span> +91 98765 43210 </span></h4>
                </div>
                <div className="support-list">
                    <img src="images/location-icon.svg" alt="" />
                    <h4>USA Office: <span> 772 Lyonwood Ave <br/> Walnut, CA 91789 </span> </h4>
                </div>
                <div className="support-list">
                    <img src="./images/location-icon (1).svg" alt=""/>
                    <h4>Australia Office: <span> 772 Lyonwood Ave <br/> Walnut, CA 91789 </span> </h4>
                </div>
            </div>
  
  
            <div className="opmentek-features">
                <div className="feature-list">
                    <h3>Opmentek</h3>
                    <img src="./images/plus (1) 1.svg" alt=""/>
                </div>
                <p><a href="">Get Demo</a></p>
                <p><a href="">Download</a></p>
            </div>
  
            <div className="opmentek-features">
                <div className="feature-list">
                    <h3>Products</h3>
                    <img src="./images/plus (1) 1.svg" alt=""/>
                </div>
                <p><a href="">NMIS</a></p>
                <p><a href="">Open-AudiT</a></p>
                <p><a href="">opEvents</a></p>
                <p><a href="">opConfig</a></p>
                <p><a href="">opHa</a></p>
            </div>
  
            <div className="opmentek-features">
                <div className="feature-list">
                    <h3>Resources</h3>
                    <img src="./images/plus (1) 1.svg" alt="" />
                </div>
                <p><a href="">Blog</a></p>
                <p><a href="">Webinars</a></p>
                <p><a href="">Opmentek Wiki</a></p>
                <p><a href="">Prices</a></p>
                <p><a href="">Contact Us</a></p>
            </div>
  
            <div className="opmentek-features">
                <div className="feature-list">
                    <h3>Resources</h3>
                    <img src="./images/plus (1) 1.svg" alt="" />
                </div>
                <p><a href="">Blog</a></p>
                <p><a href="">Webinars</a></p>
                <p><a href="">Opmentek Wiki</a></p>
                <p><a href="">Prices</a></p>
                <p><a href="">Contact Us</a></p>
            </div>
        </section>
        <hr/>
        <div className="copyright">
            <p>Opmantek 2022. All rights reserved</p>
            <p>Terms & Privacy</p>
        </div>
    </footer>
    )
}

export default Footer;