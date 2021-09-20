import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './seatPlant.scss'
export default class Interval extends Component {
    state = {
        count: 180
    }
    render() {
        return (
            <>
                <span>{this.state.count} S</span>
                {this.state.count === 0 ? <div className="interval">
                    <div className="interval__content">
                        <Link className="btn btn-info" onClick={this.props.clickInterval}>Bạn Đã Hết Thời Gian Đặt Vé</Link>
                    </div>
                </div> : ""}
            </>
        )
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            if (this.state.count > 0) {
                this.setState((prevState) => ({
                    count: prevState.count - 1
                }))
            }
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
}
