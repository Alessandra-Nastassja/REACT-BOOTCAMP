import React from 'react';
import { useFormik } from "formik";

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

const MyForm = () => {
    const onSubmit = values => { };

    const formik = useFormik({
        initialValues,
        onSubmit
    })

    return (
        <>
            <form>
                <input placeholder="Name" {...formik.getFieldProps("name")} />
                <input placeholder="Email" {...formik.getFieldProps("email")} />
                <input placeholder="Password" {...formik.getFieldProps("password")} />
                <input placeholder="Confirm password" {...formik.getFieldProps("confirmPassword")} />
                <input placeholder="Address" {...formik.getFieldProps("address.street")} />
                <input placeholder="City" {...formik.getFieldProps("address.city")} />
            </form>
            <div>
                <pre>{JSON.stringify(formik.values, null, 2)}</pre>
            </div>
        </>
    );
}

export default MyForm;