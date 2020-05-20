import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            isCounterRunning: false,
            isCounterPaused: false
        }
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    countingDown = () => {
        var countDown = setInterval(() => {
            var result = this.state.number - 1
            if (result > -1 && !this.state.isCounterPaused) {
                this.setState({
                    number: result
                })
            } else if (this.state.isCounterPaused) {
                clearInterval(countDown)
            } else if (result <= -1) {
                clearInterval(countDown)
                this.setState({
                    isCounterRunning: false
                })
            }
        }, 1000)
    }

    onStartClick = () => {
        if (this.state.number > 0) {
            this.setState({
                isCounterRunning: true
            }, () => {
                this.countingDown()
            })
        }
    }

    onStopClick = () => {
        this.setState({
            number: 0,
            isCounterRunning: false,
            isCounterPaused: false
        })
    }

    onTextChanged(event) {
        this.setState({
            number: event.target.value
        })
    }

    onPauseClick = () => {
        this.setState({
            isCounterPaused: true
        })
    }

    onResumeClick = () => {
        this.setState({
            isCounterPaused: false
        }, () => {
            this.countingDown()
        })
    }

    renderCounterButtons = () => {
        return (
            <>
                <button
                    style={{ height: 30, marginRight: 10 }}
                    onClick={this.onStopClick}
                >
                    STOP
                </button>
                <button
                    style={{ height: 30, marginRight: 10 }}
                    onClick={this.state.isCounterPaused ? this.onResumeClick : this.onPauseClick}
                >
                    {this.state.isCounterPaused ? "RESUME" : "PAUSE"}
                </button>
            </>
        )
    }

    renderStartButton = () => {
        return (
            <button
                style={{ height: 30, marginRight: 10 }}
                onClick={this.onStartClick}
            >
                START
            </button>
        )
    }

    render() {
        return (
            <div
                style={{
                    height: 1000,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                }}>
                <p style={{ fontSize: 70, color: '#000' }}>{this.state.number || 0}</p>

                <input
                    name="countInput"
                    type="number"
                    value={this.state.number}
                    onChange={this.onTextChanged}
                    hidden={this.state.isCounterRunning}
                />

                <div
                    style={{
                        display: 'flex',
                        height: 100,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    {
                        this.state.isCounterRunning
                            ? (this.renderCounterButtons())
                            : (this.renderStartButton())
                    }
                </div>
            </div >
        );
    }
}