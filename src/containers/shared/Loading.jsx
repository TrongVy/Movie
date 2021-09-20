import React, { Component } from 'react'
import './loading.scss'
export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <h2>
          {/* <img style={{borderRadius:"50%"}} height={300} width={300} src="https://cdn.dribbble.com/users/108183/screenshots/2301400/spinnervlll.gif" alt="" /> */}
          <img style={{ borderRadius: "50%" }} height={300} width={300} src="https://cdn.dribbble.com/users/2346349/screenshots/9246147/media/06971345603f8422d664fa0ea362b3a5.gif" alt="" />
        </h2>
      </div>
    )
  }
}
