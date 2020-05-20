import React from 'react';
import logo from '../../images/580b57fcd9996e24bc43c513.png'

export default class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <div className="App-logo">
                    <img src={logo} alt="web_logo" height="50" width="200" style={{marginLeft:20}} />
                </div>
                <div className="header-menu">
                    <ul className="menu">
                        <a className="menu-item">Cho thuê nhà</a>
                        <a className="menu-item">Tổ chức trải nghiệm</a>
                        <a className="menu-item">Trợ giúp</a>
                        <a className="menu-item">Đăng nhập</a>
                        <a className="menu-item">Đăng ký</a>
                    </ul>
                </div>
            </header>
        );
    }
}