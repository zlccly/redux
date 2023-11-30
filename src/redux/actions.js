// 生产action 对象的函数， 我们一般称之为actionCreator

import { ADD } from "./actionType";

export const addListAciond = newItem => ({
    type: ADD,
    data: newItem
})
