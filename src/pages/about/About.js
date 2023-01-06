import React from "react";
import './about.css';

function About({aboutData}){
    return(
    <>

    <main>
    
      <section className="about-us">
        <div className="aboutuspages">
          <div className="about-page-texts">
            <h1>{aboutData.pageName}</h1>
            <h4>
              {aboutData.pageIntro1}<br />
              {aboutData.pageIntro2} <br />
              {aboutData.pageIntro3}
            </h4>
            <p>
              {aboutData.aboutText1} <br />
              {aboutData.aboutText2} <br />
              {aboutData.aboutText3}
            </p>
            <div className="demo-btn about-btns">
              <button>{aboutData.contactBtn}</button>
              <button className="book-demo">{aboutData.bookBtn}</button>
            </div>
          </div>
          <div className="about-images">
            <div className="aboutimg">
              <img src="./aboutus-images/about-bg.svg" alt="" />
            </div>
            <div className="section-img"></div>
          </div>
        </div>
      </section>

      <section className="our-locations">
        <h1>{aboutData.location}</h1>
        <div className="ourlocations">
          <div className="allLocation">
            {aboutData.locationList1.map((item) => (
              <div className={item.class}>
              <img
                className="mainimg"
                src={item.imglink}
                alt=""
              />
              <div className="locationtext">
                <h3>{item.locationTitle}</h3>
                <div className="contacts-address">
                  <img src={item.callimglink} alt="" />
                  <p>{item.phoneNumber}</p>
                </div>
                <div className="contacts-address">
                  <img src={item.msgLink} alt="" />
                  <p>{item.email}</p>
                </div>
                <div className="contacts-address">
                  <img src={item.addressLink} alt="" />
                  <p>{item.address}
                  </p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- Location section End -->

      <!-- Company Section Start --> */}

      <section className="our-customer-companies">
        <h4>{aboutData.companyListIntro}</h4>
        <div className="companies">
          <div className="companies-list">
            {aboutData.companyList1.map((item) => (
              <img
              src={item.imgLink}
              alt={item.imgName}
            />  
            ))}
          </div>
        </div>
      </section>

      {/* <!-- Company Section End -->

      <!-- product-feature section Start --> */}

      <section className="productfeatures">
        <h4>{aboutData.productFeatureTitle}</h4>
        <div className="product-features">
          <div className="product-feature-lists">
            {aboutData.product1.map((item) => (
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

      {/* <!-- product-feature section End -->

      <!-- Our Story Section Start --> */}

      <section className="our-story">
        <div className="story">
          <div className="storysections">
            <div className="storytext">
            <h1>Our story</h1>
              <h3>
                  {aboutData.storyparagraph1}<br />
                  {aboutData.storyparagraph2}<br />
                  {aboutData.storyparagraph3}<br />
                  {aboutData.storyparagraph4}
              </h3>
              <h4>
                {aboutData.storyparagraph5}   <br />
                {aboutData.storyparagraph6} <br />
                {aboutData.storyparagraph7}
              </h4>
            </div>
            <div className="story-img">
              <img src="./aboutus-images/story-img.svg" alt="" />
            </div>
          </div>
          <p>
          {aboutData.ourStoryText1}
          </p>
          <br />
          <p>
          {aboutData.ourStoryText2}
          </p>
          <br />
          <p>
          {aboutData.ourStoryText3}
          </p>
          <br />
          <p>
          {aboutData.ourStoryText4}
          </p>
          <br />
          <p>
            {aboutData.ourStoryText5}
          </p>
        </div>
      </section>
{/* 
      <!-- Our Story Section End -->

      <!-- meet our teams start --> */}
      <section className="teams">
        <h1>{aboutData.ourTeamTitle}</h1>
        <div className="our-teams">
          <div className="team">
            {aboutData.teamsList1.map((item) => (
            <div className={item.class}>
              <img src={item.imgLink} alt="" />
              <h2>{item.name}</h2>
              <h3>{item.post}</h3>
            </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- meet our teams end -->

      <!-- partner and Form section start --> */}

      <section className="partner-offer-and-form">
        <div className="white-card">
          <div className="offer-text">
            <h2>Become a Partner</h2>
            <p>
              Used and supported in over 178 countries <br />
              around the globe. <br />
              We’ll work with you to open more doors and <br />
              close more sales across all verticals.
            </p>
          </div>
          <div className="form">
            <form action="">
              <div className="first-row">
                <div className="firstname">
                  <label for="">First name</label><br />
                  <input type="text" placeholder="enter first name" />
                </div>
                <div className="lastname">
                  <label for="">Last name</label><br />
                  <input type="text" placeholder="enter last name" />
                </div>
              </div>

              <div className="form-control">
                <label for="">email</label><br />
                <input type="email" placeholder="enter email address" />
              </div>

              <div className="first-row">
                <div className="contact-number">
                  <label for="">Contact number</label><br />
                  <input type="number" placeholder="enter Contact number" />
                </div>
                <div className="device-count">
                  <label for="">Company</label><br />
                  <input type="text" placeholder="Your Company name" />
                </div>
              </div>

              <div className="form-control">
                <label for="">Your Country</label><br />
                <input type="text" placeholder="enter your country" /><br />
              </div>

              <div className="btn-privacy">
                <button className="form-btn" type="submit">Apply</button>
                <p><a href="">Privacy Policy</a></p>
              </div>
            </form>
          </div>

        </div>
        <div className="blue-card">
          <div className="blue-circle"></div>
        </div>
      </section>
{/* 
      <!-- Offer and Form section end -->

             <!-- footer part start --> */}

    </main>
    </>
    )
}

export default About;



