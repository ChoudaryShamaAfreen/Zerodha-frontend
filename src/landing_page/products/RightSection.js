import React from 'react';

function RightSection({productname,productdescription,learnmore,imageurl}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5' style={{marginTop:"100px"}}>
                    <h1 className='fs-3'>{productname}</h1>
                    <p className='mt-3'>{productdescription}</p>
                    <a href={learnmore} style={{marginTop:"10px", textDecoration:"none"}}>Learn More</a>
                </div>
                <div className='col-6'>
                    <img src={imageurl} alt="coin"></img>
                </div>
            </div>
        </div>
        
     );
}

export default RightSection;