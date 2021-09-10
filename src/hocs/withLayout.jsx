import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
const withLayout = (WrapComponent) => {
    // res là lấy ra những thứ còn lại từ props (destructuring)
    //routeProps là thuộc tính props của route
    return ({ component: Component, isPrivate, ...rest }) => {
        const currentUser = useSelector((state) => state.authReducer.currentUser);
        const content = (
            < Route
                {...rest}
                render={(routeProps) => (
                    <WrapComponent>
                        <Component {...routeProps} />
                    </WrapComponent>
                )}
            />
        )

        if (isPrivate) {
            //kiểm tra xem đang nhập chưa mới cho vào trang mua vé
            if (currentUser) {
                return content
            } else {
                alert("Please Login!")
                return <Redirect to='/' />
            }
        } else {
            //các route bình thường (isPrivate === false)
            return content
        }
    }

}
export default withLayout;