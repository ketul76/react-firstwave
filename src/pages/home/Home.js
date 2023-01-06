import React from "react";
import './style.css';

function Home({homeData}){
    return(
<>
    <div className="home">

        <div className="round">
        </div>

        <div className="homePage">
            <div className="homepagetext">
                <h1>{homeData.homeTitle1} <br/> {homeData.homeTitle2}</h1>
                <p>{homeData.homeText1}<br/> {homeData.homeText2} <br/> <span> {homeData.homeText3}</span></p>
                <form action="">
                    <div>
                        <input id="sc" type="radio" checked name="sm-tm" />
                        <label for="sc">{homeData.homeLabel1}</label>
                    </div>
                    <div>
                        <input id="nm" type="radio" name="sm-tm" />
                        <label for="nm">{homeData.homeLabel2}</label>
                    </div>
                </form>
                <div className="demo-btn"><button>{homeData.demoBtn}</button></div>
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
        <h1>{homeData.companyListIntro}</h1>
        <div className="compaines">
            <div className="companylist1">
               {homeData.companyList1.map((item) => (
                <img src={item.imgLink} alt={item.imgName} />
               ))}
            </div>
        </div>
    </div>

    <div className="about">
        <p className="about-desc">{homeData.homeAboutText1}</p>
        <h1>{homeData.homeAboutTitle}</h1>
        <div className="about-btn">
            {homeData.btns.map((item) => (
            <button>{item}</button>    
            ))}
        </div>
        <h5 className="paragraph-1">{homeData.paragraph1} <br/> {homeData.paragraph2} 
        </h5>
        <h6>{homeData.paragraph3}</h6>

        <div className="cards">
            {homeData.cards.map((item) => (
                <div className={item.class}>
                    <div className="frames-1">
                        <img src={item.imgLink} alt="" />
                        <p>{item.text}</p>
                    </div>
                </div>    
            ))}

        </div>

    </div>

    <div className="ourprograms">
        <div className="info">
            <img className="programimg" src="./images/programimg.svg" alt="./" />
            <div className="discription">
                <p>{homeData.programmeTitle}</p>
                <h1>{homeData.programmeName}</h1>
                <h6>{homeData.programmeText1} <br/> {homeData.programmeText2} <br/> <span>{homeData.programmeText3}</span> </h6>
                <div className="featurecards">
                    <div className="feature1">
                        <img src="./images/feature1.svg" alt="" />
                        <div className="feature1text">
                            <h4>{homeData.featureTitle1}</h4>
                            <p>{homeData.featureText1} <br/> {homeData.featureText2}</p>
                        </div>
                    </div>
                    <div className="feature2">
                        <img src="./images/feature2.svg" alt=""/>
                        <div className="feature2text">
                            <h4>{homeData.featureTitle2}</h4>
                            <p>{homeData.featureText3}</p>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="discription-btn">
                    <button>{homeData.btn}</button>
                </div>
            </div>
        </div>


        <div className="programcards">
            <div className="programscard1">
                {homeData.programmeCards1.map((item) => (
                    <div className={item.class}>
                    <img src={item.imgLink} alt=""/>
                    <div className="prog1text">
                        <h4>{item.title}</h4>
                        <p>{item.text1} <br/> {item.text2}</p>
                    </div>
                </div>    
                ))}
            </div>
            {/* <div className="programscard2">
            {homeData.programmeCards2.map((item) => (
                    <div className={item.class}>
                    <img src={item.imgLink} alt=""/>
                    <div className="prog1text">
                        <h4>{item.title}</h4>
                        <p>{item.text1} <br/> {item.text2}</p>
                    </div>
                </div>    
                ))}
            </div> */}
        </div>
    </div>

    <div className="desicion-page">
        <h1>{homeData.decisionTitle}</h1>
        <div className="decision-btn">
            <button>{homeData.demoBtn}</button>
        </div>
        <div className="decisioncards">
            {homeData.desicisions.map((item) => (
                <div className={item.class}>
                <img src={item.imgLink} alt=""/>
                <p>{item.text}</p>
            </div>    
            ))}
        </div>
    </div>



    {/* <!-- Testimonial section --> */}

    <section className="testimonial">
        <div className="alltestimonial">
            <div className="testimonial-title">
                <img src="./images/quatation.svg" alt="" />
                <h2>{homeData.testimonialTitel1} <br/>
                    {homeData.testimonialTitel2}</h2>
                <p>{homeData.inspireText}</p>
            </div>
            <div className="testimonial-cards">
    
                <div className="testimonial-card1">
                    <img className="testimonialimg" src="./images/Hubspot Logo.svg" alt="Hubspot" />
                    <div className="hubspot">
                
                                <img src="./images/Quote Mark.svg" alt="" />
                                <p className="para">{homeData.testimonialcard1Texts}</p>
                   
                            <div className="profile">
                                <img src="./images/profile.svg" alt="" />
                                <div>
                                    <h4>{homeData.testimonialcard1Name}</h4>
                                    <p>{homeData.testimonialcard1Post}</p>
                                </div>
                            </div>
                    </div>
                </div>
    
                <div className="another-cards">
                    <div className="testimonial-card2">
                        <img  className="testimonialimg" src="./images/Airbnb Logo.svg" alt="Airbnb" />
                        <div className="airbnb">
                                <img src="./images/Quote Mark.svg" alt="" />
                                <p className="para">{homeData.testimonialcard2Texts}</p>
                            <div className="profile">
                                <img src="./images/profile2.svg" alt="" />
                                <div>
                                    <h4>{homeData.testimonialcard2Name}</h4>
                                    <p>{homeData.testimonialcard2Post}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="testimonial-card3">
                        <img  className="testimonialimg" src="./images/BookMyShow Logo.svg" alt="BookMyShow"/>
                        <div className="bookmyshow">
                                <img className="quate"  src="./images/Quote Mark.svg" alt=""/>
                                <p className="para">{homeData.testimonialcard3Texts}</p>
                            <div className="profile">
                                <img src="./images/profile3.svg" alt=""/>
                                <div>
                                    <h4>{homeData.testimonialcard3Name}</h4>
                                    <p>{homeData.testimonialcard3Post}</p>
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