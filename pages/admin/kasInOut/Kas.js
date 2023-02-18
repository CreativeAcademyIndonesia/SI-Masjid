//@ts-check

import React from 'react'
import AdminLayout from '../../../components/admin/AdminLayout'
import Kas from '../../../components/admin/kasInOut/Kas'


const dataalmarhumadmin = () => {
    return (
        <div>
            <AdminLayout>
                <Kas />
            </AdminLayout>
        </div>
    )
}

export default dataalmarhumadmin;