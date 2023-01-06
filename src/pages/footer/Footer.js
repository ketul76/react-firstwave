import './Footer.css';

function Footer({footerData}){
    return(
        <footer>
        <section className="footer-1">
            <div className="title">
                <img className="footer-logo" src="./images/footer-logo.svg" alt="" />
                <p>{footerData.footerTitle1}<br/> {footerData.footerTitle2} <br/> {footerData.footerTitle3} <br/> {footerData.footerTitle4} </p>
                <div className="quality-social-media">
                    <img className="isoimg" src="./images/footer-quality-img.svg" alt="" />
                    <div className="social-media-icons">
                        {footerData.icons.map((item) => (
                        <div className={item.mainClass}>
                            <img className={item.imgClass} src={item.imgLink} alt="./"/>
                        </div>    
                        ))}
                    </div>
                </div>
            </div>
  
            <div className="opmentek-features open ">
                <div className="feature-list">
                    <h3>{footerData.opmentechTitle}</h3>
                    <img src="/images/minus.svg" alt=""/>
                </div>
                <p><a href="./">{footerData.demoLink}</a></p>
                <p><a href="./">{footerData.downloadLink}</a></p>
            </div>
  
            <div className="opmentek-features">
                <div className="feature-list">
                    <h3>{footerData.productTitle}</h3>
                    <img src="./images/plus (1) 1.svg" alt="" />
                </div>
                {footerData.productList.map((item) => (
                    <p><a href="./">{item}</a></p>    
                ))}
            </div>
  
            <div className="opmentek-features">
                <div className="feature-list">
                    <h3>{footerData.resourceTitle}</h3>
                    <img src="./images/plus (1) 1.svg" alt="" />
                </div>
                {footerData.resorceLinks.map((item) => (
                    <p><a href="./">{item}</a></p>
                ))}
            </div>
  
            <div className="opmentek-features">
                <div className="feature-list">
                <h3>{footerData.resourceTitle}</h3>
                    <img src="./images/plus (1) 1.svg" alt="" />
                </div>
                {footerData.resorceLinks.map((item) => (
                    <p><a href="./">{item}</a></p>
                ))}
            </div>
        </section>
        <hr/>
  
        <section className="footer-2">
            <div className="supports">
                <h3>{footerData.contactTitle}</h3>
                <div className="support-list">
                    <img src="images/email-icon.svg" alt="" />
                    <h4>{footerData.supportTitle} <span> {footerData.mail} </span></h4>
                </div>
                <div className="support-list">
                    <img src="images/phone-icon.svg" alt="" />
                    <h4>{footerData.numberText} <span> {footerData.number} </span></h4>
                </div>
                <div className="support-list">
                    <img src="images/location-icon.svg" alt="" />
                    <h4>{footerData.officeAddressTitle1} <span> {footerData.officeAddressText1} <br/> {footerData.officeAddressText2} </span> </h4>
                </div>
                <div className="support-list">
                    <img src="./images/location-icon (1).svg" alt=""/>
                    <h4>{footerData.officeAddressTitle2} <span> {footerData.officeAddressText1} <br/> {footerData.officeAddressText2} </span></h4>
                </div>
            </div>
  
  
            <div className="opmentek-features">
                <div className="feature-list">
                    <h3>{footerData.opmentechTitle}</h3>
                    <img src="./images/plus (1) 1.svg" alt=""/>
                </div>
                <p><a href="./">{footerData.demoLink}</a></p>
                <p><a href="./">{footerData.downloadLink}</a></p>
            </div>
  
            <div className="opmentek-features">
                <div className="feature-list">
                    <h3>{footerData.productTitle}</h3>
                    <img src="./images/plus (1) 1.svg" alt=""/>
                </div>
                {footerData.productList.map((item) => (
                    <p><a href="./">{item}</a></p>
                ))}
            </div>
  
            <div className="opmentek-features">
                <div className="feature-list">
                    <h3>{footerData.resourceTitle}</h3>
                    <img src="./images/plus (1) 1.svg" alt="" />
                </div>
                {footerData.resorceLinks.map((item) => (
                    <p><a href="./">{item}</a></p>
                ))}
            </div>
  
            <div className="opmentek-features">
                <div className="feature-list">
                    <h3>{footerData.resourceTitle}</h3>
                    <img src="./images/plus (1) 1.svg" alt="" />
                </div>
                {footerData.resorceLinks.map((item) => (
                <p><a href="./">{item}</a></p>
                ))}
            </div>
        </section>
        <hr/>
        <div className="copyright">
            <p>{footerData.rights}</p>
            <p>{footerData.policy}</p>
        </div>
    </footer>
    )
}

export default Footer;