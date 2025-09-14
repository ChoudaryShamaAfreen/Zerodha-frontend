import React from 'react';

function OpenAccount() {
    return ( 
       <div className="container p-5 mb-5">
        <div className='row text-center'>
            <h1 className='mt-5 p-3'>Open a Zerodha account</h1>
            <p className='p-3 fs-5'>Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&O trades.</p>
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}><a href="/signup" style={{textDecoration:"none",color:"white"}}>Signup for free</a></button>
        </div>
      </div>
     );
}

export default OpenAccount;