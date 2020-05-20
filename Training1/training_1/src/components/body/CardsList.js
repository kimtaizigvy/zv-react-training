import React from 'react';
import '../../styles/card.css'
import ItemCard from './ItemCard';

export default class CardsList extends React.Component {
    render() {
        return (
            <div className="card-list-container">
                <div className="label-wrapper">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="card-list-wrapper">
                    <div className="card-container">
                        <ItemCard/>
                        <ItemCard/>
                        <ItemCard/>
                        <ItemCard/>
                        <ItemCard/>
                    </div>
                </div>
            </div>
        );
    }
}