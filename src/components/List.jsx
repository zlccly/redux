import React from 'react';

function List(props) {
    // 在redux,通过store.getState()来获取仓库的数据
    const lis = props.store.getState().list.map((item, index) => {
        return (
            <li key={index} className="text-primary">
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