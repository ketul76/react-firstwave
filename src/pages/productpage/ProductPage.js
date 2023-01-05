import './product-style.css';
 
function ProductPage({productData}){
    return(
        <>
                    {/* <!-- Home Section --> */}

<section className="product-home">
    <div className="home-intro">
        <h6>{productData.productTitle}</h6>
        <h1>{productData.productName}</h1>
        <h3> {productData.productIntro1} <br/> {productData.productIntro2}</h3>
        <p>
            {productData.productParagraph1} <br/> {productData.productParagraph2} <br/> {productData.productParagraph3} <br/> {productData.productParagraph4}</p>
        <div className="home-btns">
            <button className="download-btn">{productData.productBtn1}</button>
            <button className="demo-btn">{productData.productBtn2}</button>
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
    <h4>{productData.productListIntro}</h4>
    <div className="companies">
        <div className="companies-list">
            {productData.productCompanyList1.map((item) => (
            <img src={item.imgLink} alt={item.imgName}/>
            ))}
        </div>
        <div className="companies-list">
            {productData.productCompanyList2.map((item) => (
            <img src={item.imgLink} alt={item.imgName}/>
            ))}

        </div>
    </div>
</section>

{/* <!-- Company Section End --> */}


{/* <!-- product-feature section Start --> */}

<section className="productfeatures">
    <h4>{productData.productFeatureTitle}</h4>
    <div className="product-features">
        <div className="product-feature-lists">
        {productData.product1.map((item) => (
              <div className={item.className}>
              <img
                src={item.imgLink}
                alt=""
              />
              <h2>{item.buisnessText}</h2>
              <p>
                {item.buisnessIntro}
              </p>
            </div>  
            ))}
        </div>

        <div className="product-feature-lists product-list2">
        {productData.product2.map((item) => (
              <div className={item.className}>
              <img
                src={item.imgLink}
                alt=""
              />
              <h2>{item.buisnessText}</h2>
              <p>
                {item.buisnessIntro}
              </p>
            </div>  
            ))}
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
        <h3>{productData.support}</h3>
        <h4>{productData.supportText1} <br/> {productData.supportText2} <br/> {productData.supportText3} <br/> {productData.supportText4}
        </h4>
        <h4 className="support-paragraph">
            {productData.supportParagraph}
        </h4>
        <div className="demo-btn">
            <button>{productData.demoBtn}</button>
        </div>
    </div>

    <div className="support-img">
        {productData.supportImgs.map((item) => (
            <div className={item.class}>
              <img src={item.imgLink} alt=""/>
            </div>
        ))}
    </div>
</section>
{/* <!-- Our Support Section End --> */}

{/* <!-- Download Section 1 start --> */}
<section className="download-nmis-page">
    <div className="download-page">
        <div className="download-info">
            <h4>{productData.downloadTitle}</h4>
            <p>{productData.downloadIntro}</p>
            <h3><a href="">{productData.downloadLink}</a></h3>

            <div className="download-btn1">
                <div className="radio">
                    <input type="radio" id="one" name="download"/>
                    <label for="one">{productData.downloadLabel1}</label>
                </div>
                <p><a href="">{productData.documentationLink1}</a></p>
            </div>

            <div className="download-btn1">
                <div className="radio">
                    <input type="radio" id="two" name="download"/>
                    <label for="two">{productData.downloadLabel2}</label>
                </div>
                <p><a href="">{productData.documentationLink2}</a></p>
            </div>

            <div className="download-btn1">
                <div className="radio">
                    <input type="radio" id="three" name="download"/>
                    <label for="three">{productData.downloadLabel3}</label>
                </div>
                <p><a href="">{productData.documentationLink3}</a></p>
            </div>

            <label for="">{productData.emailLabel}</label><br/>
            <input className="email" type="email" placeholder="your@gmail.com"/>
            <br/>
            <div className="download-checkbox">
                <input type="checkbox" />{productData.checkboxName}
            </div>
            <br/>
            <button className="download-btn">{productData.downloadBtn}</button>
        </div>

        <div className="frequenty-que">
            <h1>{productData.faq}</h1>
            {productData.queAns.map((item) => (
                <div className={item.class}>
                <p>{item.text}</p>
                <img src={item.imgLink} alt=""/>
            </div>
            ))}
           
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
            <h4>{productData.downloadTitle2}</h4>
            <p>{productData.downloadIntro2}</p>
            <h3><a href="./">{productData.downloadLink}</a></h3>
            <div className="our-support">
                {productData.ourSupport.map((item) => (
                <div className={item.class}>
                    <img src={item.imgLink} alt="" />
                    <h2>{item.supportText1}</h2>
                    <p>
                        {item.supportText2}
                    </p>
                    <button>{item.joinBtn}</button>
                </div>
                ))}
            </div>
        </div>
    </div>
</section>

{/* <!-- Download section 2 End --> */}
</>
    )
}

export default ProductPage;