import React from 'react';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id:3
          };
    }
    render() {
        return (
            <div>
               <a >Login页面</a>   
               <p onClick={() => this.props.history.push('/home')}>去首页</p>
            </div>
        )
    }
}