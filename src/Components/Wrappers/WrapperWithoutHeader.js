import React, { Component } from 'react'
import {Layout} from 'antd'

import './Wrapper.less'

class WrapperWithoutHeader extends Component{
    render(){
        const { children,computedMatch, ...props } = this.props
        const { Content, Footer} = Layout

        return(
            <Layout {...props} style={{minHeight: "100vh"}}>
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
 export default WrapperWithoutHeader