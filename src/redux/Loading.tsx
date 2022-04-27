import React from 'react'
import { useAppSelector, useAppDispatch } from './hooks'
import { toggle } from './loadingSlice'
import {Spin} from "antd";

function Loading() {
    const spining = useAppSelector(state => state.loading.spinning)
    const dispatch = useAppDispatch()

    // dispatch(toggle())
    // return (
    //     <Spin spinning={spining}>
    //         <a onClick={()=>{
    //             dispatch(toggle())
    //         }}>Toggle</a>
    //     </Spin>
    // )
}