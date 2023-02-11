import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';
import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
import Counter from './components/UseStateSample';
import RCounter from './components/UseReducerSample';
import { Parent as UseCallbackSample } from './components/UseCallbackSample';
import { Parent as MemoSample } from './components/MemoSample';
import { UseMemoSample } from './components/UseMemoSample';
import { Clock } from './components/Clock';
import UseContextSample from './components/UseContextSample';
import UseRefSample from './components/UseRefSample';
import UseImperativeHandleSample from './components/UseImperativeHandelSample';
import { UseCustomHookSample } from './components/UseCustomHookSample';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello />
    --------------------
    <Name />
    --------------------
    <Message />
    --------------------
    {/* <Parent /> */}
    <Page />
    --------------------
    <Counter initialValue={1} />
    --------------------
    <RCounter initialValue={1} />
    --------------------
    <MemoSample />
    --------------------
    <UseCallbackSample />
    --------------------
    <UseMemoSample />
    --------------------
    <Clock />
    --------------------
    <UseContextSample />
    --------------------
    <UseRefSample />
    --------------------
    <UseImperativeHandleSample />
    --------------------
    <UseCustomHookSample />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
