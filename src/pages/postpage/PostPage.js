import './postpage.css';

function PostPage({postData}){
    return(
        <>
{/* <!-- Main Part Start -->
      <!-- PostPage Home section Start --> */}

      <section className="Home">
        <div className="homes">
          <div className="hometext">
            <h1>{postData.postTitle1} <br/> {postData.postTitle2} <br/> {postData.postTitle3} <br/> {postData.postTitle4}</h1>
            <p>
              {postData.postParagraph1} <br/> {postData.postParagraph2} <br/>{postData.postParagraph3} <br/> {postData.postParagraph4}
            </p>
            <h6>{postData.postMsg}</h6>
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
                        <h3>{postData.ansQueTitle1}</h3>
                        <p>{postData.ansQueParagraph1} <span><a href="./"> {postData.link1} <br/>  {postData.link2}</a> </span></p>
                    </div>
                    <div className="answer-questions">
                        <h3>{postData.ansQueTitle2}</h3> 
                        <p>{postData.ansQueParagraph2} <br/> {postData.ansQueParagraph3} <br/> {postData.ansQueParagraph4} <br/> {postData.ansQueParagraph5} <span> <a href="./"> {postData.link3}</a> </span></p>
                    </div>
                    <div className="answer-questions">
                        <h3>{postData.ansQueTitle3}</h3>
                        <p>{postData.ansQueParagraph6}<br/> {postData.ansQueParagraph7} <br/>  {postData.ansQueParagraph8}</p>
                    </div>
                    <div className="answer-questions">
                        <h3>{postData.ansQueTitle4}</h3>
                        <p>{postData.ansQueParagraph9} <br/> {postData.ansQueParagraph10} <br/> {postData.ansQueParagraph11}</p>
                    </div>
                </div>
                <div className="subscribe">
                    <h4>{postData.subscribeTitle}</h4>
                    <label for="email">{postData.emailLabel}</label><br/>
                    <input type="email" placeholder="enter your email" id="email"/><br/>
                    <div className="subscribe-btn">
                        <button type="submit">{postData.subscribeBtn}</button>
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
                     <h2>{postData.blogsTitle}</h2>
                    <div className="blogs-btn">
                    {postData.blogsBtns.map((item) => (
                        <button>{item}</button>
                    ))}
                    </div>
                 </div>
 
                 <div className="blogs-all-cards ">
                 {postData.blogsCards.map((item) => (
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
             <img src="./blog-images/right2.svg" alt="" />
            </div>
         </section>
     {/* <!-- Our Blogs  Section End --> */}
        </>
    )
}


export default PostPage;