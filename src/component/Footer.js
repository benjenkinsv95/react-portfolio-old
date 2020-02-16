import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component{
    render(){
        let jhonData = this.props.jhonData;
        return(
            <section className="footer-area">
                <div className="container">
                    <div className="footer-content">
                        <Link to="/" className="logo wow fadeInDown" data-wow-delay="0.4s">
                            <img src={require('../image/logo_white.png')} alt=""/>
                        </Link>
                        <Fade top cascade>
                            <ul className="list_style">
                                <li>
                                        <a href="https://www.linkedin.com/in/benjenkinsv95/">
                                            <i class="social_linkedin"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a  href='https://github.com/benjenkinsv95'>
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/benjenkinsv95">
                                            <i class="social_twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a  href="mailto:benjenkinsv95@gmail.com">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </a>
                                    </li>
                            </ul>
                        </Fade>
                        
                        <h6></h6>
                        <p>© {new Date().getFullYear()} Ben Jenkins - All Rights Reserved</p>
                    </div>
                </div>
            </section>
        )
    }
}
export default Footer;