import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import App from './App';

import Fonts from './sample/Fonts';

import User from './routes/User';
import UserDetail from './routes/UserDetail';
import Group from './routes/Group';
// import reportWebVitals from './reportWebVitals';
import NotFound from "./routes/NotFound";

import 'antd/dist/antd.min.css'
import '@ant-design/pro-form/dist/form.css';
import '@ant-design/pro-table/dist/table.css';
import '@ant-design/pro-layout/dist/layout.css';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="user" element={<User />}>
                        <Route path=":idcard" element={<UserDetail/>} />
                    </Route>
                    <Route path="group" element={<Group />} />
                    <Route path="sample">
                        <Route path="fonts" element={<Fonts/>}/>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </React.StrictMode>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
