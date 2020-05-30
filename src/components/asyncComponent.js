import React from 'react'

export default function asyncComponent(importComponent){
    class AsyncComponent extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                component:null//动态加载的组件，默认为空
            }
        }
        componentWillUnmount(){
            importComponent().then((mod) => {
                this.setState({
                    component:mod.default ? mod.default :mod
                })
            }) 
        }
        render(){
            const c = this.state.component;
            return c ? <c {...this.props} /> : null;
        }
    }
    return AsyncComponent;
}