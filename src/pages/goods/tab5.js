import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../actions/puplic'
@connect(state => state.puplic,{...actions})
class Tab5 extends Component {
    constructor (props) {
        super(props)
        console.log('tab5',props)
    }
    componentDidMount(){
        console.log('进入componentDidMount')
        const {isFoot,dispatchIsFooter} = this.props
        dispatchIsFooter(isFoot);
    }
 
   render() {
       return (
            <p>Message5</p>
       );
   }
}
 
export default Tab5