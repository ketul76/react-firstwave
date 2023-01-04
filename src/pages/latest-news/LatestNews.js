import React from "react";
import './latestnews.css';

function LatestNews(){
    return(
        <>
             {/* <!-- latest news Section start --> */}
    <section className="latest-news">
        <div className="latest-title">
            <h1>Latest news</h1>
            <a href="">see all news</a>
        </div>
        <div className="latestnews">
            <div className="news">
                <img src="./latest-news-images/news1.svg" alt="" />
                <div className="news-text">
                    <h3>Michal Kosinski is an Associate <br/> Professor in Organizational.</h3>
                    <p>We’re a team made up of individuals, with unconventional career paths military ... </p>
                    <a href="">Read More...</a>
                </div>
            </div>
            <div className="news">
                <img src="./latest-news-images/news2.svg" alt=""/>
                <div className="news-text">
                    <h3>Michal Kosinski is an Associate <br/> Professor in Organizational.</h3>
                    <p>We’re a team made up of individuals, with unconventional career paths military ... </p>
                    <a href="">Read More...</a>
                </div>
            </div>
        </div>
        <div className="arrows">
            <img src="./latest-news-images/leftarrow.svg" alt="" />
            <img src="./latest-news-images/rightarrow.svg" alt="" />
        </div>
    </section>
    {/* <!-- Latest news Section End --> */}

            {/* <!-- Our Blogs  Section Start --> */}
            <section className="our-blogs">
                <div className="Ellipse1">
                 <img src="./blog-images/left1.svg"  alt=""/>
                </div>
     
                     <div className="blog-header">
                         <h2>Blogs</h2>
                        <div className="blogs-btn">
                             <button>Blogs</button>
                             <button>Webinars</button>
                             <button>Enterprise</button>
                             <button>Prodcasts</button>
                             <button>White Papers</button>
                             <button>Case Studies</button>
                        </div>
                     </div>
     
                     <div className="blogs-all-cards ">
                         <div className="all-cards ">
                             <img src="./blog-images/blog-1.svg" alt=""/>
                             <h3>Reasoning Ability</h3>
                             <p>Check your reasoning abilities.</p>
                             <p>Discover the top traits that help you excel and determine your work fit.</p>
                             <div className="read-more">
                                <div className="right-arrow">
                                 <button>Read More</button>
                                 <img className="readmore" src="./blog-images/readmore.svg" alt=""/>
                                </div>
                                <p>30 Min</p>
                             </div>
                         </div>
                         <div className="all-cards ">
                             <img src="./blog-images/blog-2.svg" alt=""/>
                             <h3>Personality Assessment</h3>
                             <p>Discover the top traits that help you excel and determine your work fit.</p>
                             <p>Check your reasoning abilities.</p>
                             <div className="read-more">
                                <div className="right-arrow">
                                 <button>Read More</button>
                                 <img className="readmore" src="./blog-images/readmore.svg" alt=""/>
                                </div>
                                <p>30 Min</p>
                             </div>
                         </div>
                         <div className="all-cards ">
                             <img src="./blog-images/blog-3.svg" alt=""/>
                             <h3>Cope Inventory</h3>
                             <p>Discover the top traits that help you excel and determine your work fit.</p>
                             <p>Check your reasoning abilities.</p>
                             <div className="read-more">
                                <div className="right-arrow">
                                  <button>Read More</button>
                                     <img className="readmore" src="./blog-images/readmore.svg" alt=""/>
                                </div>
                                <p>30 Min</p>
                             </div>
                         </div>
                         <div className="all-cards1 ">
                             <img src="./blog-images/blog-4.svg" alt=""/>
                             <h3>Entrepreneurial Personality</h3>
                             <p>Get a clean picture of yourself with insighhtsthis.</p>
                             <div className="read-more">
                                <div className="right-arrow">
                                 <button>Read More</button>
                                 <img className="readmore" src="./blog-images/readmore.svg" alt=""/>
                                </div>
                             </div>
                         </div>
                     </div>
     
                <div className="Ellipse2">
                 <img src="./blog-images/right2.svg" alt=""/>
                </div>
             </section>
         {/* <!-- Our Blogs  Section End --></div> */}
        </>
    )
}

export default LatestNews;