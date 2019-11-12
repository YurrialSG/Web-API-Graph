import React from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { Link, useHistory } from 'react-router-dom'
import './Register.scss'
function Register({ form: { getFieldDecorator, validateFields } }) {
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        history.push('/login')
    }

    return (
        <div className="register-wrapper">
            <Form onSubmit={handleSubmit}>
                <Form.Item className="nome">
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Digite seu nome!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Nome"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Digite seu email!' }],
                    })(
                        <Input
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="E-mail"

                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Digite sua senha!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Senha"
                        />,
                    )}
                </Form.Item>
                <Form.Item>

                    <div className="justify-between">
                        <Button type="primary" className="btnRegister" htmlType="submit">
                            Register
                        </Button>
                        Or 
                    <Link to="/login" className="btnSign">sign in</Link>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );

}

export default Form.create({ name: 'register' })(Register)