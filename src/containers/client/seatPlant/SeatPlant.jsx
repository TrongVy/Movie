import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { USER_LOGIN } from 'settings/apiConfig'

export default class seatPlant extends Component {
  
    render() {
        // if(!localStorage.getItem(USER_LOGIN)){
        //     return <Redirect to="/login"/>
        // }
        return (
            <div className="" style={{marginTop:"100px"}}>
                seat plant
            </div>
        )
    }
}
