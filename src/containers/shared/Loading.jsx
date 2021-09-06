import React, { Component } from 'react'
import Lottie from 'react-lottie';
import * as loading from '../../loading.json'
import './loading.scss'
export default class Loading extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: loading.default,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
        return (
            <div className="loading" >
              <Lottie options={defaultOptions} height={320} width={320}/>
            </div>
        )
    }
}
