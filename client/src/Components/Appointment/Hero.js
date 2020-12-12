import React from 'react';
import maskGroup1 from '../images/MaskGroup1.png';

const Hero = () => {
    return (
        <section className="mainSection">
            <div className="sectionWrap">
                <div className="leftSection">
                    <h2>Appoinment</h2>
                </div>
                <div className="rightSection">
                    <img src={maskGroup1} alt="" />
                </div>

            </div>
        </section>
    );
};

export default Hero;