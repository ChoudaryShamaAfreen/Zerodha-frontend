import React from 'react';

function Hero() {
    return (  
        <div className='container'>
            <div className='row p-5 mt-5 border-bottom text-center'>
                <h1 className='fs-3'>Charges</h1>
                <p className='text-muted mt-3'>List of all Charges and taxes</p>
            </div>
            <div className='row mt-5 p-5 text-center'>
                <div className='col-4 p-4'>
<img src="media/pricingEquity.svg" alt="rupees"></img>
<h1 className='fs-3'>Free equity delivery</h1>
<p className='text-muted mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src="media/intradayTrades.svg"  alt="rupees"></img>
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className='text-muted mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src="media/pricingEquity.svg"  alt="rupees"></img>
<h1 className='fs-3'>Free direct MF</h1>
<p className='text-muted mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;