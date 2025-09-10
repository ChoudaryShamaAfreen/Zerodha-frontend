import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id="supporthero">
            <div className='p-5' id='supportwrapper'>
                <h3>Support portal</h3>
                <a href=' '>Track tickets</a>
            </div>
            <div className='row p-3'>
            <div className='col-6' style={{paddingLeft:"100px",paddingBottom:"50px"}}>
                <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                <br></br>
                <input placeholder='Eg. how do i activate F&O,why is my order getting rejected..'></input>
                <br></br><br></br>
                <a href=' '>Track account Opening</a>&nbsp;&nbsp;
                <a href=' '>Track segment activation</a>&nbsp;&nbsp;
                <a href=' '>Intraday margins</a>&nbsp;&nbsp;
                <a href=' '>Kite user manual</a>
            </div>
            <div className='col-6' style={{paddingLeft:"100px"}}>
                <h1 className='fs-3'>Featured</h1>
                <ol>
                    <li><a href=' '>Current takeovers</a></li>
                    <li><a href=' '>Latest Intraday leverages</a></li>
                </ol>
            </div>
            </div>
        </section>
     );
}

export default Hero;