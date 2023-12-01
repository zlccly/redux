import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { del, change } from '../redux/todolistSlice';
function List(props) {
    const dispatch = useDispatch()

    const list = useSelector(state => state.todo.list)
    console.log(list, "hhh===")
    // 在redux,通过store.getState()来获取仓库的数据
    const lis = list.map((item, index) => {
        return (
            <li key={index} className="text-primary" >
                <span className={[item, item.status ? 'completed' : ''].join(" ")} onClick={() => { dispatch(change(index)) }}>{item.content}</span>
                <button
                    type="button"
                    className='close'
                    onClick={() => { dispatch(del(index)) }}
                >
                    &times;
                </button>
            </li>
        )
    })


    return (
        <div>
            <ul style={{ marginTop: 20 }}>
                {lis}
            </ul>
        </div>
    );
}

export default List;