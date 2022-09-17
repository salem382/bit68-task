import {Row, Col, Container} from 'react-bootstrap';
import './footer.scss';

const Footer = () => {

    return (
        <section className="footer text-center">
            <Container>
                <Row>
                    <Col>
                        <img src='/imgs/header/logo.svg' alt='footer-item'/>
                    </Col>
                    <Col>
                        <img src='/imgs/header/logo.svg' alt='footer-item'/>
                    </Col>
                    <Col>
                        <img src='/imgs/header/logo.svg' alt='footer-item'/>
                    </Col>
                    <Col>
                        <img src='/imgs/header/logo.svg' alt='footer-item'/>
                    </Col>
                </Row>
                <p className='pt-4 m-0 text-white'>Copyright &copy; 2022 - All rights reserved</p>
            </Container>
        </section>
    )
}

export default Footer;