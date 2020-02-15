import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal/';
import WaterWave from 'react-water-wave';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
class Banner extends Component {
    render(){
        let jhonData = this.props.jhonData;
        let {bClass, textLeft, imag}= this.props;
        return(
            <section id="home" >
                 <WaterWave strength={1} interactive={false} className={`banner_area ${bClass}`} style={{ width: '100%', height: '100%', backgroundSize: 'cover' }} imageUrl={require ("../../image/" + imag)}>
                        {({ getRootProps}) => (
                             <div className="container">
                                <div className={`banner_content ${textLeft}`}>
                                    <Reveal effect="fadeInUp">
                                        <h5>Hello,</h5>
                                    </Reveal>
                                    <Reveal  effect="fadeInUp" duration={1500}>
                                        <h2 className="wow fadeInLeft animated">I am {jhonData.name}</h2>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={2200}>
                                        <h4 className="wow fadeInUp anoimated">Software Engineer & Educator</h4>
                                    </Reveal>
                                    <ul className="list_style social_icon">
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
                                </div>
                            </div>
                        )}
                </WaterWave>
            </section>
        );
    }
}

export default Banner;
