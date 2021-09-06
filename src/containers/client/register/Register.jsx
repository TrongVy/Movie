import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';

const signUserSchema = yup.object().shape({
    taiKhoan: yup.string().required('*Field is required!'),
    matKhau: yup.string().required('*Field is required!'),
    hoTen: yup.string().required('*Field is required!'),
    email: yup.string().email('*email is valid!').required('*Field is required!'),
    soDienThoai: yup.string().matches(/^[0-9]+$/).required('*Field is required!'),
    maNhom: yup.string().required('*Field is required!'),
})

export default class Register extends Component {
    handleSubmit = (value) => {
        console.log('value', value)
    }
    render() {
        return (
            <div style={{ marginTop: "100px" }} className="container ">

                <Formik

                    initialValues={{
                        taiKhoan: '',
                        matKhau: '',
                        hoTen: '',
                        email: '',
                        soDienThoai: '',
                        maNhom: 'GP01'
                    }}
                    validationSchema={signUserSchema}
                    onSubmit={this.handleSubmit}
                    render = {(formikProps) => (
                        <Form action="" className="w-50 mx-auto">
                            <div className="form-group">
                                <label htmlFor="">Tai Khoan</label>
                                <Field type="text" className="form-control" placeholder="Tai Khoan" name="taiKhoan" onChange={formikProps.handleChange} />
                                <ErrorMessage name="taiKhoan" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Mat Khau</label>
                                <Field type="password" className="form-control" placeholder="Mat Khau" name="matKhau" onChange={formikProps.handleChange} />
                                <ErrorMessage name="matKhau" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Ho Ten</label>
                                <Field type="text" className="form-control" placeholder="Ho Ten" name="hoTen" onChange={formikProps.handleChange} />
                                <ErrorMessage name="hoTen" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <Field type="email" className="form-control" placeholder="Email" name="email" onChange={formikProps.handleChange} />
                                <ErrorMessage name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">So Dien THoai</label>
                                <Field type="text" className="form-control" placeholder="So Dien Thoai" name="soDienThoai" onChange={formikProps.handleChange} />
                                <ErrorMessage name="soDienThoai" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Ma Nhom</label>
                                <Field component="select" name="maNhom" id="" className="form-control" onChange={formikProps.handleChange}>
                                    <option value="">GP01</option>
                                    <option value="">GP02</option>
                                    <option value="">GP03</option>
                                    <option value="">GP04</option>
                                    <option value="">GP05</option>
                                    <option value="">GP06</option>
                                    <option value="">GP07</option>
                                    <option value="">GP08</option>
                                    <option value="">GP09</option>
                                    <option value="">GP010</option>
                                </Field>
                                {/* <ErrorMessage name="maNhom" /> */}
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Dang Ky</button>
                            </div>
                        </Form>
                    )} />
            </div>
        )
    }
}
