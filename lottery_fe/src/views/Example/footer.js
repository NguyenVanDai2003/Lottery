import React from 'react';
import '../../assets/css/lottery.scss';


class Footer extends React.Component {
    render() {
        return (
            <>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <h3 className="footer__title">ABOUT</h3>
                                <ul>
                                    <li><a href="">Contact</a></li>
                                    <li><a href="">Brand</a></li>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">Community</a></li>
                                    <li><a href="">Litepaper</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3 className="footer__title">HELP</h3>
                                <ul>
                                    <li><a href="">Customer support</a></li>
                                    <li><a href="">Troubleshooting</a></li>
                                    <li><a href="">Guides</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3 className="footer__title">DEVELOPER</h3>
                                <ul>
                                    <li><a href="">Github</a></li>
                                    <li><a href="">Documentation</a></li>
                                    <li><a href="">Bug Bounty</a></li>
                                    <li><a href="">Audis</a></li>
                                    <li><a href="">Creers</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <img src={require('../../assets/images/footer.PNG')} className="img-responsive" alt="Image" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 icon">
                            <a><i className="fa fa-instagram"></i></a>
                            <a><i className="fa fa-twitter"></i></a>
                            <a><i className="fa fa-facebook"></i></a>
                            <a><i className="fa fa-paper-plane"></i></a>
                            <a><i className="fa fa-github"></i></a>
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                        <hr></hr>
                    </div>
                </div>

                
            </>
        )
    }
}

export default Footer;