import React from 'react';
import NavBar from '../Utilities/NavBar/navbar';
import MyCarousel from './MyCarousel';
import './main.css';
import Img1 from'../../images/walpy_1700133745937.png'
const mainPage = () => {
  return (
    <div>
        <NavBar />
        <MyCarousel/>

        {/* rest of the main page content  */}

        {/* 1st section  */}
        <section className='sec-1'>
            <h2>Introducing India's Beloved Cooliewale<br></br> Service</h2>
            <h6>We are not an option we are a choice</h6>
            <p>Cooliewale is India's first and fastest growing <br></br>
            coolie services which digitializes the relation<br></br>
            - ship between coolies and passengers. </p>
        </section>

        {/* 2nd section  */}
        <section className='sec-1'>
            <h2>Safety for all</h2>
            <p>At Cooliewale, the well being of our
            passengers is above everything else.<br></br>
            We are constantly in pursuit of enhancing
            our safety measures to ensure <br></br>
            every Bahubali's lift is a pleasant
            and comfortable experience.</p>
            <p><a href='#'>Know more</a></p>
        </section> 

        {/* 3rd section  */}
        <section className='sec-1'>
          <div className='main-box'>
            <div class="container">
                <div className="image-text-wrapper">
                  <span>
                    <img src={Img1} 
                    style={{height:'35rem',width:'85rem',marginTop:'3rem'}}>
                  
                    </img>
                    <h3 className="overlay-text" style={{fontSize:'4.0rem'}}>Know Us Better</h3>
                  </span>
                </div>
                <p style={{color:'white'}}>We are here to revolutionize traditional baggage lifting mechanism and infrastructure at railway stations to ensure hassle free experiences for passengers.</p>
            </div>
            <div class="container">
                <div class="box">1</div>
                <div class="box">2</div>
                <div class="box">3</div>
            </div>
            {/* </div> */}

          {/* </div>  */}
          
        </div>
        </section>
        {/* 4th section  */}
        <section className='sec-1'>
        <h2>Safety for all</h2>
            <p>At Cooliewale, the well being of our
            passengers is above everything else.<br></br>
            We are constantly in pursuit of enhancing
            our safety measures to ensure <br></br>
            every Bahubali's lift is a pleasant
            and comfortable experience.</p>
            <p><a href='#'>Know more</a></p>
        </section>
        {/* 5th section  */}
        <section>

        </section>
        {/* 6th section  */}
        <section>

        </section>



    </div>
  );
};

export default mainPage;
