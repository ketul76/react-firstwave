import React from "react";
import './blog.css';

function Blog({blogData}){
    return(
        <>
        {/* // <!-- home section start --> */}
        <section className="bloghome">
            <div className="blogs">
                <div className="blogtexts">
                    <h4>{blogData.blogTitle}</h4>
                    {blogData.resourseHub.map((item) => (
                        <div className={item.class}>
                            <img src={item.imgLink} alt="truemark"/>
                            <p>{item.text1} <br/> {item.text2}</p>
                        </div>    
                    ))}
                    <div className="arrow">
                        <h1>{blogData.progressNumber}</h1>
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
                            <h2>{blogData.personalityTitle}</h2>
                            <h5>{blogData.personalityText}</h5>
                            <div className="view-more">
                               <button>{blogData.viewMoreBtn}</button>  
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
                    <h2>{blogData.blogsTitle}</h2>
                   <div className="blogs-btn">
                    {blogData.blogsBtns.map((item) => (
                        <button>{item}</button>
                    ))}
                        
                   </div>
                </div>

                <div className="blogs-all-cards swiper mySwiper">
                   <div className="swiper-wrapper">
                    {blogData.blogsCards.map((item) => (
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
                 
                </div>

                <div className="view">
                    <h3>{blogData.viewAll}</h3>
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