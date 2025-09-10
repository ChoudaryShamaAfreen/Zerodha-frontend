import React from 'react';

function LeftSection({imageurl,productname,productdescription,trydemo,learnmore,googleplay,appstore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'><img src={imageurl} alt="kite"></img></div>
                <div className='col-6 p-5 mt-5 '>
                    <h1>{productname}</h1>
                    <p>{productdescription}</p>
                    <div>
                        <a href={trydemo} style={{textDecoration:"none"}}>Try Demo</a>
                    <a href={learnmore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More</a>
                    </div>
                    <div className='mt-3'>
<a href={googleplay}><img src="media/googlePlayBadge.svg" alt="google"></img></a>
                    <a href={appstore} style={{marginLeft:"50px"}}><img src="media/appstoreBadge.svg" alt="appstore"></img></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;