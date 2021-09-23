import React, { Component } from 'react'
import {Button, Image, Space} from 'antd'

import { signIn } from '../../APICalls/signInCall';
import Wrapper from '../Wrappers/Wrapper';
import logo from './../../logo.png'

import './Splash.less'


class Splash extends Component{

    render(){

        const _handleAnonymous = () =>{
            signIn()
            .then(response => {
                if(response.status === 200){
                    sessionStorage.setItem('isAnon',true)
                    sessionStorage.setItem('username',response.data.User.FullName)
                    sessionStorage.setItem('authToken',response.data.AuthorizationToken.Token)
                    this.props.history.push('/home')
                }
            })
            .catch(error => {
                console.log("login error", error);
            })
        }

        return(
            <>
             <Wrapper>
                <div className='centered container'>
                    <div className="logoContainer">
                        <Image preview={false} src={logo} alt={'logo'} width={100} />
                        <h1>Watch Videos</h1>
                    </div>
                    <div className="logoContainer" >
                        <Space size='large'>
                        <Button type="primary" size="large" href='/signIn'>Log In</Button>
                        <Button type="primary"  size="large" onClick={_handleAnonymous}>Anonymous Browsing</Button>
                        </Space>
                    </div>
                </div>
             </Wrapper>
            </>
        )
    }
}

export default Splash