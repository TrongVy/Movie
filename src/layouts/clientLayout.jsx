import Footer from 'components/footer/Footer'
import Header from 'components/header/Header'
import withLayout from 'hocs/withLayout'
import React from 'react'

function clientLayout(props) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}
export default withLayout(clientLayout)
