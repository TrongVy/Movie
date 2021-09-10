import FooterMain from 'components/footer/FooterMain'
import Header from 'components/header/Header'
import withLayout from 'hocs/withLayout'
import React from 'react'

function clientLayout(props) {
    return (
        <>
            <Header />
            {props.children}
            <FooterMain />
        </>
    )
}
export default withLayout(clientLayout)
