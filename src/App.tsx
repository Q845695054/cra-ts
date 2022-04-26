import {Outlet, Link} from "react-router-dom";
import {Spin} from "antd";

function App() {
    return (
        <>
            <nav style={{
                borderRight: '1px solid black',
                width: 200,
                float: "left",
                height: 600,
                marginRight: 20
            }}>
                <ol style={{listStyle: 'none', padding: 20}}>
                    <li><Link to="/user">User</Link></li>
                    <li><Link to="/group">Group</Link></li>
                    <li>
                        Sample
                        <ol style={{listStyle: 'none', padding: 20}}>
                            <li><Link to="/sample/fonts">Fonts</Link></li>
                        </ol>
                    </li>
                </ol>
            </nav>
            <Outlet/>
        </>
    );
}

export default App;
