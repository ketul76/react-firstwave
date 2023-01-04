import './legal.css';

function Legal(){
    return(
        <>
            {/* <!-- legal terms home section start --> */}
        <section className="legel-home">
            <div className="legal-sections">
                <div className="legal-texts">
                    <h1>legal terms</h1>
                    <h4>Opmantek prides itself on providing users <br/> access to all their data.</h4>
                    <p>This begins with our products giving you all <br/> the data on your network, but it extends to    <br/> any of your personal information. We pride <br/> ourself on ensuring this is safe.</p>
                    <div className="demo-btn">
                        <button>Downlode all PDF</button>
                    </div>
                </div>
                <div className="legal-home-img">
                    <img src="./legal-terms-imgs/legalHome.svg" alt="" />
                </div>
            </div>
        </section>
    {/* <!-- legal terms home section End --> */}

    {/* <!-- legal Processing section Start --> */}
        <section className="legal-process">
            <div className="legal-process-list">
                <div className="process-list">
                    <img src="./legal-terms-imgs/legal-process/privacy.svg" alt=""/>
                    <div className="process-texts">
                        <h3>Privacy Statement</h3>
                        <h5>About this Privacy Statement, Opmantek is <br/> committed to maintaining the security of…</h5>
                        <p><a href="">Download PDF</a></p>
                    </div>
                </div>
                <div className="process-list">
                    <img src="./legal-terms-imgs/legal-process/nda.svg" alt=""/>
                    <div className="process-texts">
                        <h3>NDA - Confidentiality Agreement</h3>
                        <h5>Party and Counterparty have agreed to make <br/> available Confidential…</h5>
                        <p><a href="">Download PDF</a></p>
                    </div>
                </div>
                <div className="process-list">
                    <img src="./legal-terms-imgs/legal-process/eula.svg" alt=""/>
                    <div className="process-texts">
                        <h3>EULA - End User License Agreement</h3>
                        <h5>Subject to the terms and conditions of this <br/> Agreement, Licensor hereby…</h5>
                        <p><a href="">Download PDF</a></p>
                    </div>
                </div>
                <div className="process-list">
                    <img src="./legal-terms-imgs/legal-process/cookie.svg" alt=""/>
                    <div className="process-texts">
                        <h3>Cookie Policy</h3>
                        <h5>We use technologies and third-party services that <br/> use Google Analytics, pixels, tags and web ...</h5>
                        <p><a href="">Download PDF</a></p>
                    </div>
                </div>
            </div>
            <div className="legal-process-list">
                <div className="process-list">
                    <img src="./legal-terms-imgs/legal-process/trust.svg" alt=""/>
                    <div className="process-texts">
                        <h3>Trust & Data Processing</h3>
                        <h5>Opmantek prides itself on getting all our users access <br/> to all their data. This…</h5>
                        <p><a href="">Download PDF</a></p>
                    </div>
                </div>
                <div className="process-list">
                    <img src="./legal-terms-imgs/legal-process/tos.svg" alt=""/>
                    <div className="process-texts">
                        <h3>ToS - Terms of Service</h3>
                        <h5>Access and Use License. Subject to the terms and <br/> conditions of this Agreement…</h5>
                        <p><a href="">Download PDF</a></p>
                    </div>
                </div>
                <div className="process-list">
                    <img src="./legal-terms-imgs/legal-process/licence.svg" alt=""/>
                    <div className="process-texts">
                        <h3>Licensing</h3>
                        <h5>The purpose of this licensing page is to list the <br/> products and licenses included in Opmantek ...</h5>
                        <p><a href="">Download PDF</a></p>
                    </div>
                </div>
                <div className="process-list">
                    <img src="./legal-terms-imgs/legal-process/privacy-statment.svg" alt="" />
                    <div className="process-texts">
                        <h3>Privacy Request</h3>
                        <h5>We are committed to ensuring that the data you <br/> provide to us is secure. Reach out to use any time...</h5>
                        <p><a href="">Download PDF</a></p>
                    </div>
                </div>
            </div>
        </section>
    {/* <!-- legal Processing section End --> */}
        </>
    )
}


export default Legal;