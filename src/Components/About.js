import React from "react"
import './About.css';
function About() {
    return (
        <div className = 'about'>
            <div className="header">
                <img src="/images/cloud.png" className="cloud1"></img>
                <br/>
                <br/>
                <br/>
                <h1 className="header__Text">Step Back</h1>
                <h2 className="subheader">A place to just be</h2>
                <img src="/images/cloud.png" className="cloud2"></img>
                <img src="/images/logo2.png" className="mountain"></img>
            </div>
            <div className="what">
                <img className="teamwork" src="/images/teamwork.png"></img>
                <h3 className="h3">Hello</h3>
                <p className="p">Step Back Inns is a modern, upscale hospitality company that is passionate about ‘making moments’, recognising that small gestures make a big difference to our guests, our owners and our people. We do ordinary things in an extraordinary way – a philosophy that has defined our brand’s success from the very start.Our ratings are conducted by star critics: reviewers like you who join our Rewards for Rooms Program.</p>
                <hr/>
                <div className="team">
                    <h3 className="h3"> Meet the Team</h3>
                    <br/>
                    <img className="jonny" src="/images/Jonathan.jpeg"></img>
                    <h4 className="h4 left">Jonathan</h4>
                    <p className="p left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br/>
                    <br/>
                    <img className="deepti" src="/images/Deepti.jpeg"></img>
                    <h4 className="h4 right">Deepti</h4>
                    <p className="p right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br/>
                    <br/>
                    <img className="adi" src="/images/Adi.jpeg"></img>
                    <h4 className="h4 left">Adi</h4>
                    <p className="p left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <hr/>
                <h3 className="h3 con_deet">Get in Touch</h3>
                <h4 className="h4 con_deet">Lorem ipsum dolor sit amet, non elit.</h4>
                <p className="p con_deet">Lorem ipsum dolor sit amet, in quis, aenean amet. Phasellus sodales, tellus donec dui, ornare erat</p>
                <a class="btn" href="mailto:ap_monsoon2020@ashoka.edu.in">CONTACT US</a>
            </div>
            <div className="footer">
                <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </div>
            </div>
            
        </div>
    )
}

export default About
