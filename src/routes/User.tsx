import {Link, Outlet} from 'react-router-dom';
import users from '../sample/users.json';

export default function User() {
    return (
        <>
            <nav>
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
            <Outlet/>
        </>
    )
}
