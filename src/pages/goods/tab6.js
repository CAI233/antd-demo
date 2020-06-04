import React, { Component } from 'react';
 
class tab6 extends Component {
    constructor (props) {
        super(props)
        console.log('tab6',props)
    }
 
   render() {
       return (
            <div>
                <p>Message6</p>
                <p onClick={() => this.props.history.push('/home')}>去商品页</p>
            </div>
       );
   }
}
 
export default tab6