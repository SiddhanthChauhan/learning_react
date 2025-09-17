import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router'
import Footer from './components/Footer/Footer'

function Layout() {
    return (
        <>
        {/* Creating a boilerplate layout for all the pages */}
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout
