import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal/';
import SectionTitleTwo from '../component/Banner/SectionTitleTwo';
class ContactTwo extends Component {
    render(){
        return(
            <section className="contact-area contact-area-two bg_color" id="contacts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="get_info">
                                <SectionTitleTwo stitle="Get in Touch" btitle="Talk or Meet with Me"/>
                                <div className="media get_item">
                                    <i className="flaticon-phone"></i>
                                    <div className="media-body">
                                        <h6>Call Me Now</h6>
                                        <a href=".#">02934567845</a>
                                    </div>
                                </div>
                                <div className="media get_item">
                                    <i className="flaticon-chat"></i>
                                    <div className="media-body">
                                        <h6>Contact Me</h6>
                                        <a href=".#">john@gmail.com</a>
                                    </div>
                                </div>
                                <div className="media get_item">
                                    <i className="flaticon-pin"></i>
                                    <div className="media-body">
                                        <h6>Get Me Here</h6>
                                        <p>Z105 - London, UK</p>
                                    </div>
                                </div>
                                <div className="media get_item">
                                    <i className="flaticon-sound"></i>
                                    <div className="media-body">
                                        <h6>Listen To Me</h6>
                                        <a href=".#">john.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <Reveal effect="fadeInRight" duration={800}>
                                <div className="input_form">
                                    <SectionTitleTwo stitle="Contact us" btitle="Let me know here Know Here"/>
                                    <form action="contact_process.php" id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" id="name" name="name" className="form-control" placeholder="Your Name*"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="email" className="form-control" id="email" name="email" placeholder="Your Email*"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject*"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone*"/>
                                            </div>
                                        </div>
                                        <textarea name="message" id="message" className="form-control" rows="6" placeholder="Your Message ..."></textarea>
                                        <button type="submit" className="btn send_btn theme_btn">Send Message</button>
                                    </form>
                                    <div id="success">Your message succesfully sent!</div>
                                    <div id="error">Opps! There is something wrong. Please try again</div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactTwo;