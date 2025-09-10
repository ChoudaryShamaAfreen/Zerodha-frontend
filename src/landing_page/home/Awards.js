import React from 'react';

function Awards() {
    return ( 
       <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 p-5'>
<img src='media/largestBroker.svg' alt='award'></img>
            </div>
            <div className='col-6 p-5'>
<h2>Largest stock broker in India</h2>
<p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily
    by trading and investing in:
</p>
<div className='row'>
    <div className='col-6'>
<ul>
    <li><p>Futures and Options</p></li>
    <li><p>Commodity derivatives</p></li>
    <li><p>Currency derivatives</p></li>
</ul>
    </div>
    <div className='col-6'>
        <ul>
    <li><p>stocks&IPO's</p></li>
    <li><p>Direct mutual funds</p></li>
    <li><p>Bonds and Govt.securities</p></li>
</ul>
    </div>
</div>
<img src='media/pressLogos.png' alt='presslogos' style={{width:"90%"}}></img>
            </div>
        </div>
       </div>
     );
}

export default Awards;