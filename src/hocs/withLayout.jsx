import React from 'react'
import { Route } from 'react-router-dom'

const withLayout = (WrapComponent) => {
    // res là lấy ra những thứ còn lại từ props (destructuring)
    //routeProps là thuộc tính props của route
    return ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={(routeProps) => (
                <WrapComponent>
                    <Component {...routeProps} />
                </WrapComponent>
            )}
        />
    )
}
export default withLayout;