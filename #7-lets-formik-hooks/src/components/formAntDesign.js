import React from "react";
import { useFormik } from 'formik';
import { Form, Input } from 'antd';

const initialValues = {
    name: '',
    email: '',
    address: {
        street: '',
        number: '',
        city: '',
    },
    password: '',
    confirmPassword: ''
};

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const MyForm = () => {
    const onSubmit = values => { };

    const formik = useFormik({
        initialValues,
        onSubmit
    })

    return (
        <>
        <h1>Formulário usuando formik</h1>
            <Form
                {...layout}
                name="basic"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}>
                    <Input placeholder="Name" {...formik.getFieldProps("name")} />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}>
                    <Input placeholder="Email" {...formik.getFieldProps("email")} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input type="password" placeholder="Password" {...formik.getFieldProps("password")} />
                </Form.Item>

                <Form.Item
                    label="Confirm password"
                    name="confirmPassword"
                    rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input type="password" placeholder="Confirm password" {...formik.getFieldProps("confirmPassword")} />
                </Form.Item>

                <Form.Item
                    label="Address"
                    name="street"
                    rules={[{ required: true, message: 'Please input your street!' }]}>
                    <Input placeholder="Address" {...formik.getFieldProps("address.street")} />
                </Form.Item>

                <Form.Item
                    label="City"
                    name="city"
                    rules={[{ required: true, message: 'Please input your city!' }]}>
                    <Input placeholder="City" {...formik.getFieldProps("address.city")} />
                </Form.Item>
            </Form>
            <br/>
            <div>
                <pre>{JSON.stringify(formik.values, null, 2)}</pre>
            </div>
        </>
    );
}

export default MyForm;