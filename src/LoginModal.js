import React, { useState } from 'react';
import { Modal, Form, Input, Button, Spin } from 'antd';

const LoginModal = ({ visible, onCancel, onLogin }) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {/////////////////////////////////////////////////////

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    onLogin(values);

    setLoading(false);
  };

  return (/////////////////////////////////////////////////////
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      title="Login"
    >
      <Form onFinish={handleLogin}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            {loading ? <Spin size="small" /> : 'Login'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;