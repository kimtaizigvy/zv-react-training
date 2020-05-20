import React from 'react';
import '../../styles/footer.css'
import MenuCard from './MenuCard';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-container">
                <div className="footer-menu-container">
                    <MenuCard title="Giới thiệu" />
                    <MenuCard title="Cộng đồng" />
                    <MenuCard title="Đón tiếp khách" />
                    <MenuCard title="Hỗ trợ" />
                </div>
                <div className="footer-signature">
                    <div className="footer-signature-container">
                        <div className="footer-left">
                            <p>© 2020 Airbnb, Inc. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}