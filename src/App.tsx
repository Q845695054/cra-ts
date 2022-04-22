import {Outlet, Link} from "react-router-dom";
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function App() {
    return (
        <>
            <Button type="primary" shape="round" icon={<DownloadOutlined />} />
            <hr/>
            <nav style={{
                borderRight: '1px solid black'
            }}>
                <ol style={{listStyle: 'none'}}>
                    <li><Link to="/user">User</Link></li>
                    <li><Link to="/group">Group</Link></li>
                    <li>
                        Sample
                        <ol style={{listStyle: 'none',marginLeft: '-2em'}}>
                            <li><Link to="/sample/fonts">Fonts</Link></li>
                        </ol>
                    </li>
                </ol>
            </nav>
            <hr/>
            <Outlet/>
        </>
    );
}

export default App;
