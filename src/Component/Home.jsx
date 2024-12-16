import React from 'react';
import SecBg from "../images/Sec6.jpg";
import Footer from "./Footer";
function Home() {
    return (
        <>
        <div style={{backgroundImage: `url(${SecBg})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height: "100vh", 
        display: "flex",
        }}>

            <div style={{color: "white", fontFamily: "sans-serif", fontSize: "20px"}}>kflajdkldjlkjafuiwehnhckjaffajouijckflhihnghkmcjkhclhiuchnvklhkhkjklhkcjkhkjcah
            hfdsfjkdhskhfdjkahjadfhjkfdhkjdfhkhfdjkahjkfhdakhfkdshkfsdhkjhfsdahiuhuhfdkhkhfkhnhkhkhfbhkhdvf
            afhfkdhkfbhdkhdskhnkhkdhkhhfdxkafhdjhfjhhakjhrhvyhkjhkhkhghhkhjksdfhkjfhdakhdfkshfdshkfdskhfkhfkdhkfhkhfjd
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Home;