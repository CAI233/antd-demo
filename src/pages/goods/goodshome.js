import React, { Component } from 'react';
 
class goodshome extends Component {
    constructor (props) {
        super(props)
        // console.log(props)
    }
 
   render() {
       return (
            <div>
                <p>goodshome</p>
                <p onClick={() => this.props.history.push('/home')}>去商品页</p>
            </div>
       );
   }
}
 
export default goodshome