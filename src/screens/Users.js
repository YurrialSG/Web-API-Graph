import React, { useState, useEffect } from 'react'
import { Table, Button } from 'antd'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Nome',
        dataIndex: 'firstname',
        key: 'firstname',
    },
    {
        title: 'Sobrenome',
        dataIndex: 'lastname',
        key: 'lastname',
    },
    {
        title: 'E-mail',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Tipo de Usuário',
        dataIndex: 'role',
        key: 'role',
    },
];

export default function Users() {
    const [active, setActive] = useState(false)

    const { data, loading, refetch } = useQuery(gql`
        query allUsers {
            allUsers {
                id
                firstname
                lastname
                email
                password
                role
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
            <Table dataSource={data && data.allUsers} loading={loading} columns={columns} pagination={false} />
        </>
    )
}
