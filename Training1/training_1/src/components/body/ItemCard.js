import React from 'react';
import '../../styles/card.css'
import cardImage from '../../images/original.jpeg'


export default class ItemCard extends React.Component {
    render() {
        return (
            <div className="card-item-container">
                <div className="card-item-image">
                    <img src={cardImage} height="230" width="230" className="card-item-image"/>
                </div>
                <div className="card-item-info">
                    <p className="item-title">ARGENTINA</p>
                    <p className="item-content">Tango Concert with Latin Grammy Nominee</p>
                    <p className="item-content">Từ $10/người · 1.5 giờ</p>
                    <p className="item-content">4.99 (391) TRỰC TUYẾN</p>
                </div>
            </div>
        );
    }
}