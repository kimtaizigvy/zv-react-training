import React from 'react';
import '../../styles/slider.css'


export default class Slider extends React.PureComponent {
    render() {
        return (
            <div className="slider">
                <img
                    srcSet={"https://a0.muscache.com/im/pictures/8d6a6fa8-343b-43f1-94da-ceee166f0767.jpg?im_w=1920"}
                    alt="slider img"
                    className="slider-image"
                    height="400"
                    width="1500"
                />
                <div className="slider-content-wrapper">
                    <p className="slider-intro">giới thiệu</p>
                    <p className="slider-title">Trải nghiệm trực tuyến</p>
                    <p className="slider-content">
                        Các hoạt động độc đáo mà chúng ta có thể cùng nhau trải nghiệm, dưới sự dẫn dắt của rất nhiều người tổ chức.
                    </p>
                </div>
            </div>
        );
    }
}