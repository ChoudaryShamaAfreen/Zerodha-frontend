import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';



 function ProductPage() {
    return (  
        <>
        <Hero></Hero>
        <LeftSection imageurl="media/kite.png" productname="Kite" productdescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." trydemo="" learnmore="" googleplay="" appstore=""></LeftSection>
       <RightSection productname="Console" productdescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnmore="" imageurl="media/console.png">
       </RightSection>
       <LeftSection imageurl="media/coin.png" productname="Coin" productdescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." trydemo="" learnmore="" googleplay="" appstore=""></LeftSection>
       
        <RightSection productname="Kite Connect API" productdescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnmore="" imageurl="media/kiteconnect.png">
       </RightSection>
       <LeftSection imageurl="media/varsity.png" productname="Varsity Mobile" productdescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." trydemo="" learnmore="" googleplay="" appstore=""></LeftSection>
       <Universe></Universe>
        </>
    );
 }
 
 export default ProductPage;