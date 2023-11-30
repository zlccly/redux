import React from 'react';
import { delActioned, changeActioned } from '../redux/actions';

function List(props) {
    function handleClick(index) {
        props.store.dispatch(delActioned(index))

    }
    function changeHandle(index) {
        props.store.dispatch(changeActioned(index))
    }
    // 在redux,通过store.getState()来获取仓库的数据
    const lis = props.store.getState().list.map((item, index) => {
        return (
            <li key={index} className="text-primary" onClick={() => { changeHandle(index) }}>
                <span className={[item, item.status ? 'completed' : ''].join(" ")}>{item.content}</span>
                <button
                    type="button"
                    className='close'
                    onClick={() => { handleClick(index) }}
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