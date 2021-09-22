import React, { Component } from 'react'

import { Row, Col, Form, Input, Button, Card } from 'antd';
import WrapperWithoutHeader from '../Wrappers/WrapperWithoutHeader';


class SignIn extends Component {

    onFinish = values => {
        console.log('Success:', values)
		this.props.history.push('/home')
    }
    onFinishFailed = errorInfo => {
        console.log('Failed:',errorInfo)
    }
    render(){
        return(
			<WrapperWithoutHeader>
           
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
								name="userName"
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
								name="userPassword"
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
			
			</WrapperWithoutHeader>

        )
    }
}

export default SignIn