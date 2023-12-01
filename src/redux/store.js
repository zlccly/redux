import { configureStore } from "@reduxjs/toolkit";

import todolistReducer from './todolistSlice'
// configureStore()创建仓库
// 传入配置对象，
export default configureStore({
    reducer: {
        todo: todolistReducer
    }
})