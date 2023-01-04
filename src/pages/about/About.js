import React from "react";
import './about.css';

function About(){
    return(
    <>

    <main>
    
      <section className="about-us">
        <div className="aboutuspages">
          <div className="about-page-texts">
            <h1>About Us</h1>
            <h4>
              Who are we? Opmantek is a team <br />
              of talented individuals working together to <br />
              make software people love.
            </h4>
            <p>
              We develop multi-award winning <br />
              enterprise-className software that helps IT <br />
              teams audit IT environments.
            </p>
            <div className="demo-btn about-btns">
              <button>Contact Us</button>
              <button className="book-demo">Book a Demo</button>
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
        <h1>Locations</h1>
        <div className="ourlocations">
          <div className="allLocation">
            <div className="location">
              <img
                className="mainimg"
                src="./aboutus-images/locations/location-1.svg"
                alt=""
              />
              <div className="locationtext">
                <h3>Head Office and USA West Coast</h3>
                <div className="contacts-address">
                  <img src="./aboutus-images/call.svg" alt="" />
                  <p>+1 (415) 322 2479</p>
                </div>
                <div className="contacts-address">
                  <img src="./aboutus-images/message.svg" alt="" />
                  <p>contact@opmantek.com</p>
                </div>
                <div className="contacts-address">
                  <img src="./aboutus-images/location.svg" alt="" />
                  <p>
                    One Harbor Drive, Suite 300, Sausalito, CA, 94965 United
                    States of America
                  </p>
                </div>
              </div>
            </div>
            <div className="location">
              <img
                className="mainimg"
                src="./aboutus-images/locations/location-2.svg"
                alt=""
              />
              <div className="locationtext">
                <h3></h3>
                <div className="contacts-address">
                  <img src="./aboutus-images/call.svg" alt="" />
                  <p>+1 (415) 322 2479</p>
                </div>
                <div className="contacts-address">
                  <img src="./aboutus-images/message.svg" alt="" />
                  <p>contact@opmantek.com</p>
                </div>
                <div className="contacts-address">
                  <img src="./aboutus-images/location.svg" alt="" />
                  <p>
                    One Harbor Drive, Suite 300, Sausalito, CA, 94965 United
                    States of America
                  </p>
                </div>
              </div>
            </div>
            <div className="location">
              <img
                className="mainimg"
                src="./aboutus-images/locations/location-3.svg"
                alt=""
              />
              <div className="locationtext">
                <h3>Head Office and USA West Coast</h3>
                <div className="contacts-address">
                  <img src="./aboutus-images/call.svg" alt="" />
                  <p>+1 (415) 322 2479</p>
                </div>
                <div className="contacts-address">
                  <img src="./aboutus-images/message.svg" alt="" />
                  <p>contact@opmantek.com</p>
                </div>
                <div className="contacts-address">
                  <img src="./aboutus-images/location.svg" alt="" />
                  <p>
                    One Harbor Drive, Suite 300, Sausalito, CA, 94965 United
                    States of America
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="allLocation">
            <div className="location">
              <img
                className="mainimg"
                src="./aboutus-images/locations/location-4.svg"
                alt=""
              />
              <div className="locationtext">
                <h3>Head Office and USA West Coast</h3>
                <div className="contacts-address">
                  <img src="./aboutus-images/call.svg" alt="" />
                  <p>+1 (415) 322 2479</p>
                </div>
                <div className="contacts-address">
                  <img src="./aboutus-images/message.svg" alt="" />
                  <p>contact@opmantek.com</p>
                </div>
                <div className="contacts-address">
                  <img src="./aboutus-images/location.svg" alt="" />
                  <p>
                    One Harbor Drive, Suite 300, Sausalito, CA, 94965 United
                    States of America
                  </p>
                </div>
              </div>
            </div>
            <div className="location">
              <img
                className="mainimg"
                src="./aboutus-images/locations/location-5.svg"
                alt=""
              />
              <div className="locationtext">
                <h3>Head Office and USA West Coast</h3>
                <div className="contacts-address">
                  <img src="./aboutus-images/call.svg" alt="" />
                  <p>+1 (415) 322 2479</p>
                </div>
                <div className="contacts-address">
                  <img src="./aboutus-images/message.svg" alt="" />
                  <p>contact@opmantek.com</p>
                </div>
                <div className="contacts-address">
                  <img src="./aboutus-images/location.svg" alt="" />
                  <p>
                    One Harbor Drive, Suite 300, Sausalito, CA, 94965 United
                    States of America
                  </p>
                </div>
              </div>
            </div>
            <div className="location">
              <img
                className="mainimg"
                src="./aboutus-images/locations/location-6.svg"
                alt=""
              />
              <div className="locationtext">
                <h3>Head Office and USA West Coast</h3>
                <div className="contacts-address">
                  <img src="./aboutus-images/call.svg" alt="" />
                  <p>+1 (415) 322 2479</p>
                </div>
                <div className="contacts-address">
                  <img src="./aboutus-images/message.svg" alt="" />
                  <p>contact@opmantek.com</p>
                </div>
                <div className="contacts-address">
                  <img src="./aboutus-images/location.svg" alt="" />
                  <p>
                    One Harbor Drive, Suite 300, Sausalito, CA, 94965 United
                    States of America
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Location section End -->

      <!-- Company Section Start --> */}

      <section className="our-customer-companies">
        <h4>Trusted By over 150,000 Companies including:</h4>
        <div className="companies">
          <div className="companies-list">
            <img
              src="./product-images/companies/bloomberg.svg"
              alt="bloomberg"
            />
            <img
              src="./product-images/companies/standford.svg"
              alt="standford"
            />
            <img
              src="./product-images/companies/cambridge.svg"
              alt="cambridge"
            />
            <img
              src="./product-images/companies/microsoft.svg"
              alt="microsoft"
            />
            <img src="./product-images/companies/ETh.svg" alt="ETh" />
            <img src="./product-images/companies/stitch.svg" alt="stitch" />
          </div>
          <div className="companies-list">
            <img src="./product-images/companies/google.svg" alt="google" />
            <img src="./product-images/companies/opengv.svg" alt="opengv" />
            <img src="./product-images/companies/allgero.svg" alt="allgero" />
            <img src="./product-images/companies/amazone.svg" alt="amazone" />
            <img src="./product-images/companies/circleup.svg" alt="circleup" />
            <img
              src="./product-images/companies/yellowlogo.svg"
              alt="yellowlogo"
            />
          </div>
        </div>
      </section>

      {/* <!-- Company Section End -->

      <!-- product-feature section Start --> */}

      <section className="productfeatures">
        <h4>Why Top Companies use NMIS 9</h4>
        <div className="product-features">
          <div className="product-feature-lists">
            <div className="products">
              <img
                src="./product-images/product-feature/car-engine1.svg"
                alt="car-engine1"
              />
              <h2>Sophisticated Business Rules</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </p>
            </div>
            <div className="products">
              <img
                src="./product-images/product-feature/think-out-of-the-box1.svg"
                alt="car-engine1"
              />
              <h2>Pre-Configured Out-of-the-</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </p>
            </div>
            <div className="products">
              <img
                src="./product-images/product-feature/maximize1.svg"
                alt="car-engine1"
              />
              <h2>Massively Scalable</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </p>
            </div>
          </div>

          <div className="product-feature-lists product-list2">
            <div className="products">
              <img
                src="./product-images/product-feature/visibility1.svg"
                alt="car-engine1"
              />
              <h2>Visible Operational Impact</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </p>
            </div>
            <div className="products">
              <img
                src="./product-images/product-feature/heart-monitoring1.svg"
                alt="car-engine1"
              />
              <h2>Automated Health Live</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </p>
            </div>
            <div className="products">
              <img
                src="./product-images/product-feature/setting1.svg"
                alt="car-engine1"
              />
              <h2>Customizable Alert Escalation</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </p>
            </div>
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
                Our FirstWave support engineers are highly skilled <br />
                and experienced in NMIS, Open-AudIT and all of our <br />
                commercial products and helped customers from <br />
                Telcos, MSP, enterprise organisations.
              </h3>
              <h4>
                We work closely with you during implementation <br />
                and rollout, as well as post delivery of our solutions. <br />
                as well as post delivery of our solutions.
              </h4>
            </div>
            <div className="story-img">
              <img src="./aboutus-images/story-img.svg" alt="" />
            </div>
          </div>

          <p>
            Our FirstWave support engineers are highly skilled and experienced
            in NMIS, Open-AudIT and all of our commercial products and helped
            customers from Telcos, MSP, enterprise organisations.Our FirstWave
            support engineers are highly skilled and experienced in NMIS,
            Open-AudIT and all of our commercial products and helped customers
            from Telcos, MSP, enterprise organisations..
          </p>
          <br />
          <p>
            Our FirstWave support engineers are highly skilled and experienced
            in NMIS, Open-AudIT and all of our commercial products and helped
            customers from Telcos, MSP, enterprise organisations.
          </p>
          <br />
          <p>
            Our FirstWave support engineers are highly skilled and experienced
            in NMIS, Open-AudIT and all of our commercial products and helped
            customers from Telcos, MSP, enterprise organisations.Our FirstWave
            support engineers are highly skilled and experienced in NMIS,
            Open-AudIT and all of our commercial products and helped customers
            from Telcos, MSP, enterprise organisations.Our FirstWave support
            engineers are highly skilled and experienced in NMIS, Open-AudIT and
            all of our commercial products and helped customers from Telcos,
            MSP, enterprise organisations.
          </p>
          <br />
          <p>
            Our FirstWave support engineers are highly skilled and experienced
            in NMIS, Open-AudIT and all of our commercial products and helped
            customers from Telcos, MSP, enterprise organisations.
          </p>
          <br />
          <p>
            We’re tired with recruiting and we know it can be done better. We’re
            starting with juniors and tech.
          </p>
        </div>
      </section>
{/* 
      <!-- Our Story Section End -->

      <!-- meet our teams start --> */}
      <section className="teams">
        <h1>Meet Our Team Leaders</h1>
        <div className="our-teams">
          <div className="team">
            <div className="member">
              <img src="./aboutus-images/our-team/member-1.svg" alt="" />
              <h2>Michal Kosinski</h2>
              <h3>General Manager</h3>
            </div>
            <div className="member">
              <img src="./aboutus-images/our-team/member-2.svg" alt="" />
              <h2>Michal Kosinski</h2>
              <h3>Community Manager</h3>
            </div>
            <div className="member">
              <img src="./aboutus-images/our-team/member-3.svg" alt="" />
              <h2>Michal Kosinski</h2>
              <h3>Community Manager</h3>
            </div>
          </div>
          <div className="team">
            <div className="member">
              <img src="./aboutus-images/our-team/member-4.svg" alt="" />
              <h2>Michal Kosinski</h2>
              <h3>General Manager</h3>
            </div>
            <div className="member">
              <img src="./aboutus-images/our-team/member-5.svg" alt="" />
              <h2>Michal Kosinski</h2>
              <h3>Community Manager</h3>
            </div>
            <div className="member">
              <img src="./aboutus-images/our-team/member-6.svg" alt="" />
              <h2>Michal Kosinski</h2>
              <h3>Community Manager</h3>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- meet our teams end -->

      <!-- partner and Form section start --> */}

      <section className="offer-and-form">
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



