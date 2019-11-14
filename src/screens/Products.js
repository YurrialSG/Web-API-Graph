import React, { useState, useEffect } from 'react'
import { Table, Button } from 'antd'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import ModalCreateProduct from '../components/ModalCreateProduct'

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
        title: 'Inserido por',
        dataIndex: 'username',
        key: 'username',
    },
];

export default function Products() {
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
