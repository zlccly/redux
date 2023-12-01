// 生产action 对象的函数， 我们一般称之为actionCreator

import { ADD, DEL, CHANGE } from "./actionType";

export const addListAciond = newItem => ({
    type: ADD,
    data: newItem
})
export const delActioned = index => ({
    type: DEL,
    data: index
})

export const changeActioned = index => ({
    type: CHANGE,
    data: index
})