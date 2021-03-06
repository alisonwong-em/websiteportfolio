import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import './About.scss';
import aboutPic from '../../assets/img/aboutImg.jpg';
import square from '../../assets/img/square.svg';

class About extends Component {
    render() {
        return (
                <Box className="aboutContainer" id="about">
                    <Box className="picContainer" >
                        <img src={aboutPic} id="aboutPic" alt=""></img>
                        <img src={square} id="square" alt=""></img>
                    </Box>
                    <Box className="bioContainer">
                        <div className="leftAlign name">Alison Wong</div>
                        <div className="leftAlign">I’m a Systems Design Engineering student at the University of Waterloo (class of 2021) with an eye for design and a passion for development to create the best user experience for products.
                                <br /><br />
                            Outside of school and work, you might catch me singing with the <a className="hyperlink" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/TheAcaBellas">UW AcaBellas</a>, jamming out to guitar, or doodling <a className="hyperlink" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/aw.doodles/">“hello”</a> on pieces of paper.
                            <br /><br />
                        <span>Shoot me a message so we can chat!</span>
                        </div>
                        
                    </Box>
                </Box>
            )
    }
}

export default About;
