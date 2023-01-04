import React from "react";
import './style.css';

function Home(){
    return(
<>
    <div className="home">

        <div className="round">
        </div>

        <div className="homePage">
            <div className="homepagetext">
                <h1>Maximize Your IT <br/> Investment</h1>
                <p>We will help you to audit, manage, <br/> automate and secure your entire business. <br/> <span> a demo
                        with our specialists.</span></p>
                <form action="">
                    <div>
                        <input id="sc" type="radio" checked name="sm-tm" />
                        <label for="sc">Cybersecurity</label>
                        <input id="nm" type="radio" name="sm-tm" />
                        <label for="nm">Network Management</label>
                    </div>
                </form>
                <div className="demo-btn"><button>Book a Demo</button></div>
            </div>
            <div className="homepageimg">
                <img src="./images/homepageimg.svg" alt="" />
                <div className="square">

                </div>
            </div>
        </div>


        <div className="biground">

        </div>
        <div className="smallround">

        </div>

    </div>

    <div className="companypage">
        <h1>Trusted By over 150,000 Companies including</h1>
        <div className="compaines">
            <div className="companylist1">
                <img src="./images/bloomberg.svg" alt=""/>
                <img src="./images/standford.svg" alt=""/>
                <img src="./images/cambridge.svg" alt=""/>
                <img src="./images/microsoft.svg" alt=""/>
                <img src="./images/ETh.svg" alt=""/>
                <img src="./images/stitch.svg" alt=""/>
            </div>
            <div className="companylist2">
                <img src="./images/google.svg" alt=""/>
                <img src="./images/opengv.svg" alt=""/>
                <img src="./images/allgero.svg" alt=""/>
                <img src="./images/amazone.svg" alt=""/>
                <img src="./images/circleup.svg" alt=""/>
                <img src="./images/yellowlogo.svg" alt=""/>
            </div>
        </div>
    </div>

    <div className="about">
        <p className="about-desc">FRACTION OF A COST</p>
        <h1>Premium Network Management</h1>
        <div className="about-btn">
            <button>Service Providers</button>
            <button>MSP</button>
            <button>Enterprise</button>
            <button>SMS</button>
        </div>
        <h5 className="paragraph-1">
            The whole is greater than the sum of the parts.
            Opmantek offers MSP Software that is designed <br/> to scale.
        </h5>
        <h6>To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of
            the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.To
            quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the
            best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.</h6>

        <div className="cards">
            <div className="card1">
                <div className="frames-1">
                    <img src="./images/card-1.svg" alt="" />
                    <p>Get one step closer to self-improvement and personal growth by learning more about yourself</p>
                </div>
            </div>

            <div className="card1">
                <div className="frames-1">
                    <img src="./images/card-2.svg" alt="" />
                    <p>Improve your entrepreneurial skills by discovering your business personality traits</p>
                </div>
            </div>

            <div className="card1">
                <div className="frames-1">
                    <img src="./images/card-3.svg" alt="" />
                    <p>Share your entrepreneurial personality test results with your friends and see how you all compare
                    </p>
                </div>
            </div>
        </div>

    </div>

    <div className="ourprograms">
        <div className="info">
            <img className="programimg" src="./images/programimg.svg" alt=""/>
            <div className="discription">
                <p>Machine Learning Powered, Multi-tenant</p>
                <h1>Cybersecurity Platform</h1>
                <h6>Use our machine learning powered propriotory solutions <br/> to protect your business from any
                    cybersecurity attacts. <br/> <span>Schedule a demo with our friendly experts.</span> </h6>
                <div className="featurecards">
                    <div className="feature1">
                        <img src="./images/feature1.svg" alt="" />
                        <div className="feature1text">
                            <h4>Plug-n-play configuration</h4>
                            <p>Secure your organization without changing all <br/> the settings</p>
                        </div>
                    </div>
                    <div className="feature2">
                        <img src="./images/feature2.svg" alt=""/>
                        <div className="feature2text">
                            <h4>Easy Integration</h4>
                            <p>Smooth Integrated with Microsoft Office 365</p>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="discription-btn">
                    <button>Schedule a demo</button>
                </div>
            </div>
        </div>


        <div className="programcards">
            <div className="programscard1">
                <div className="programcard1">
                    <img src="./images/feature3.svg" alt=""/>
                    <div className="prog1text">
                        <h4>Web Security</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Mattis et sed nam sem tellus
                            erat.</p>
                    </div>
                </div>
                <div className="programcard2">
                    <img src="./images/feature4.svg" alt=""/>
                    <div className="prog2text">
                        <h4>Email Security</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Mattis et sed nam sem tellus
                            erat.</p>
                    </div>
                </div>
            </div>
            <div className="programscard2">
                <div className="programcard3">
                    <img src="./images/feature5.svg" alt=""/>
                    <div className="prog3text">
                        <h4>Endpoint Security</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Mattis et sed nam sem tellus
                            erat.</p>
                    </div>
                </div>
                <div className="programcard4">
                    <img src="./images/feature6.svg" alt=""/>
                    <div className="Firewall & ADR">
                        <h4>Web Security</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Mattis et sed nam sem tellus
                            erat.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="desicion-page">
        <h1>Need Help Making a Decision?</h1>
        <div className="decision-btn">
            <button>Book a Demo</button>
        </div>
        <div className="decisioncards">
            <div className="dicision-1">
                <img src="./images/Icon.png" alt=""/>
                <p>See the changes you can make by using automated features that matters to you</p>
            </div>
            <div className="dicision-1">
                <img src="./images/Icon.png" alt=""/>
                <p>Learn how FirstWave technology can be customised for your business needs</p>
            </div>
            <div className="dicision-1">
                <img src="./images/Icon.png" alt=""/>
                <p>Get Top notch support from our cybersecurity & infrastructure management experts</p>
            </div>
        </div>
    </div>



    {/* <!-- Testimonial section --> */}

    <section className="testimonial">
        <div className="alltestimonial">
            <div className="testimonial-title">
                <img src="./images/quatation.svg" alt="" />
                <h2>Real stories from <br/>
                    Real Customers</h2>
                <p>Get inspired by these stories.</p>
            </div>
            <div className="testimonial-cards">
    
                <div className="testimonial-card1">
                    <img className="testimonialimg" src="./images/Hubspot Logo.svg" alt="Hubspot" />
                    <div className="hubspot">
                
                                <img src="./images/Quote Mark.svg" alt="" />
                                <p className="para">To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.</p>
                   
                            <div className="profile">
                                <img src="./images/profile.svg" alt="" />
                                <div>
                                    <h4>Floyd Miles</h4>
                                    <p>Vice President, GoPro</p>
                                </div>
                            </div>
                    </div>
                </div>
    
                <div className="another-cards">
                    <div className="testimonial-card2">
                        <img  className="testimonialimg" src="./images/Airbnb Logo.svg" alt="Airbnb" />
                        <div className="airbnb">
                                <img src="./images/Quote Mark.svg" alt="" />
                                <p className="para">I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.</p>
                  
                            <div className="profile">
                                <img src="./images/profile2.svg" alt="" />
                                <div>
                                    <h4>Jane Cooper</h4>
                                    <p>CEO, Airbnb</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="testimonial-card3">
                        <img  className="testimonialimg" src="./images/BookMyShow Logo.svg" alt="BookMyShow"/>
                        <div className="bookmyshow">
                                <img className="quate"  src="./images/Quote Mark.svg" alt=""/>
                                <p className="para">Landify saved our time in designing my company page.</p>
                            <div className="profile">
                                <img src="./images/profile3.svg" alt=""/>
                                <div>
                                    <h4>Kristin Watson</h4>
                                    <p>Co-Founder, BookMyShow</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    </>
    )
}


export default Home;