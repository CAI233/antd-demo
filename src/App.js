import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WingBlank,Button ,WhiteSpace} from 'antd-mobile';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WingBlank>
        <Button>default</Button><WhiteSpace />
        </WingBlank>
      </header>
    </div>
  );
}

export default App;
