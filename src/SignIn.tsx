import {LoginForm, ProFormText, ProFormCheckbox} from '@ant-design/pro-form';
import {
    UserOutlined,
    LockOutlined,
} from '@ant-design/icons';
import axios from 'axios';
import {message, Space} from 'antd';
import {useNavigate} from "react-router-dom";
import {COMPANY_NAME,SYSTEM_NAME} from './config/config'
import Logo from './images/logo192.png';


export default function Home() {
    let navigate = useNavigate();

    return (
        <div style={{backgroundColor: 'white'}}>
            <LoginForm
                logo={(<img src={Logo}/>)}
                title={COMPANY_NAME}
                subTitle={SYSTEM_NAME}
                onFinish={(formData: any) => {
                    const uri = Object.entries(formData).map(([key, val]) => `${key}=${val}`).join('&')

                    return axios.get('http://localhost:4000/signIn?' + uri)
                        .then(function (response) {
                            // useToken (server response jwt)
                            if (response.data.length === 1) {
                                message.success('登陆成功！');
                                /*todo load jwt data for axios config*/

                                /*todo load menu data to session storage*/

                                /*todo load last left menu path data*/
                                sessionStorage.setItem("username",formData.username)
                                navigate("/dashboard", {replace: true});
                            } else {
                                message.error('登陆失败！');
                            }

                        })
                        .catch(function (reason) {
                            console.log('error', reason);
                        });
                }}
            >
                <>
                    <ProFormText
                        name="username"
                        fieldProps={{
                            size: 'large',
                            prefix: <UserOutlined className={'prefixIcon'}/>,
                        }}
                        placeholder={'请输入用户名'}
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                        ]}
                    />

                    <ProFormText.Password
                        name="password"
                        fieldProps={{
                            size: 'large',
                            prefix: <LockOutlined className={'prefixIcon'}/>,
                        }}
                        placeholder={'请输入密码'}
                        rules={[
                            {
                                required: true,
                                message: '请输入密码！',
                            },
                        ]}
                    />
                </>


                <div
                    style={{
                        marginBottom: 24,
                    }}
                >
                    <ProFormCheckbox noStyle name="autoLogin">
                        自动登录
                    </ProFormCheckbox>
                </div>

            </LoginForm>
        </div>
    );
};