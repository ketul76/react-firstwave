import './postpage.css';

function PostPage(){
    return(
        <>
{/* <!-- Main Part Start -->
      <!-- PostPage Home section Start --> */}

      <section className="Home">
        <div className="homes">
          <div className="hometext">
            <h1>Using Configuration <br/> Management to <br/> Detect Unwanted <br/> Software</h1>
            <p>
              Lorem Ipsum do eiusmod tempor incididunt ut <br/> labore et dolore magna
              aliqua. Ut enim ad minim nostrud <br/> exercitation ullamco
              laboris nisi ut aliquip ex ea commodo <br/> consequat.
            </p>
            <h6>by Emily Coe</h6>
          </div>

          <div className="homeimg">
            <div className="mainimg">
              <img className="main-img" src="./post-images/homeimg.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- PostPage Home section End --> */}

      {/* <!-- Postpage Questions section --> */}

        <section className="question-page">
            <div className="questions-subscribe">
                <div className="questions">
                    <div className="answer-questions">
                        <h3>Is the Log4Shell or Log4J vulnerability an issue for Opmantek?</h3>
                        <p>No. Opmantek products do not use Java or Log4J, see more details here: <span><a href="">Opmantek <br/>  Products and Apache Log4J Vulnerability.</a> </span></p>
                    </div>
                    <div className="answer-questions">
                        <h3>What is the Log4Shell Vulnerability? </h3> 
                        <p>The Log4Shell is a zero-day vulnerability in Log4J, which allows attackers to execute <br/> arbitrary Java code on the remote computers, including accessing sensitive <br/> information.  The CVSS score is 10, the highest possible score.  You can read more <br/> details here: <span> <a href=""> Log4Shell – Wikipedia.</a> </span></p>
                    </div>
                    <div className="answer-questions">
                        <h3>What is Apache Log4J?</h3>
                        <p>Apache Log4J is a popular libr/ary used by many products written in Java.  It provides a <br/> consistent way for applications to log messages including information, debug, errors, <br/>  etc.  It has become the primary way Java applications do logging and is widely used.</p>
                    </div>
                    <div className="answer-questions">
                        <h3>How can Opmantek help you find computers that are using Log4J?</h3>
                        <p>Log4J is a Java libr/ary which means that there are files installed onto the computer <br/> which Java loads when it runs the program.  You can search for these files using Linux <br/> commands and determine if the files exist on the server.</p>
                    </div>
                </div>
                <div className="subscribe">
                    <h4>Stay up to Date</h4>
                    <label for="email">Email</label><br/>
                    <input type="email" placeholder="enter your email" id="email"/><br/>
                    <div className="subscribe-btn">
                        <button type="submit">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
{/* 
      <!-- Postpage Questions End -->

        <!-- Our Blogs  Section Start --> */}
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
                             <img className="readmore" src="./blog-images/readmore.svg" alt="" />
                            </div>
                            <p>30 Min</p>
                         </div>
                     </div>
                     <div className="all-cards ">
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
                     <div className="all-cards ">
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
                     <div className="all-cards1 ">
                         <img src="./blog-images/blog-4.svg" alt="" />
                         <h3>Entrepreneurial Personality</h3>
                         <p>Get a clean picture of yourself with insighhtsthis.</p>
                         <div className="read-more">
                            <div className="right-arrow">
                             <button>Read More</button>
                             <img className="readmore" src="./blog-images/readmore.svg" alt="" />
                            </div>
                         </div>
                     </div>
                 </div>
 
            <div className="Ellipse2">
             <img src="./blog-images/right2.svg" alt="" />
            </div>
         </section>
     {/* <!-- Our Blogs  Section End --> */}
        </>
    )
}


export default PostPage;