import React from 'react';


function Footer() {
    return (
        <>
        <div className='bg-dark' style={{color: "gold", fontFamily: "sans-serif", fontSize: "15px"}}>
           

        {/* ICONS */}
        <div className='d-flex justify-content-between'>
            <span>
                Logo
            </span>
            <div>
                <a href="https://www.instagram.com/" style={{color: "gold"}}><i className="fa-brands fa-instagram mx-2"></i></a> 
                <a href="https://ar-ar.facebook.com/" style={{color: "gold"}}><i class="fa-brands fa-facebook mx-2"></i> </a>
                <a href="https://shorturl.at/vAE6K" style={{color: "gold"}}><i className="fa-brands fa-twitter mx-2"></i></a>
            </div> 
        </div>

        {/* copy right */}
        <div className='d-flex justify-content-center'>©️ 2024 Berimbolo.All rights reserved.    <div className='mx-2'>Privacy Policy</div>   <div className='mx-2'>Term Service</div> </div>

        </div>

        </>
    );
}

export default Footer;