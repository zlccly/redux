// reducer， 用于计算最新的状态
// import { ADD, DEL, CHANGE } from "./actionType";
import { ADD, DEL, CHANGE } from "./actionType";



// 仓库默认数据
let defaultState = {
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
}


/**
 * 通过这个纯函数我们会计算出最新的状态
 * @param {*} state 仓库数据,每次回传入上一次的仓库数据
 * @param {*} action 描述对象{type: "ADD", data: '学习Redux'}
 * 描述对象描述了我要做什么，以及带来的额外数据
 */

export function todoRecuder(state = defaultState, action) {
    // 有了描述对象后，我就可以根据旧状态计算出新的状态并返回
    switch (action.type) {
        case ADD: {
            const arr = [...state.list]
            arr.push({
                content: action.data,
                status: false
            })
            return { list: arr }
        }
        case DEL: {
            const arr = [...state.list]
            arr.splice(action.data, 1)
            return { list: arr }

        }

        case CHANGE: {
            console.log("hhhhhh")
            const arr = [...state.list]
            arr[action.data].status = !arr[action.data].status
            return { list: arr }
        }
        default:
            return state
    }
}