import {Link, Outlet} from 'react-router-dom';
import users from '../data/users.json';


export default function User() {
    return (
        <div>
            <nav style={{paddingLeft: '2rem'}}>
                {users.map((record) => (
                    <Link
                        style={{display: 'block', margin: '1rem 0'}}
                        to={`/user/${record.idcard}`}
                        key={record.idcard}
                    >
                        {record.viewname}
                    </Link>
                ))}
            </nav>
            <hr/>
            <Outlet/>
        </div>
    );
}