import React from 'react';
import '../../styles/footer.css'

export default class MenuCard extends React.Component {
    render() {
        return (
            <div className="footer-menu-card">
                <div className="footer-menu-card-title">
                    <p>{this.props.title}</p>
                </div>
                <div className="footer-menu-card-content">
                    <div className="footer-menu">
                        <a>This is a menu item</a>
                        <a>This is a menu item</a>
                        <a>This is a menu item</a>
                        <a>This is a menu item</a>
                        <a>This is a menu item</a>
                        <a>This is a menu item</a>
                    </div>
                </div>
            </div>
        );
    }
}