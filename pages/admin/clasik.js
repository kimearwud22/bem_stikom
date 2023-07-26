
import Sample from '@/components/admin/basic/banner'
import Visi from '@/components/admin/basic/visimisi'
import Layout from '@/components/admin/utils/Layout'
import React from 'react'

export default function index() {
  return (
    <div>
       <Layout>
        <Sample/>
        <Visi/>
       </Layout>
    </div>
  )
}
