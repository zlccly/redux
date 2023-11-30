// 仓库
import { todoRecuder } from "./reducers"


// 1.创建仓库
import { createStore } from "redux"
// 需要传入一个reducer(纯函数，用于计算最新的状态)
export const store = createStore(
    todoRecuder,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 