import React from "react";
import './blog.css';

function Blog(){
    return(
        <>
        {/* // <!-- home section start --> */}
        <section className="bloghome">
            <div className="blogs">
                <div className="blogtexts">
                    <h4>Resource Hub</h4>
                    <div className="blogtext">
                        <img src="./blog-images/truemark.svg" alt="truemark"/>
                        <p>Read the latest insights from Opmantek <br/>   engineering about Open-AudIT.</p>
                    </div>
                    <div className="blogtext">
                        <img src="./blog-images/truemark.svg" alt="truemark"/>
                        <p>Network Management Information System <br/> (NMIS) and the Opmantek suite of products.</p>
                    </div>
                    <div className="blogtext">
                        <img src="./blog-images/truemark.svg" alt="truemark" />
                        <p>Share your results with potential employers <br/>
                            to display your strengths and unique fit.</p>
                    </div>
                    <div className="arrow">
                        <h1>01/05</h1>
                        <div className="left-right">
                            <img src="/blog-images/leftarrow.svg" alt="" />
                            <img src="./blog-images/rightarrow.svg" alt="" />
                        </div>
                    </div>
                    <div className="line">
                        {/* <!-- <img src="./blog-images/blackline.svg" alt="">
                        <img className="whiteline" src="./blog-images/whiteline.svg" alt=""> --> */}
                        <progress max="5" value="1"></progress>
                    </div>
                </div>

                <div className="blog-background">
                    <div className="blogimg">
                        <img className="bg2" src="./blog-images/blog-bg-2.svg" alt="" />
                        <div className="blogcard">
                            <img className="bg1" src="/blog-images/blog-bg-1.svg" alt="" />
                            <h2>Personality Assessment</h2>
                            <h5>Understand yourself well with specific insights into your personality and character.</h5>
                            <div className="view-more">
                               <button>View More</button>  
                                <img src="/blog-images/right-blck.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </section>
    {/* <!-- home section end --> */}
    
    {/* <!-- Our Blogs  Section Start --> */}
        <section className="our-blogs">
            <div className="Ellipse1">
            <img src="./blog-images/left1.svg"  alt="" />
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

                <div className="blogs-all-cards swiper mySwiper">
                   <div className="swiper-wrapper">
                    <div className="all-cards swiper-slide">
                        <img src="./blog-images/blog-1.svg" alt="" />
                        <h3>Reasoning Ability</h3>
                        <p>Check your reasoning abilities.</p>
                        <p>Discover the top traits that help you excel and determine your work fit.</p>
                        <div className="read-more">
                           <div className="right-arrow">
                            <button>Read More</button>
                            <img className="readmore" src="./blog-images/readmore.svg" alt="" />
                           </div>
                           <p>30 Min</p>
                        </div>
                    </div>
                    <div className="all-cards swiper-slide">
                        <img src="./blog-images/blog-2.svg" alt="" />
                        <h3>Personality Assessment</h3>
                        <p>Discover the top traits that help you excel and determine your work fit.</p>
                        <p>Check your reasoning abilities.</p>
                        <div className="read-more">
                           <div className="right-arrow">
                            <button>Read More</button>
                            <img className="readmore" src="./blog-images/readmore.svg" alt="" />
                           </div>
                           <p>30 Min</p>
                        </div>
                    </div>
                    <div className="all-cards swiper-slide">
                        <img src="./blog-images/blog-3.svg" alt="" />
                        <h3>Cope Inventory</h3>
                        <p>Discover the top traits that help you excel and determine your work fit.</p>
                        <p>Check your reasoning abilities.</p>
                        <div className="read-more">
                           <div className="right-arrow">
                             <button>Read More</button>
                                <img className="readmore" src="./blog-images/readmore.svg" alt="" />
                           </div>
                           <p>30 Min</p>
                        </div>
                    </div>
                    <div className="all-cards1 swiper-slide">
                        <img src="/blog-images/blog-4.svg" alt="" />
                        <h3>Entrepreneurial <br/> Personality</h3>
                        <p>Get a clean picture of <br/> yourself with insights into your <br/> personality and character.</p>
                        <div className="read-more">
                           <div className="right-arrow">
                            <button>Read More</button>
                            <img className="readmore" src="./blog-images/readmore.svg" alt="" />
                           </div>
                        </div>
                    </div>
                   </div>
                 
                </div>

                <div className="view">
                    <h3>View All</h3>
                </div>

            <div className="Ellipse2">
            <img src="./blog-images/right2.svg" alt="" />
           </div> 
        </section>
    {/* <!-- Our Blogs  Section End --> */}
    </>
    )
}


export default Blog;