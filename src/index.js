import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// react和redux建立关联
import { store } from "./redux/store"
const root = ReactDOM.createRoot(document.getElementById('root'));

function render(params) {
    root.render(
        <App store={store} />
    );
}
render()


// react和redux建立关联
// subscribe 订阅，在仓库的状态发生改变的时候
store.subscribe(render)
