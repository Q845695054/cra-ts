import {Outlet, Link} from "react-router-dom";

function App() {
    return (
        <>
            <nav style={{
                borderRight: '1px solid black',
                float: 'left',
                width: '200px'
            }}>
                <ol style={{listStyle: 'none'}}>
                    <li><Link to="/user">User</Link></li>
                    <li><Link to="/group">Group</Link></li>
                </ol>
            </nav>
            <Outlet/>
        </>
    );
}

export default App;
