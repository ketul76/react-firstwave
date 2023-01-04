import React from "react";
import './financial.css';

function Financial(){
    return(
        <>
            {/* <!-- main part start -->
        <!-- home section start --> */}
        <section className="financial-home">
            <div className="financial-home-texts">
                <h1>Financial Reporting</h1>
                <h3>
                    Opmantek prides itself on providing users <br />
                    access to all their data.
                </h3>
                <p>
                    This begins with our products giving you all <br />
                    the data on your network, but it extends to <br />
                    any of your personal information. We pride <br />
                    ourself on ensuring this is safe.
                </p>
            </div>
            <div className="financial-home-img">
                <img src="./financial-images/financial-home-img.svg" alt="" />
            </div>
        </section>
        {/* <!-- home section end --> */}

        {/* <!-- Annual Report Section Start --> */}
        <section className="annual-reports">
            <h2>Annual Reports</h2>
            <div className="reports-lists">
                <div className="reports">
                    <div className="yearly">
                        <h3>2021</h3>
                        <p><span>|</span><a href="">Download Report</a></p>
                    </div>
                    <div className="yearly">
                        <h3>2021</h3>
                        <p><span>|</span><a href="">Download Report</a></p>
                    </div>
                    <div className="yearly">
                        <h3>2021</h3>
                        <p><span>|</span><a href="">Download Report</a></p>
                    </div>
                </div>
                <div className="reports">
                    <div className="yearly">
                        <h3>2021</h3>
                        <p><span>|</span><a href="">Download Report</a></p>
                    </div>
                    <div className="yearly">
                        <h3>2021</h3>
                        <p><span>|</span><a href="">Download Report</a></p>
                    </div>
                    <div className="yearly">
                        <h3>2021</h3>
                        <p><span>|</span><a href="">Download Report</a></p>
                    </div>
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
                    <p>​The Board of FirstWave Cloud Technology Limited has been established to provide a blend of
                        qualifications, skills <br/> and experience required to manage a company in a cloud-based
                        technology environment. The Company’s aim <br/> in determining Board membership is to create a
                        balanced and informed group to assist the Company in making <br/> decisions relating to all
                        corporate and governance related matters. The Board’s primary responsibility is to the <br/>
                        shareholders as owners of the Company. In recognition of its duty, it recognizes an important
                        obligation to act in
                        <br/> the best interests of the Company, act honestly, exercise care and due diligence and
                        support a corporate <br/> governance initiative that fosters integrity.
                    </p>
                    <br/>
                    <p>The Board seeks to ensure that the Company is properly managed to protect and enhance shareholder
                        interests, <br/> and that the Company, its Directors, officers and personnel operate in an
                        appropriate environment of good <br/> corporate governance. Accordingly, the Board has created a
                        framework for managing the Company, including <br/> adopting relevant internal controls, risk
                        management processes and corporate governance policies and <br/> practices which it believes are
                        appropriate for the Company’s business and which are designed to promote the <br/> responsible
                        management and conduct of the Company.</p>
                    <br/>
                    <p>Copies of the Company’s key corporate governance policies and charters for the Board and each of
                        its <br/> committees are available below.</p>
                </div>
            </div>
            <div className="our-policies-download">
                <h4>Corporate Governance Policies - (click on name to download)</h4>
                <div className="policy-download"><input id="one" type="radio" name="policies"/>
                    <label for="one">Appendix 4G and Corporate Governance</label>
                </div>
                <div className="policy-download">
                    <input id="two" type="radio" checked name="policies"/>
                    <label for="two">FCT Audit and Risk Committee Charter
                    </label>
                </div>
                <div className="policy-download">
                    <input id="three" type="radio" name="policies"/>
                    <label for="three">FCT Board Charter
                    </label>
                </div>
                <div className="policy-download">
                    <input id="four" type="radio" name="policies"/>
                    <label for="four">FCT Board Charter
                    </label>
                </div>
                <div className="policy-download">
                    <input id="five" type="radio" name="policies"/>
                    <label for="five">FCT Code of Conduct
                    </label>
                </div>
                <div className="policy-download">
                    <input id="six" type="radio" name="policies"/>
                    <label for="six">FCT Remuneration and Nomination Committee
                    </label>
                </div>
                <div className="policy-download">
                    <input id="seven" type="radio" name="policies"/>
                    <label for="seven">FCT Securities Trading Policy
                    </label>
                </div>
                <div className="policy-download">
                    <input id="eight" type="radio" name="policies"/>
                    <label for="eight">FCT Constitution
                    </label>
                </div>
                <div className="policy-download">
                    <input id="nine" type="radio" name="policies"/>
                    <label for="nine">FCT Privacy Statement
                    </label>
                </div>
                <div className="policy-download">
                    <input id="ten" type="radio" name="policies"/>
                    <label for="ten">FCT Anti-Bribery and Corruption Policy</label>
                </div>
                <div className="policy-download">
                    <input id="eleven" type="radio" name="policies"/>
                    <label for="eleven">FCT Whistleblower Policy</label>
                </div>


            </div>
        </section>
        {/* <!-- Corporate Governance section End -->

        <!-- Frequantly Section Start --> */}
            <section className="faq">
                <h2>Frequently asked questions</h2>
               <div className="faq-questions-ans">
                <div className="que-ans-lists">
                    <div className="que-ans">
                        <h5>What is the ASX ticker code for FirstWave Cloud Technology Limited?</h5>
                        <img src="./financial-images/expand_more.svg" alt="" />
                    </div>
                    <div className="que-ans">
                        <h5>What was the IPO price and issue date of FirstWave’s shares?</h5>
                        <img src="./financial-images/expand_more.svg" alt="" />
                    </div>
                    <div className="que-ans">
                        <h5>How do I make changes to my holding?</h5>
                        <img src="./financial-images/expand_more.svg" alt="" />
                    </div>
                    <div className="que-ans">
                        <h5>Where will I find FirstWave’s Corporate Governance Statement?</h5>
                        <img src="./financial-images/expand_more.svg" alt="" />
                    </div>
                    <div className="que-ans">
                        <h5>How do I sell my shares?</h5>
                        <img src="./financial-images/expand_more.svg" alt="" />
                    </div>
                    <div className="que-ans">
                        <h5>Who is the Company’s Auditor?</h5>
                        <img src="./financial-images/expand_more.svg" alt="" />
                    </div>
                </div>
               </div>    
                
            </section>
        </>
    )
}

export default Financial;