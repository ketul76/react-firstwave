import React from "react";
import './companyleadership.css';

function CompanyLeadership(props){
   let companyLeaderData = props.companyLeadershipData;
    return(
        <>
              {/* <!-- company manager home page start --> */}
            <section className="manager">
                <div className="company-leader">
                    <div className="manager-img">
                        <img src="./company-leadership/manager.svg" alt=""/>
                    </div>
                    <div className="manager-text">
                        <h1>{companyLeaderData.manager}</h1>
                        <p>{companyLeaderData.managerDescription}</p>
                        <h6>{companyLeaderData.managerDescription}</h6>
                        <a href="./">{companyLeaderData.link}</a>
                        <div className="company-icons">
                            {companyLeaderData.socialIcons.map((item) => (
                                <a href="./"><img src={item.imgLink} alt={item.imgName}/></a>    
                            ))}
                        </div>
                    </div>
                </div>
                <div className="paragraph">
                    <p>{companyLeaderData.paragraph1}</p>
                    <br/>
                    <p>
                        {companyLeaderData.paragraph2}
                    </p>
                    <br/> 
                       <p>{companyLeaderData.paragraph3}</p>
                </div>
            </section>
    {/* <!-- company manager home page End -->

    <!-- manager-msg section start --> */}
            <section className="manager-quote">
                <div className="message">
                    <h1>{companyLeaderData.quotesMsg}</h1>
                    <p> {companyLeaderData.msgText1} <br/> {companyLeaderData.msgText2} <br/> {companyLeaderData.msgText3} <br/> {companyLeaderData.msgText4} <br/> {companyLeaderData.msgText5} <br/>  {companyLeaderData.msgText6}</p>
                    <h3>{companyLeaderData.managerName}</h3>
                    <h6>{companyLeaderData.post}</h6>

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