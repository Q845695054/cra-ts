import {useParams} from 'react-router-dom';
import users from '../data/users.json';

export default function UserDetail() {
    const {idcard} = useParams();
    const u = users.find(record => record.idcard === idcard);
    return (
        <div style={{marginLeft:'4rem'}}>
            <h2>{u ? u.idcard : 'null'}</h2>
            <h2>{u ? u.viewname : 'null'}</h2>
            <h2>{u ? u.mobile : 'null'}</h2>
        </div>
    );
}