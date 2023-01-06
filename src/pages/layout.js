import React,{useState} from "react";
import Home from "./home/Home";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Blog from "./blog/Blog";
import CompanyLeadership from "./companyleadership/CompanyLeadership";
import About from "./about/About";
import Financial from "./financial/Financial";
import LatestNews from "./latest-news/LatestNews";
import Legal from "./legal/Legal";
import PostPage from "./postpage/PostPage";
import ProductPage from "./productpage/ProductPage";
import Signin from "./signin/Signin";
import SignUp from "./signup/SignUp";
import data from "../data";

function Layout(){
    const [activePage,setActivePage] = useState('home');
    return(
        <>
        {/* <Header activePage={activePage} setActivePage={setActivePage} headerData= {data.header} />
         {activePage === 'home' && <Home homeData = {data.homePage} />}
         {activePage === 'about' && <About aboutData = {data.about} />}
         {activePage === 'blog' && <Blog blogData = {data.blogPage}/>}
         {activePage === 'legal' && <Legal legalData = {data.LegalPage}/>}
         {activePage === 'post' && <PostPage postData = {data.postPage}/>}
         {activePage === 'product' && <ProductPage productData = {data.productPage}/>}
         {activePage === 'signin' && <Signin/>}   
        <Footer footerData = {data.footer}/> */}
            {/* <SignUp/> */}
            {/* <CompanyLeadership  companyLeadershipData= {data.companyLeaderShipPage} /> */}
            <Financial financialData = {data.financialPage} />
            {/* <LatestNews latestNewsData = {data.latestNewsPage}/> */}
        </>
    )
}

export default Layout;