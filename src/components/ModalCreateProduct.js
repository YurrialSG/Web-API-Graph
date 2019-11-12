import React from 'react'
import { Modal, Form, Input, Icon } from 'antd';

function ModalCreateProduct({ active, setActive, form: { getFieldDecorator, validateFields, resetFields } }) {

    function onModalSubmit() {
        setActive(false)
    }
    console.log(active)

    return (
        <Modal
            title="Cadastro de Produto"
            visible={active}
            onOk={onModalSubmit}
            //confirmLoading={loading}
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