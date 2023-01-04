import './signin.css';

function Signin(){
    return(
        <section>
        <div className="login">
         <div className="text">
           <div className="title-text">
            <img src="./images/logo.svg" alt=""/>
            <h1>Hey,<br/>Welcome back <br/>to <span>Opmentek!</span> </h1>
            <img className="design" src="./design.svg" alt=""/>
           </div>
        </div>
       
         <div className="form">
            <form action="">
                <h2>Login</h2>
                <div className="form-control">
                    <label for="username">Username</label><br/>
                    <input type="text" id="username" placeholder="enter your user name"/>
                </div>
                <div className="form-control">
                    <label for="password">Password</label><br/>
                    <input type="password" placeholder="enter password" />
                </div>
                <a href="./#">Forgot Password ?</a>
                <br/>
               <div className="btn">
                <button type="submit">Log in</button>
               </div>
                <p>Already have an account? <a href="./signup.html">Create an account</a></p>
            </form>
        </div>
    </div>
    </section>
    )
}

export default Signin;