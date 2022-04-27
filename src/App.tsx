import {Outlet, Link} from "react-router-dom";
import {Spin} from "antd";
import {useEffect, useState} from "react";
import PubSub from 'pubsub-js';

function App() {

    const [spinning,setSpinning] = useState(false)

    useEffect(()=>{
        PubSub.subscribe('global_loading',(message,data)=>{
            console.log(message,data);
            setSpinning(data);
        })
    })

    return (
        <Spin spinning={spinning}>
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
        </Spin>
    );
}

export default App;
