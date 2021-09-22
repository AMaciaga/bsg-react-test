import React, { Component } from 'react'
import {Button, Image} from 'antd'

import logo from './../../logo.png'

import './Splash.less'
import WrapperWithoutHeader from '../Wrappers/WrapperWithoutHeader'

class Splash extends Component{
    render(){
        return(
            <WrapperWithoutHeader>
            
                <div className="logoContainer">
                    <Image preview={false} src={logo} alt={'logo'} width={100} />
                    <h1>Watch Videos</h1>
                </div>
                <div className="logoContainer" >
                    <Button type="primary" size="large" href='/signIn'>Log In</Button>
                    <Button type="primary"  size="large" href='/home'>Anonymous Browsing</Button>
                </div>
            
            </WrapperWithoutHeader>
        )
    }
}

export default Splash