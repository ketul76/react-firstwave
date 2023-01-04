import './signup.css';

function SignUp(){
    return(
        <section>
        <div className="login">
         <div className="text">
           <div className="title-text">
            <img src="./images/logo.svg" alt=""/><br/>
            <img className="design1" src="./design1.svg" alt=""/>
            <h1>We are <span>Opmentek.</span> <br/>So are you.</h1>
            <p>Join to improve your job search, yourself, and <br/> more. Get started by creating a free account!</p><br/>
            <p>We’re creating a service that puts you front <br/> and center in your career.</p>
           </div>
        </div>
       
         <div className="sign-form">
            <form action="">
                <h2>Create a personal account</h2>
                <div className="form-control">
                    <label for="username">Username</label><br/>
                    <input type="text" id="username" placeholder="enter your user name" />
                </div>
                <div className="form-control">
                    <label for="password">Password</label><br/>
                    <input type="password" placeholder="enter password"/>
                </div>
               <div className="btn">
                <button type="submit">Sign Up</button>
               </div>
                <p>Already have an account? <a href="./signin.html">Log in</a></p>
                <h6>By signing up, you agree to OPMENTEK's <br/>
                   <a href="./">Terms and Conditions.</a> </h6>
            </form>
        </div>
    </div>
    </section>
    )
}


export default SignUp;