import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Layout, Image} from 'antd'

import logo from './../../logo.png'

import './Wrapper.less'

class Wrapper extends Component{
    render(){
        const { children,computedMatch, header, ...props } = this.props
        const { Header, Content, Footer} = Layout
        const username = sessionStorage.getItem('username')

        return(
            <Layout {...props} style={{minHeight: "100vh"}}>
                {header && 
                <Header className='header'>
                    <Link className='link' to='/'>
                        <Image preview={false} src={logo} alt={'logo'} width={48} />
                        <h2 style={{margin: '0px 8px'}}>Watch Videos</h2>
                    </Link>
                    <h3 style={{margin: '0px'}}>Welcome {username}!</h3>
                </Header>
                }
                <Content style={{display:'flex'}}>
                    {children}
                </Content>
                <Footer style={{textAlign : 'center'}}>
                    <div>Watch Videos &copy; 2021</div>
                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </Footer>
            </Layout>     
        )
    }

}
Wrapper.defaultProps = {
    header: false
}
 export default Wrapper