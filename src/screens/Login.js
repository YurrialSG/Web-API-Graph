import React from 'react'
import { Form, Icon, Input, Button, notification } from 'antd';
import { Link, useHistory } from 'react-router-dom'
import './Login.scss'
function Login({ form: { getFieldDecorator, validateFields, setFields } }) {
    const history = useHistory()
    
    function handleSubmit(e) {
        e.preventDefault()

        history.push('/home')
        notification.open({
            message: `Padaria Avenida`,
            description: `Olá Yuri, você está logado no sistema!`,
            duration: 10,
            icon: <Icon type="smile" style={{ color: '#108ee9' }} />
        })
    }

    return (
        <div className="login-wrapper">
            <Form onSubmit={handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your email!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="E-mail"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <div className="justify-between">
                        <Button type="primary" htmlType="submit" className="login-form-button btnLogin">
                            Log in
                        </Button>
                        Or
                    <Link to="/register" className="btnRegister">register now!</Link>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );

}

export default Form.create({ name: 'login' })(Login)