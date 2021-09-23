import React, { Component } from 'react'
import { Row, Col, Form, Input, Button, Card } from 'antd';

import { signIn } from '../../APICalls/signInCall';
import Wrapper from '../Wrappers/Wrapper';


class SignIn extends Component {

    onFinish = values => {
		const {username, password} = values
		signIn(username,password)
		.then(response => {
			if(response.status === 200){
				sessionStorage.setItem('isAnon',false)
				sessionStorage.setItem('username',response.data.User.FullName)
				sessionStorage.setItem('authToken',response.data.AuthorizationToken.Token)
				this.props.history.push('/home')
			}
		})
		.catch(error => {
			console.log("login error", error);
		})
		
    }

    onFinishFailed = errorInfo => {
        console.log('Failed:',errorInfo)
    }

    render(){
        return(
			<Wrapper>
				<div className='centered container'>
				<Card >
				<Form
					style={{ width: 400 }}
					name="basic"
					onFinish={this.onFinish}
					onFinishFailed={this.onFinishFailed}
					requiredMark = {false}
				>
					<Row>
						<Col span={20}>
							<Form.Item
								label="Username"
								labelCol={{ span: 24 }}
								wrapperCol={{ span: 24 }}
								name="username"
								rules={[{ required: true, message: 'Please enter username!' }]}>
								<Input placeholder={'enter username'} />
							</Form.Item>
						</Col>
					</Row>
					<Row>
						<Col span={20}>
							<Form.Item
								label="Password"
								labelCol={{ span: 24 }}
								wrapperCol={{ span: 24 }}
								name="password"
								rules={[{ required: true, message: 'Please enter password!!' }]}
							>
								<Input.Password placeholder={'enter password'} />
							</Form.Item>
						</Col>
					</Row>
					<Form.Item >
						<Row>
							<Col span={2}>
								<Button type="primary" htmlType="submit" >{'Sign In'}</Button>
							</Col>
						</Row>
					</Form.Item>
				</Form>
				</Card>
				</div>
			
			</Wrapper>

        )
    }
}

export default SignIn