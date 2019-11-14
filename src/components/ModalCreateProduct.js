import React from 'react'
import { Modal, Form, Input, Icon, notification } from 'antd'
import { useMutation } from 'react-apollo'
import gql from 'graphql-tag'

function ModalCreateProduct({ active, setActive, form: { getFieldDecorator, validateFields, resetFields } }) {

    const [mutate, { loading }] = useMutation(gql`
    mutation createProduct($data: CreateProductInput!) {
        createProduct(data: $data) {
            id
            barcode
            description
            pricekg
            produced
        }
    }
`)

    function onModalSubmit() {
        validateFields(async (err, values) => {
            if (!err) {
                //const user = JSON.parse(localStorage.getItem('user'))

                const { data, errors } = await mutate({
                    variables: {
                        data: {
                            ...values,
                            //user: {
                                //id: +user.id
                            //}
                        }
                    }
                })
                if (!errors) {
                    notification.success({
                        message: `Produto ${data.createProduct.description} cadastrado com sucesso!`
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
            title="Cadastro de Produto"
            visible={active}
            onOk={onModalSubmit}
            confirmLoading={loading}
            onCancel={() => setActive(false)}
        >
            <Form>
                <Form.Item>
                    {getFieldDecorator('barcode', {
                        rules: [{ required: true, message: 'Digite o código de barra do produto' }],
                    })(
                        <Input
                            prefix={<Icon type="barcode" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Código de Barra"
                            type="number"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('description', {
                        rules: [{ required: true, message: 'Digite o nome do produto' }],
                    })(
                        <Input
                            prefix={<Icon type="message" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Descrição"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('pricekg', {
                        rules: [{ required: true, message: 'Digite o Preço/Kg do produto' }],
                    })(
                        <Input
                            prefix={<Icon type="gold" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Preço/Kg"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('produced', {
                        rules: [{ required: true, message: 'Digite a data de fabricação do produto' }],
                    })(
                        <Input
                            prefix={<Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Data de Fabricação"
                        />,
                    )}
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default Form.create({ name: 'create-product' })(ModalCreateProduct)