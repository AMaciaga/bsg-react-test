import React, { Component } from 'react'
import {Layout, Image} from 'antd'

import logo from './../../logo.png'
import { Link } from 'react-router-dom'

class WrapperWithHeader extends Component{
    render(){
        const { children,computedMatch, ...props } = this.props
        const { Header, Content, Footer} = Layout

        return(
            <Layout {...props} style={{minHeight: "100vh"}}>
                <Header >
                <Link className='header' to='/home'>
                    <Image preview={false} src={logo} alt={'logo'} width={48} />
                    <h2 style={{margin: '0px 8px'}}>Watch Videos</h2>
                </Link>
                </Header>
                <Content className='container'>
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
 export default WrapperWithHeader