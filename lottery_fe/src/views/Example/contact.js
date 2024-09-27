import React from 'react';
import '../../assets/css/lottery.scss';
import Iframe from 'react-iframe'


class Contact extends React.Component {
    render() {
        return (
            <>
                <div className="contact">
                    <div className="banner">
                        <h2>
                            <span className="t1">C</span>
                            <span className="t2">O</span>
                            <span className="t3">N</span>
                            <span className="t4">T</span>
                            <span className="t5">A</span>
                            <span className="t6">C</span>
                            <span className="t7">T</span>
                        </h2>

                    </div>
                    <div className="contact1">
                        <h3>INFORMATION</h3>
                        <div className="row infor">
                            <div className="col-md-4 ">
                                <h4>Ngô Nam Phong</h4>
                                <p><i class="fa fa-phone"></i>      : 0988656533</p>
                                <p><i class="fa fa-envelope"></i>: abc@gmail.com</p>
                                <p><i class="fa fa-address-book"></i> :BACHKHOA-APTECH</p>
                                <p><i class="fa fa-facebook"></i>: https://abcxyz.123</p>
                            </div>
                            <div className="col-md-4">
                                <h4>Nguyễn Văn Đại</h4>
                                <p><i class="fa fa-phone"></i> : 0988656533</p>
                                <p><i class="fa fa-envelope"></i>: abc@gmail.com</p>
                                <p><i class="fa fa-address-book"></i>:BACHKHOA-APTECH</p>
                                <p><i class="fa fa-facebook"></i>: https://abcxyz.123</p>
                            </div>
                            <div className="col-md-4">
                                <h4>Nguyễn Thành Trung</h4>
                                <p><i class="fa fa-phone"></i> : 0988656533</p>
                                <p><i class="fa fa-envelope"></i>: abc@gmail.com</p>
                                <p><i class="fa fa-address-book"></i>:BACHKHOA-APTECH</p>
                                <p><i class="fa fa-facebook"></i>: https://abcxyz.123</p>
                            </div>
                        </div>

                        <div className="map">
                            <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d465.4569610671831!2d105.78311952683903!3d21.046458453245112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3b4220c2bd%3A0x1c9e359e2a4f618c!2sB%C3%A1ch%20Khoa%20Aptech!5e0!3m2!1svi!2s!4v1671438660013!5m2!1svi!2s" width="100%" height="450" style="border:1;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Contact