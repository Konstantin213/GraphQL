import React from "react";
import 'antd/dist/antd.css';
import {Form, Input, Button} from 'antd';
import f from './form.module.css'
import {useHistory} from "react-router-dom";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 10,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const Login = () => {
    const history = useHistory()

    const onFinish = () => {
        history.push({pathname: '/blocks'})
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Ошибка:', errorInfo);
    };

    return (
        <Form
            className={f.form}
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Введите имя пользователя',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Введите пароль',
                    },
                ]}
            >
                <Input.Password/>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};
export default Login;
