import React from 'react';
import '../../styles/separator.css'

export default class BannerItem extends React.Component {
    render() {
        return (
            <div className="banner-item-wrapper">
                <div className="banner-item-image">
                    <img src={this.props.imageSource} height="50" width="50" />
                </div>
                <div className="banner-item-title">
                    <h3>{this.props.bannerTitle}</h3>
                </div>
                <div className="banner-item-content">
                    <p>
                        {this.props.bannerContent}
                    </p>
                </div>
            </div>
        );
    }
}