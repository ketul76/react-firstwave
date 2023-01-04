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

function Layout(){
    const [activePage,setActivePage] = useState('home');
    return(
        <>
        <Header activePage={activePage} setActivePage={setActivePage} />
         {activePage === 'home' && <Home/>}
         {activePage === 'about' && <About/>}
         {activePage === 'blog' && <Blog/>}
         {activePage === 'legal' && <Legal/>}
         {activePage === 'post' && <PostPage/>}
         {activePage === 'product' && <ProductPage/>}
         {activePage === 'signin' && <Signin/>}   
        <Footer/>
            {/* <SignUp/> */}
            {/* <CompanyLeadership/> */}
            {/* <Financial/> */}
            {/* <LatestNews/> */}
        </>
    )
}

export default Layout;