import React from 'react'
import { Modal, Form, Input, Icon, notification } from 'antd'
import { useMutation } from 'react-apollo'
import gql from 'graphql-tag'

function ModalCreateUser({ active, setActive, form: { getFieldDecorator, validateFields, resetFields } }) {

    const [mutate, { loading }] = useMutation(gql`
        mutation createUser($data: CreateUserInput!) {
            createUser(data: $data) {
                id
                firstname
                lastname
                email
                password
                role
            }
        }
`)

    function onModalSubmit() {
        validateFields(async (err, values) => {
            if (!err) {
                const { errors } = await mutate({
                    variables: {
                        data: { ...values, role: "USER" }
                    }
                })

                if (!errors) {
                    notification.success({
                        message: 'Usuário cadastrado com sucesso!',
                        style: {
                            width: 450,
                            marginLeft: 160 - 200,
                            marginTop: 50,
                        },
                    })
                    setActive(false)
                    resetFields()
                }
            }
        })
    }
    console.log(active)

    return (
        <Modal
            title="Cadastro de Usuário"
            visible={active}
            onOk={onModalSubmit}
            confirmLoading={loading}
            onCancel={() => setActive(false)}
        >
            <Form>
                <Form.Item>
                    {getFieldDecorator('firstname', {
                        rules: [{ required: true, message: 'Digite o nome do usuário' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Nome"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('lastname', {
                        rules: [{ required: true, message: 'Digite o sobrenome do usuário' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Sobrenome"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Digite o e-mail do usuário' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="E-mail"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Digite a senha do usuário' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Senha"
                            type="password"
                        />,
                    )}
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default Form.create({ name: 'create-user' })(ModalCreateUser)