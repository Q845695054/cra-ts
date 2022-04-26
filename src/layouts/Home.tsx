import {Outlet} from "react-router-dom";

import ProLayout, {MenuDataItem, PageContainer, ProBreadcrumb} from '@ant-design/pro-layout';

import {BaseMenuProps} from "@ant-design/pro-layout/es/components/SiderMenu/BaseMenu";
import routeData from "../config/route.json";
import {useNavigate} from "react-router-dom";
import Logo from "../images/logo192.png";
import {SYSTEM_NAME} from '../config/config'
import {Dropdown, Menu, Space, Modal, Avatar} from "antd";
import {DownOutlined} from "@ant-design/icons";
import {UserOutlined} from "@ant-design/icons";


export default (props: any) => {

    const navigate = useNavigate();
    /*const [loading,setLoading] = useState(false);*/

    const headerUserMenu = (
        <Menu items={[
            {
                label: '修改密码',
                key: 'changePassword',
                onClick: (mi) => {
                    navigate('/profile/password')
                }
            },
            {
                label: '退出登陆',
                key: 'signout',
                onClick: (mi) => {
                    Modal.confirm({
                        content: (<>确认退出吗？</>),
                        onOk: () => {
                            /*setLoading(true);
                            axios.post("")
                                .then((response)=>{
setLoading(false);
                                }).catch(reason => {

                                }).finally(()=>{
                                    window.close();
                                })  ;*/
                            sessionStorage.clear();
                            navigate('/signin', {replace: true})

                        }
                    })
                }
            },
        ]}
        />
    );

    return (
        /*<Spin spinning={loading}>*/
            <ProLayout
                style={{
                    height: '100vh',
                    border: '1px solid #ddd',
                }}
                title={SYSTEM_NAME}
                logo={(<img src={Logo}/>)}
                route={routeData}
                rightContentRender={() =>
                    <Dropdown overlay={headerUserMenu}>
                        <Space> <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                            {sessionStorage.getItem("username")} <DownOutlined/>
                        </Space>
                    </Dropdown>
                }
                /*menu={{
                    request: async () => {
                        let data;
                        await axios.get('http://localhost:4000/menu', {}).then((res) => {
                            data = res.data;
                        }).catch((reason) => {
                            console.error(reason)
                        });
                        return data;
                    }
                }}*/
                menuItemRender={(itemProps: MenuDataItem, defaultDom: React.ReactNode, props: BaseMenuProps) => {
                    return <a onClick={() => {
                        navigate(`${itemProps.path}`)
                    }}>{itemProps.name}</a>
                }}
                /*subMenuItemRender={(itemProps: MenuDataItem)=>{
                    return <a href={`${itemProps.path}`} onClick={()=>{return false}}>{itemProps.name}</a>
                }}
                location={{
                    pathname: '/dashboard',
                }}*/
            >
                <PageContainer>
                    <Outlet/>
                </PageContainer>
            </ProLayout>
        /*</Spin>*/
    );
};