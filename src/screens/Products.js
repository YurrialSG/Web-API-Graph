import React, { useState, useEffect } from 'react'
import { Icon, Divider, Table, Button, notification, Popconfirm } from 'antd'
import { useQuery, useMutation } from 'react-apollo'
import gql from 'graphql-tag'
import ModalCreateProduct from '../components/ModalCreateProduct'

export default function Products() {

    const columns = [
        {
            title: 'Código de Barra',
            dataIndex: 'barcode',
            key: 'barcode',
        },
        {
            title: 'Descrição',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Preço por Kg',
            dataIndex: 'pricekg',
            key: 'pricekg',
        },
        {
            title: 'Produção',
            dataIndex: 'produced',
            key: 'produced',
        },
        {
            title: 'Ações',
            key: 'action',
            render: (data) => (
                <span>
                    <Button><Icon type="edit" style={{ color: '#108ee9' }} /></Button>
                    <Divider type="vertical" />
                    <Popconfirm title="Certeza que deseja excluir?"
                        onConfirm={() => handleDelete(data['id'])}
                    >
                        <Button><Icon type="delete" style={{ color: '#108ee9' }} /></Button>
                    </Popconfirm>
                </span>
            )
        },
    ];

    async function handleDelete(id) {
        const { errors } = await mutationDelete({
            variables: {
                id: id
            }
        })

        if (!errors) {
            console.log('ID Product: ' + id);
            notification.success({
                message: `Produto de ID: '${id}' excluido com sucesso!`,
                style: {
                    width: 500,
                    marginLeft: 100 - 200,
                    marginTop: 50,
                },
            })
            refetch()
        }
    }

    const [active, setActive] = useState(false)

    const { data, loading, refetch } = useQuery(gql`
        query allProducts {
            allProducts {
                id
                barcode
                description
                pricekg
                produced
            }
        }
    `)

    const [mutationDelete] = useMutation(gql`
        mutation deleteProduct($id: ID!) {
            deleteProduct(id: $id)
        }  
    `)

    useEffect(() => {
        refetch()
    }, [active, refetch])

    return (
        <>
            <Button type="primary" onClick={() => setActive(true)} style={{ marginBottom: 16 }}>
                Adicionar
            </Button>
            <Table dataSource={data && data.allProducts} loading={loading} columns={columns} pagination={false} />
            <ModalCreateProduct active={active} setActive={setActive} />
        </>
    )
}