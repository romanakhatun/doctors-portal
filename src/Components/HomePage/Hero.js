import React from 'react';
import './Hero.css';
import masskGroup1 from '../images/MaskGroup1.png';

const Hero = () => {
    return (
        <section className="mainSection">
            <div className="sectionWrap">
                <div className="leftSection">
                    <h2>Your New Smile <br />Starts Here</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <a className="btn" href="/appointment">GET APPOINTMENT</a>
                </div>
                <div className="rightSection">
                    <img src={masskGroup1} alt="" />
                </div>

            </div>
        </section>
    );
};

export default Hero;