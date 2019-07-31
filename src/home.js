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
               <a href='#/detail/3'>去detail</a>
                    <button onClick={() => this.props.history.push({
                        pathname: '/detail',state: {id: 3}
                })}>通过函数跳转</button>
            </div>
        )
    }
}