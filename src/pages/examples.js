import React from 'react'
import Layout from '../components/layout'
import Header from '../examples/Header'
import HeaderStatic from '../examples/HeaderStatic'
import { graphql } from 'gatsby'

export default function Examples() {
    return (
        <Layout>
            <h1>Hello Examples</h1>
            <Header />
            <HeaderStatic />
        </Layout>
    )
}
