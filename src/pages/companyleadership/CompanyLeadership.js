import React from "react";
import './companyleadership.css';

function CompanyLeadership(){
    return(
        <>
              {/* <!-- company manager home page start --> */}
            <section className="manager">
                <div className="company-leader">
                    <div className="manager-img">
                        <img src="./company-leadership/manager.svg" alt=""/>
                    </div>
                    <div className="manager-text">
                        <h1>Manager</h1>
                        <p>Michal Kosinski is an Associate Professor in Organizational Behavior at Stanford’s Graduate School of Business and studies job-person fit and humans using cutting-edge computational methods.</p>
                        <h6>Michal Kosinski is an Associate Professor in Organizational Behavior at Stanford’s Graduate School of Business and studies job-person fit and humans using cutting-edge computational methods.</h6>
                        <a href="">Read More...</a>
                        <div className="company-icons">
                            <a href=""><img src="./company-leadership/fb.svg" alt="icons"/></a>
                            <a href=""><img src="./company-leadership/tw.svg" alt="icons"/></a>
                            <a href=""><img src="./company-leadership/ln.svg" alt="icons"/></a>
                            <a href=""><img src="./company-leadership/ig.svg" alt="icons"/></a>
                        </div>
                    </div>
                </div>
                <div className="paragraph">
                    <p>Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.. </p>
                    <br/>
                    <p>
                        Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.
                    </p>
                    <br/> 
                       <p> Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.</p>
                </div>
            </section>
    {/* <!-- company manager home page End -->

    <!-- manager-msg section start --> */}
            <section className="manager-quote">
                <div className="message">
                    <h1>Quotes</h1>
                    <p>We had an incredible experience working with Landify and were <br/> impressed they made such a big difference in only three weeks. Our <br/> team is so grateful for the wonderful improvements they made and their <br/> ability to get familiar with the product concept so quickly. It acted as a <br/> catalyst to take our design to the next level and get more eyes on our <br/> product.</p>
                    <h3>Scarlett Johansson</h3>
                    <h6>Manager</h6>

                    <div className="mark">
                        <img src="./company-leadership/quotes.svg" alt="" />
                    </div>
                </div>
            </section>
    {/* <!-- manager-msg section End --> */}
    </>
    )
}

export default CompanyLeadership;