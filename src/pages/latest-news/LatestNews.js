import React from "react";
import './latestnews.css';

function LatestNews({latestNewsData}){
    return(
        <>
             {/* <!-- latest news Section start --> */}
    <section className="latest-news">
        <div className="latest-title">
            <h1>{latestNewsData.title}</h1>
            <a href="/">{latestNewsData.link}</a>
        </div>
        <div className="latestnews">
            {latestNewsData.news.map((item) => (
                <div className={item.class}>
                <img src={item.imgLink} alt="" />
                <div className="news-text">
                    <h3>{item.name1} <br/> {item.name2}</h3>
                    <p>{item.intro}</p>
                    <a href="./">{item.link}</a>
                </div>
            </div>    
            ))}
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
                         <h2>{latestNewsData.blogsTitle}</h2>
                        <div className="blogs-btn">
                             {latestNewsData.blogsBtns.map((item) => (
                                <button>{item}</button>
                             ))}
                             
                        </div>
                     </div>
     
                     <div className="blogs-all-cards ">
                     {latestNewsData.blogsCards.map((item) => (
                    <div className={item.class}>
                        <img src={item.imgLink} alt="" />
                        <h3>{item.blogTitle}</h3>
                        <p>{item.text1}</p>
                        <p>{item.text2}</p>
                        <div className="read-more">
                           <div className="right-arrow">
                            <button>{item.btn}</button>
                            <img className={item.imgClass} src={item.imgLink2} alt="" />
                           </div>
                           <p>{item.time}</p>
                        </div>
                    </div>    
                    ))}
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