import React from 'react';

function Hero() {
    return ( 
      <div className="container p-5 mb-5">
        <div className='row text-center'>
            <img src='media/Homehero.png' alt='home_hero' className='mb-5'></img>
            <h1 className='mt-5'>Invest in everything</h1>
            <p>Online platform to invest in stocks ,derivatives,mutual funds</p>
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>
              <a href="/signup" style={{textDecoration:"none",color:"white"}}>Signup Now</a></button>
        </div>
      </div>
     );
}

export default Hero;