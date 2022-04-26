import {useParams} from 'react-router-dom';
import users from '../sample/users.json';

export default function UserDetail() {
    const {idcard} = useParams();
    const u = users.find(record => record.idcard === idcard);
    return (
        <nav>
            <h6>{u ? u.idcard : 'null'}</h6>
            <h6>{u ? u.viewname : 'null'}</h6>
            <h6>{u ? u.mobile : 'null'}</h6>
        </nav>
    );
}