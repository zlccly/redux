import { useState } from 'react';
// import { addListAciond } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { add } from "../redux/todolistSlice"

function Input(props) {
    const dispatch = useDispatch()

    const [value, setValue] = useState("")
    function handleClick() {
        dispatch(add(value))
        // 将用户填写的内容提交到仓库
        // dispatch 方法会派发一个action对象到reducer里面
        // addListAciond(value) ===> {type: ADD, data: value}
        // 这个就是我们的action描述对象，该对象会被dispatch派发到reducer
        // props.store.dispatch(addListAciond(value))c
        setValue("")
    }

    return (
        <div className='form-inline'>
            <input type="text"
                className='form-control'
                placeholder='请输入待办事项'
                value={value}
                style={{ marginRight: 10 }}
                onChange={(e) => { setValue(e.target.value) }}
            />
            <button className='btn btn-primary' onClick={handleClick}>提交</button>
        </div>
    );
}
export default Input;