import React from "react";
import './header.css';

function Header({setActivePage}){
    return(
        <header>
<nav>
  <a onClick={() => setActivePage('home')}
    ><img className="logo-img" src="./product-images/header-logo.svg" alt="" /></a>
  <ul>
    <div className="menubar">
      <img src="./product-images/Menu.svg" alt="" />
    </div>

    <li><a onClick={() => setActivePage('product')}>Product</a></li>
    <li><a onClick={() => setActivePage('blog')}>blogs</a></li>
    <li><a onClick={() => setActivePage('post')}>Posts</a></li>
    <li><a onClick={() => setActivePage('about')}>About Us</a></li>
    <li><a onClick={() => setActivePage('legal')}>Legal Terms</a></li>
    <li><a onClick={() => setActivePage('signin')}>Log in</a></li>
    <div className="demo-btn">
      <button>Book a Demo</button>
    </div>
  </ul>
</nav>
</header>
)
}
 export default Header;