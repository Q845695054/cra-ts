import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import 'antd/dist/antd.min.css'
import '@ant-design/pro-form/dist/form.css';
import '@ant-design/pro-table/dist/table.css';
import '@ant-design/pro-layout/dist/layout.css';

import SignIn from './SignIn';
import Home from "./layouts/Home";
import Dashboard from "./routes/Dashboard";
import Dict from "./routes/Dict";
import User from "./routes/User";
import UserDetail from "./routes/UserDetail";
import Group from "./routes/Group";
import Role from "./routes/Role";
import Perm from "./routes/Perm";
import NotFound from "./routes/NotFound";
import Category from "./pages/cms/Category";
import Article from "./pages/cms/Article";
import ChangePassword from "./pages/profile/ChangePassword";
import App from "./App";
import Fonts from "./sample/Fonts";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <React.StrictMode>
            {/*<Routes>*/}
            {/*    <Route path="/" element={<App/>}>*/}
            {/*        <Route path="user" element={<User/>}/>*/}
            {/*        <Route path="group" element={<Group/>}/>*/}
            {/*        <Route path="sample">*/}
            {/*            <Route path="fonts" element={<Fonts/>}/>*/}
            {/*        </Route>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}


            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="sys">
                        <Route path="dict" element={<Dict/>}/>
                        <Route path="user" element={<User />}>
                            <Route path=":idcard" element={<UserDetail/>} />
                        </Route>                        <Route path="group" element={<Group/>}/>
                        <Route path="role" element={<Role/>}/>
                        <Route path="perm" element={<Perm/>}/>
                    </Route>
                    <Route path="cms">
                        <Route path="category" element={<Category/>}/>
                        <Route path="article" element={<Article/>}/>
                    </Route>
                    <Route path="profile">
                        <Route path="password" element={<ChangePassword/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
                <Route path="/signIn" element={<SignIn/>}></Route>
            </Routes>
        </React.StrictMode>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
