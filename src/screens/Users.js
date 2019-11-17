import React, { useState, useEffect } from 'react'
import { Icon, Divider, Table, Button, notification, Popconfirm } from 'antd'
import { useQuery, useMutation } from 'react-apollo'
import gql from 'graphql-tag'
import ModalCreateUser from '../components/ModalCreateUser'

export default function Users() {

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
            console.log('ID User: ' + id);
            notification.success({
                message: `Usuário de ID: '${id}' excluido com sucesso!`,
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

    const [mutationDelete] = useMutation(gql`
        mutation deleteUser($id: ID!) {
            deleteUser(id: $id)
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
            <ModalCreateUser active={active} setActive={setActive} />
        </>
    )
}
