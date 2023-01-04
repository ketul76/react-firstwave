import './product-style.css';
 
function ProductPage(){
    return(
        <>
                    {/* <!-- Home Section --> */}

<section className="product-home">
    <div className="home-intro">
        <h6>Network Management Product</h6>
        <h1>NMIS 9</h1>
        <h3> The backbone of your network <br/> management system. </h3>
        <p>
            Network Management Information System <br/> (NMIS) is the robust software platform <br/> underpinning
            Opmantek Performance and <br/> Management solutions.</p>
        <div className="home-btns">
            <button className="download-btn">Free Download</button>

            <button className="demo-btn">Book a Demo</button>
        </div>
    </div>

    <div className="home-img">
        <div className="home-sheetimg">
            <img src="./product-images/home-img.svg" alt="home-img" />
        </div>
    </div>

    <img className="small-home-img" src="./product-images/home-img.svg" alt="extra" />
</section>

{/* <!-- Home Section END --> */}



{/* <!-- Company Section Start --> */}

<section className="our-customer-companies">
    <h4>Trusted By over 150,000 Companies including:</h4>
    <div className="companies">
        <div className="companies-list">

            <img src="./product-images/companies/bloomberg.svg" alt="bloomberg"/>
            <img src="./product-images/companies/standford.svg" alt="standford"/>
            <img src="./product-images/companies/cambr/idge.svg" alt="cambr/idge"/>
            <img src="./product-images/companies/microsoft.svg" alt="microsoft"/>
            <img src="./product-images/companies/ETh.svg" alt="ETh"/>
            <img src="./product-images/companies/stitch.svg" alt="stitch"/>


        </div>
        <div className="companies-list">

            <img src="./product-images/companies/google.svg" alt="google"/>
            <img src="./product-images/companies/opengv.svg" alt="opengv"/>
            <img src="./product-images/companies/allgero.svg" alt="allgero"/>
            <img src="./product-images/companies/amazone.svg" alt="amazone"/>
            <img src="./product-images/companies/circleup.svg" alt="circleup"/>
            <img src="./product-images/companies/yellowlogo.svg" alt="yellowlogo"/>

        </div>
    </div>
</section>

{/* <!-- Company Section End --> */}


{/* <!-- product-feature section Start --> */}

<section className="productfeatures">
    <h4>Why Top Companies use NMIS 9</h4>
    <div className="product-features">
        <div className="product-feature-lists">
            <div className="products">
                <img src="./product-images/product-feature/car-engine1.svg" alt="car-engine1"/>
                <h2>Sophisticated Business Rules</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
            </div>
            <div className="products">
                <img src="./product-images/product-feature/think-out-of-the-box1.svg" alt="car-engine1" />
                <h2>Pre-Configured Out-of-the-</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
            </div>
            <div className="products">
                <img src="./product-images/product-feature/maximize1.svg" alt="car-engine1" />
                <h2>Massively Scalable</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
            </div>
        </div>

        <div className="product-feature-lists product-list2">
            <div className="products">
                <img src="./product-images/product-feature/visibility1.svg" alt="car-engine1" />
                <h2>Visible Operational Impact</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
            </div>
            <div className="products">
                <img src="./product-images/product-feature/heart-monitoring1.svg" alt="car-engine1" />
                <h2>Automated Health Live</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
            </div>
            <div className="products">
                <img src="./product-images/product-feature/setting1.svg" alt="car-engine1" />
                <h2>Customizable Alert Escalation </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
            </div>
        </div>
    </div>
</section>

{/* <!-- product-feature section Start --> */}

{/* <!-- Offer and Form section start --> */}

<section className="offer-and-form">
    <div className="white-card">
        <div className="offer-text">
            <h2>Save upto 50% of your IT <br/> cost.</h2>
            <h3>Book Your 15 minute <br/> Call</h3>
            <p>Our FirstWave support engineers are <br/> highly skilled and experienced in NMIS, <br/>Open-AudIT.
            </p>
        </div>
        <div className="form">
            <form action="">
                <div className="first-row">
                    <div className="firstname">
                        <label for="">First name</label><br/>
                        <input type="text" placeholder="enter first name"/>
                    </div>
                    <div className="lastname">
                        <label for="">Last name</label><br/>
                        <input type="text" placeholder="enter last name"/>
                    </div>
                </div>

                <div className="form-control">
                    <label for="">email</label><br/>
                    <input type="email" placeholder="enter email address"/>
                </div>

                <div className="first-row">
                    <div className="contact-number">
                        <label for="">Contact number</label><br/>
                        <input type="number" placeholder="enter Contact number"/>
                    </div>
                    <div className="device-count">
                        <label for="">Your device Count</label><br/>
                        <input type="text" placeholder="select"/>
                    </div>
                </div>

                <div className="form-control">
                    <label for="">Your Country</label><br/>
                    <input type="text" placeholder="enter your country"/><br/>
                </div>
                <div className="form-control Challenge">
                    <label for="">Your Current Challenge</label><br/>
                    <input type="text" placeholder="enter your Message"/>
                </div>

                <div className="checkbox-label">
                    <h5>What are you more interested in:</h5>
                    <div className="checkboxes">


                        <input id="nm" className="input-checked" type="checkbox" name="sm-cs-nm" />
                        <label className="label-checked" for="nm">Network Management</label>
                        <br/>
                        <input id="cs" className="input-checked" type="checkbox" checked name="sm-cs-nm"/>
                        <label className="label-checked" for="cs">Cybersecurity</label>

                        <br/>



                        <input id="customise" className="input-checked" type="checkbox" name="sm-cs-nm" />
                        <label className="label-checked" for="customise">Customize Solution</label>
                    </div>

                </div>

                <button className="form-btn" type="submit">Book My Demo</button>
            </form>
        </div>
    </div>
    <div className="blue-card">
        <div className="blue-circle">

        </div>
    </div>
</section>

{/* <!-- Offer and Form section end -->


<!-- Our Support Section Start --> */}

<section className="support">
    <div className="support-text">
        <h3>Premium Support</h3>
        <h4>Our FirstWave support engineers are highly skilled <br/> and experienced in NMIS, Open-AudIT and all
            of
            our <br/> commercial products and helped customers from <br/> Telcos, MSP, enterprise organisations.
        </h4>
        <h4 className="support-paragraph">
            We work closely with you during implementation and rollout, as well as post delivery of our
            solutions.
        </h4>
        <div className="demo-btn">
            <button>Go to Support</button>
        </div>
    </div>

    <div className="support-img">
        <div className="suport-img1">
            <img src="./product-images/support-img1.svg" alt=""/>
        </div>

        <div className="suport-img2">
            <img src="./product-images/support-img2.svg" alt=""/>
        </div>
    </div>
</section>
{/* <!-- Our Support Section End --> */}

{/* <!-- Download Section 1 start --> */}
<section className="download-nmis-page">
    <div className="download-page">
        <div className="download-info">
            <h4>Download NMIS</h4>
            <p>NMIS (Network Management Information System) is an open-source network management system that was
                first released in 1998.</p>
            <h3><a href="">Download dataSheet</a></h3>

            <div className="download-btn1">
                <div className="radio">
                    <input type="radio" id="one" name="download"/>
                    <label for="one">Download NMIS 9.3.0</label>
                </div>
                <p><a href="">View Documentation</a></p>
            </div>

            <div className="download-btn1">
                <div className="radio">
                    <input type="radio" id="two" name="download"/>
                    <label for="two">Download NMIS 8.8.0</label>
                </div>
                <p><a href="">View Documentation</a></p>
            </div>

            <div className="download-btn1">
                <div className="radio">
                    <input type="radio" id="three" name="download"/>
                    <label for="three">NMIS Source (GitHub)</label>
                </div>
                <p><a href="">View Documentation</a></p>
            </div>

            <label for="">email</label><br/>
            <input className="email" type="email" placeholder="your@gmail.com"/>
            <br/>
            <div className="download-checkbox">
                <input type="checkbox" />Apply all Terms and conditions
            </div>
            <br/>
            <button className="download-btn">Download</button>
        </div>

        <div className="frequenty-que">
            <h1>FAQ</h1>
            <div className="faq">
                <p>What does NMIS stand for?</p>
                <img src="./product-images/down-arrow.svg" alt=""/>
            </div>
            <hr/>
            <div className="faq">
                <p>What does NMIS stand for?</p>
                <img src="./product-images/down-arrow.svg" alt=""/>
            </div>
            <hr/>
            <div className="faq">
                <p>What does NMIS stand for?</p>
                <img src="./product-images/down-arrow.svg" alt="" />
            </div>
            <hr/>
            <div className="faq">
                <p>What does NMIS stand for?</p>
                <img src="./product-images/down-arrow.svg" alt="" />
            </div>
            <hr/>
            <div className="faq">
                <p>What does NMIS stand for?</p>
                <img src="./product-images/down-arrow.svg" alt="" />
            </div>
            <hr/>
            <div className="faq">
                <p>What does NMIS stand for?</p>
                <img src="./product-images/down-arrow.svg" alt=""/>
            </div>
        </div>
    </div>
</section>

{/* <!-- Download Section 1 End -->


<!-- Download section 2 start --> */}

<section className="download-page2">
    <div className="nmis-page2">
        <div className="downloadimg">
            <img src="./product-images/download-img2.svg" alt="" />
        </div>

        <div className="download-info2">
            <h4>Download NMIS</h4>
            <p>NMIS (Network Management Information System) is an open-source network management system that was
                first released in 1998.</p>
            <h3><a href="">Download dataSheet</a></h3>
            <div className="our-support">
                <div className="our-support1">
                    <img src="./product-images/support.svg" alt="" />
                    <h2>Community Support</h2>
                    <p>Community Support is also available for all open source users.</p>
                    <button>Join</button>
                </div>
                <div className="our-support1">
                    <img src="./product-images/github.svg" alt="" />
                    <h2>NMIS on GitHub</h2>
                    <p>Track the NMIS development changes on GitHub.</p>
                    <button>Join</button>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!-- Download section 2 End --> */}
</>
    )
}

export default ProductPage;