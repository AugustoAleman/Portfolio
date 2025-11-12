import React from 'react';
import { Modal, Row, Col, Button } from 'react-bootstrap';
import '../assets/styles/footer.css';

const name = '</> OCTAVIO A.';

function ModalPrivacy(props) {
    return (
      <Modal className='modal'
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        data-bs-theme="dark"
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Privacy Policy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
        scrollable>
           <p>
            Privacy Policy<br></br>
            <br></br>
            Effective Date: 26th of August 2024<br></br>
            <br></br>
            1. Introduction<br></br>
            Your privacy is important. This Privacy Policy explains how we collect, use, and protect the personal information you provide when you visit our website and submit your contact information through the contact form.<br></br>
            <br></br>
            2. Information We Collect<br></br>
            We collect the following personal information through our contact form:<br></br>
            <br></br>
            <ul>
            <li>Name</li>
            <li>Last Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Message</li>
            </ul>
            This information is collected solely for the purpose of responding to your inquiries and communicating with you regarding your messages.<br></br>
            <br></br>
            3. How We Use Your Information<br></br>
            The information you provide will be used for the following purposes:<br></br>
            <br></br>
            <ul>
                <li>To respond to your inquiries and provide you with information about our services.</li>
                <li>To communicate with you regarding your submitted messages.</li>
                <li>To improve our website and services based on your feedback.</li>
            </ul>
            4. Data Storage and Protection<br></br>
            We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Your information is stored securely and is only accessible by authorized personnel.<br></br>
            <br></br>
            5. Sharing Your Information<br></br>
            We do not sell, trade, or otherwise transfer your personal information to outside parties. However, we may share your information with third-party service providers who assist us in operating our website or conducting our business, as long as those parties agree to keep your information confidential.<br></br>
            <br></br>
            6. Your Rights<br></br>
            You have the right to access, correct, or delete any personal information we hold about you. If you wish to exercise these rights, please contact us at oa.alemanesparza@gmail.com.<br></br>
            <br></br>
            7. Changes to This Privacy Policy<br></br>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page, and we encourage you to review this policy periodically.<br></br>
            <br></br>
            8. Contact Us<br></br>
            If you have any questions about this Privacy Policy or the data we collect, please contact us at:<br></br>
            <br></br>
            Octavio Augusto Aleman Esparza<br></br>
            oa.alemanesparza@gmail.com<br></br>
            <br></br>
            9. Consent<br></br>
            By using this website and submitting your contact information, you consent to the collection and use of your information as described in this Privacy Policy.
           </p>

            
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function ModalTerms(props) {
    return (
      <Modal className='modal'
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        data-bs-theme="dark"
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Terms of Use
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
        scrollable>
           <p>
           Terms of Use<br></br> Effective Date: 26th August 2024<br></br>
                <br></br>
                1. Acceptance of Terms<br></br> By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, you should not use this website.<br></br>
                <br></br>
                2. Intellectual Property<br></br> All content, including but not limited to text, graphics, images, logos, and software, on this website is the intellectual property of Octavio Augusto Aleman Esparza or is licensed to Octavio Augusto Aleman Esparza. This content is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content from this website without prior written consent from Octavio Augusto Aleman Esparza.<br></br>
                <br></br>
                3. Use of Content<br></br> You may view, download, and print content from this website for your personal, non-commercial use only, provided that you do not remove any copyright, trademark, or other proprietary notices. Any unauthorized use of the content on this website may violate intellectual property rights and other laws.<br></br>
                <br></br>
                4. User Conduct<br></br> You agree not to use this website for any unlawful purpose or in any way that could harm, disable, overburden, or impair the website or interfere with any other party's use and enjoyment of the website. You also agree not to obtain or attempt to obtain any materials or information through any means not intentionally made available or provided through the website.<br></br>
                <br></br>
                5. Limitation of Liability<br></br> To the fullest extent permitted by law, Octavio Augusto Aleman Esparza shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or related to your use of this website or the content on it. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.<br></br>
                <br></br>
                6. Disclaimer of Warranties<br></br> This website and its content are provided "as is" without any warranties of any kind, either express or implied. Octavio Augusto Aleman Esparza makes no representations or warranties regarding the accuracy, completeness, or reliability of the content on this website. You use this website at your own risk.<br></br>
                <br></br>
                7. External Links<br></br> This website may contain links to third-party websites. These links are provided for your convenience only. Octavio Augusto Aleman Esparza has no control over the content of these external websites and is not responsible for any damages or losses caused by your use of these websites.<br></br>
                <br></br>
                8. Changes to Terms of Use<br></br> Octavio Augusto Aleman Esparza reserves the right to modify these Terms of Use at any time. Any changes will be effective immediately upon posting on this page. Your continued use of the website after any changes to the Terms of Use will be deemed acceptance of those changes.<br></br>
                <br></br>
                9. Governing Law<br></br> These Terms of Use shall be governed by and construed in accordance with the laws of Mexico, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms of Use will be brought exclusively in the courts of Mexico.<br></br>
                <br></br>
                10. Contact Information<br></br> If you have any questions about these Terms of Use, please contact us at:<br></br> Octavio Augusto Aleman Esparza<br></br> oa.alemanesparza@gmail.com<br></br> 
            </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


function FooterComponent() {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShowPrivacy, setModalShowPrivacy] = React.useState(false);
    return(
        <div className='footer'>
           <Row className='top-footer'>
            <Col className = 'navbar-description'>
                    <h3 className = 'footer-title'>{ name }</h3>
                    <p className = 'footer-text'>Innovative Developer Creating Tomorrow's Scalable Technologies Today. My focus is on delivering robust, scalable software that meets the challenges of the digital world. Let's collaborate to bring cutting-edge ideas to life.</p>
                    <Row className='footer-email'><i className='bx bx-envelope'></i><p className = 'footer-text'> oa.alemanesparza@gmail.com</p></Row>
                </Col>
                <Row className='footer-media'>
                    <Col className = 'navbar-links'>
                        <h5 className = 'footer-subtitle'>Quick Links</h5>
                        <a href = '/' className = 'footer-link'>Home</a>
                        <a href = '/about' className = 'footer-link'>About Me</a>
                        <a href = '/contact' className = 'footer-link'>Contact</a>
                    </Col>
                    <Col className = 'navbar-links'>
                        <h5 className = 'footer-subtitle'>Links</h5>
                        <a className = 'footer-link' onClick={() => setModalShow(true)}>Terms of Use</a>
                        <a className = 'footer-link' onClick={() => setModalShowPrivacy(true)}>Privacy Policy</a>
                    
                    </Col>
                    <Col className = 'navbar-links'>
                        <h5 className = 'footer-subtitle'>Social Media</h5>
                        <Row className='navbar-socials'>
                            <a href='https://www.linkedin.com/in/augusto-aleman' style={{ '--j': 1 }}>
                                <i className='bx bxl-linkedin' ></i>
                            </a>
                            <a href='https://github.com/AugustoAleman' style={{ '--j': 2 }}>
                                <i className='bx bxl-github' ></i>
                            </a>
                            <a href = 'https://www.facebook.com/octavio.aleman.3557' style = {{'--j': 3}}>
                                <i className='bx bxl-facebook' ></i>
                            </a>
                        </Row>
                    </Col>
                </Row>
           </Row>
           <Row className='bottom-footer'>
            <hr className="separator"></hr>
                <p className = 'footer-text'>Designed and built by Octavio Aleman All Rights Reserved © 2024 | Made with React, Bootstrap and Flask</p>

           </Row>

           <ModalTerms
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <ModalPrivacy 
                show={modalShowPrivacy}
                onHide={() => setModalShowPrivacy(false)}
            />

        </div>
    );
}

export default FooterComponent;