import { useState } from 'react';

function Input(props) {
    const [value, setValue] = useState("")

    return (
        <div className='form-inline'>
            <input type="text"
                className='form-control'
                placeholder='请输入待办事项'
                value={value}
                style={{ marginRight: 10 }}
                onChange={(e) => { setValue(e.target.value) }}
            />
            <button className='btn btn-primary'>提交</button>
        </div>
    );
}
export default Input;