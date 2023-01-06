import React from "react";
import './financial.css';

function Financial(props){
    let finacial = props.financialData;
    return(
        <>
        {/* <!-- main part start -->
        <!-- home section start --> */}
        <section className="financial-home">
            <div className="financial-home-texts">
                <h1>{finacial.title}</h1>
                <h3>
                    {finacial.text1} <br />
                    {finacial.text2}
                </h3>
                <p>
                    {finacial.text3} <br />
                    {finacial.text4} <br />
                    {finacial.text5} <br />
                    {finacial.text6}
                </p>
            </div>
            <div className="financial-home-img">
                <img src="./financial-images/financial-home-img.svg" alt="" />
            </div>
        </section>
        {/* <!-- home section end --> */}

        {/* <!-- Annual Report Section Start --> */}
        <section className="annual-reports">
            <h2>{finacial.annualReportsTitle}</h2>
            <div className="reports-lists">
                <div className="reports">
                    {finacial.reports1.map((item) => (
                        <div className={item.class}>
                        <h3>{item.year}</h3>
                        <p><span>|</span><a href="./">{item.link}</a></p>
                    </div>    
                    ))}
                </div>
                <div className="reports">
                {finacial.reports2.map((item) => (
                        <div className={item.class}>
                        <h3>{item.year}</h3>
                        <p><span>|</span><a href="./">{item.link}</a></p>
                    </div>    
                    ))}
                </div>
            </div>
        </section>
        {/* <!-- Annual Report Section End  -->


        <!-- recieve-investors update start --> */}
        <section className="recives">
            <div className="white-card">
                <div className="offer-text">
                    <h2>Receive investor <br/> updates</h2>
                    <p>
                        Used and supported in over 178 countries <br/> around the globe.
                    </p>
                </div>
                <div className="form">
                    <form action="">
                        <div className="form-control">
                            <label for="">First name</label><br />
                            <input type="text" placeholder="enter first name" />
                        </div>

                        <div className="form-control">
                            <label for="">Last name</label><br />
                            <input type="text" placeholder="enter last name" />
                        </div>

                        <div className="form-control">
                            <label for="">email</label><br />
                            <input type="email" placeholder="enter email address" />
                        </div>

                        <div className="demo-btn">
                            <button type="submit">Submit</button>
                        </div>

                    </form>
                </div>
{/* 
                <!-- <div className="square2">

                </div> --> */}
            </div>
            <div className="blue-card">
                <div className="blue-circle"></div>
                {/* <!-- <div className="square"></div> --> */}
            </div>
        </section>
        {/* <!-- recieve-investors update end -->

        <!-- Corporate Governance section start --> */}
        <section className="corporate-governess">
            <h1>Corporate Governance</h1>
            <div className="corporate-governess-text">
                <div className="text-about">
                    <p>​ {finacial.paragraphtext1} <br/> {finacial.paragraphtext2} <br/> {finacial.paragraphtext3} <br/> {finacial.paragraphtext4} <br/>
                        {finacial.paragraphtext5} <br/> {finacial.paragraphtext6} <br/>
                        {finacial.paragraphtext7}
                    </p>
                    <br/>
                    <p>{finacial.paragraphtext8} <br/> {finacial.paragraphtext9} <br/> {finacial.paragraphtext10} <br/> {finacial.paragraphtext11} <br/> {finacial.paragraphtext12} <br/> {finacial.paragraphtext13}</p>
                    <br/>
                    <p>{finacial.copyText1} <br/> {finacial.copyText2}</p>
                </div>
            </div>
            <div className="our-policies-download">
                <h4>{finacial.policyTitle}</h4>
                {finacial.policies.map((item) => (
                    <div className={item.class}>
                    <input id="one" type="radio" name="policies"/>
                    <label for="one">{item.label}</label>
                </div>    
                ))}


            </div>
        </section>
        {/* <!-- Corporate Governance section End -->

        <!-- Frequantly Section Start --> */}
            <section className="faq">
                <h2>Frequently asked questions</h2>
               <div className="faq-questions-ans">
                <div className="que-ans-lists">
                    {finacial.queAns.map((item) => (
                    <div className={item.class}>
                        <h5>{item.text}</h5>
                        <img src={item.imgLink} alt="" />
                    </div>    
                    ))}
                </div>
               </div>    
                
            </section>
        </>
    )
}

export default Financial;