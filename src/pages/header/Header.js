import React from "react";
import './header.css';

function Header({setActivePage,headerData}){
  const navUpdate = setActivePage;
    return(
        <header>
<nav>
  <a href="./" onClick={() => navUpdate('home')}
    ><img className="logo-img" src="./product-images/header-logo.svg" alt="" /></a>
  <ul>
    <div className="menubar">
      <img src="./product-images/Menu.svg" alt="" />
    </div>
  {headerData.hederLinksName.map((item) => (
    <li><a  onClick={() => navUpdate(item.navLink)}>{item.navName}</a></li>
  ))}
    <div className="demo-btn">
      <button>Book a Demo</button>
    </div>
  </ul>
</nav>
</header>
)
}
 export default Header;