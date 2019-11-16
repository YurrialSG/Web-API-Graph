import React, { useState } from 'react'
import { Icon, Divider, Table, Button } from 'antd'
// import { useQuery } from 'react-apollo'
// import gql from 'graphql-tag'
// import ModalCreateProduct from '../components/ModalCreateProduct'

const columns = [
    
];

export default function Products() {
    const [setActive] = useState(false)

    // const { data, loading, refetch } = useQuery(gql`
    //     query allProducts {
    //         allProducts {
    //             id
    //             barcode
    //             description
    //             pricekg
    //             produced
    //         }
    //     }
    // `)

    // useEffect(() => {
    //     refetch()
    // }, [active, refetch])

    return (
        <>
            <Button type="primary" onClick={() => setActive(true)} style={{ marginBottom: 16 }}>
                Adicionar
            </Button>
            <Table columns={columns} pagination={false} />
            {/* <ModalCreateProduct active={active} setActive={setActive} /> */}
        </>
    )
}
