import {useParams} from 'react-router-dom';
import users from '../sample/users.json';
import PubSub from "pubsub-js";

export default function UserDetail() {
    const {idcard} = useParams();
    const u = users.find(record => record.idcard === idcard);
    return (
        <nav>
            <h6 onClick={()=>{
                PubSub.publish('global_loading',true);
                setTimeout(()=>{
                    PubSub.publish('global_loading',false);
                },5000)
            }}>{u ? u.idcard : 'null'}</h6>
            <h6>{u ? u.viewname : 'null'}</h6>
            <h6>{u ? u.mobile : 'null'}</h6>
        </nav>
    );
}