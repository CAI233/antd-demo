import React from 'react';

import Contain from './../components/contain'

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id:3
        };
        console.log(props)
    }
    render() {
        const {isFooter,match} = this.props
        return (
            <Contain patch={match.path}>
                <div className="container">
                    <p >Home页面</p> 
                    <p onClick={() => this.props.history.push('/goods')}>去商品页</p>
                    <p onClick={() => this.props.history.push('/goods/tab6')}>去商品6页</p>
                </div>
            </Contain>
        )
    }
}