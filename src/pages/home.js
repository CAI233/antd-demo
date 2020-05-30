import React from 'react';


export default class home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id:3
        };
        console.log(props)
    }
    render() {
        return (
            <div>
               <p >Home页面</p> 
               <p onClick={() => this.props.history.push('/goods')}>去商品页</p>
               <p onClick={() => this.props.history.push('/goods/tab6')}>去商品6页</p>
            </div>
        )
    }
}