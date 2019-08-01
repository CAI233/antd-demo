import React from 'react';


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id:3
          };
    }
    render() {
        return (
            <div>
               <a >Home页面</a> 
               <p onClick={() => this.props.history.push('/goods')}>去商品页</p>
            </div>
        )
    }
}