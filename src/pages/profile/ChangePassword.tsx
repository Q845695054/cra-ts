import {Form, Input, Button, Checkbox, Modal} from 'antd';
import {UserOutlined, LockOutlined, LoadingOutlined} from '@ant-design/icons';
import axios from "axios";
import {useAppDispatch} from "../../redux/hooks";
import { toggle } from '../../redux/loadingSlice'

const ChangePassword = () => {

    const dispatch = useAppDispatch()

    const onFinish = (values: any) => {
        dispatch(toggle());
        setTimeout(()=>{dispatch(toggle());},3000);
        // axios.post("").then((response)=>{}).catch(reason => {});
        // return false;
    };

    /*{
       validator: (rule, value) => value ? Promise.resolve() : Promise.reject(new Error('必须同意条款'))
 },*/

    // @ts-ignore
    return (
        <Form
            labelCol={{span: 3}}
            wrapperCol={{span: 6}}
            onFinish={onFinish}
        >
            <Form.Item
                label={"原密码"}
                name="oldPassword"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input prefix={<LockOutlined/>}/>
            </Form.Item>

            <Form.Item label={"新密码"} name="password" rules={
                [{
                    required: true,
                },
                    {
                        pattern: new RegExp(/^[\w!@#%&\$\^\*\(\)]+$/i),
                    },
                    {
                        type: 'string', min: 6, max: 30,
                    }]
            }>
                <Input prefix={<LockOutlined/>}/>
            </Form.Item>

            <Form.Item
                label={"确认新密码"}
                name="confirmPassword"
                dependencies={['password']}
                rules={[
                    {
                        required: true,
                    },
                    {
                        pattern: new RegExp(/^[\w!@#%&\$\^\*\(\)]+$/i),
                    },
                    {
                        type: 'string', min: 6, max: 30,
                    },
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('两次输入的密码不一样'));
                        },
                    }),
                ]}
            >
                <Input prefix={<LockOutlined/>}/>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 3, span: 6}}>
                <Button type="primary" htmlType="submit">
                    确认
                </Button>
            </Form.Item>
        </Form>
    );
};

export default () => <ChangePassword/>;