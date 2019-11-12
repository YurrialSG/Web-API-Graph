import React, { useState } from 'react'
import { Table, Button } from 'antd';

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
    const [setActive] = useState(false)

    return (
        <>
            <Button type="primary" onClick={() => setActive(true)} style={{ marginBottom: 16 }}>
                Adicionar
            </Button>
            <Table columns={columns} pagination={false} />
        </>
    )
}
