import React from 'react';
// import { del, change } from '../redux/todolistSlice';
function List(props) {
    const lis = props.store.getState().list.map((item, index) => {
        return (
            <li key={index} className="text-primary" >
                <span>{item.content}</span>
                <button
                    type="button"
                    className='close'
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