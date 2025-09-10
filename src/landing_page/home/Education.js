import React from 'react';

function Education() {
    return ( 
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-6'>
                <img src='media/education.svg' alt='education' style={{width:"70%"}}></img>
            </div>
            <div className='col-6'>
                <h1 className='fs-2'>Free and open market Education</h1>
                <p>Varsity the largest stock market Education book in the world covering everything
                    from the basics to advanced trading
                </p>
                <a href=' ' style={{textDecoration:"none"}}>versity
                        <i class="fa-solid fa-arrow-right"></i></a>

         
                <p className='mt-5'>Varsity the largest stock market Education book in the world covering everything
                    from the basics to advanced trading</p>
                <a href=' ' style={{textDecoration:"none"}}>TradingQ&A
                        <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
);
}

export default Education;