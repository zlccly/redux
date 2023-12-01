import { createSlice } from "@reduxjs/toolkit";
export const todolistSlice = createSlice({
    // 切片的命名空间
    name: "todolist",
    // 初始化仓库数据
    initialState: {
        list: [
            {
                content: "学习 React",
                status: false
            },
            {
                content: "复习 React",
                status: false
            },
            {
                content: "玩游戏",
                status: false
            },
            {
                content: "听歌",
                status: false
            }
        ]
    },
    reducers: {
        /**
         * 
         * @param {*} state 上一次的仓库数据
         * @param {*} param1 传递过来的数据
         * 允许直接修改state rudex-toolkit使用了immer.js库
         */
        add: (state, { payload }) => {
            state.list.push({
                content: payload,
                status: false
            })

        },
        del: (state, { payload }) => {
            state.list.splice(payload, 1)

        },
        change: (state, { payload }) => {
            console.log(payload, state.list[payload], "-----------")
            state.list[payload].status = !state.list[payload].status
        }
    }
})
console.log(todolistSlice, todolistSlice.reducer, "todolistSlice切片");
export const { add, del, change } = todolistSlice.actions
export default todolistSlice.reducer