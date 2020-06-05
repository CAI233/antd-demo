import React from 'react'
import { Route,Redirect,withRouter } from 'react-router-dom';

import { connect } from 'react-redux'
import * as actions from './actions/puplic'
import Tabbar from './components/tabbar'

const mapStateToProps = (state, ownProps) => {
   return { 
       token: state.puplic.token,
    //    isFoot:state.puplic.isFoot
    }
}

@connect(mapStateToProps,{...actions})
class FrontendAuth extends React.Component{
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log('进入componentWillMount')
    }
    componentDidMount(){
        console.log('进入componentDidMount')
    }
    componentWillReceiveProps(){
        console.log('进入WillReceiveProps')
    }
    componentWillUpdate(){
        console.log('进入componentWillUpdate')
    }
    componentDidUpdate(){    
        console.log('进入componentDidUpdate')
    }

    render(){
        const {meta,path,token,Component,isFoot,exact,dispatchIsFooter} = this.props;
        console.log('FrontendAuth',this.props.isFoot)
        if(token){
            let title ;
            if(path != '/' && path != '/login'){//校验是否为首页
                // isResquire = meta.resquire;
                // title = meta.title;
                // isFoot = meta.isFoot;
                if(!token || token==''){
                    return <Redirect to='/' />
                }
            }else{
                title = '登录';
            }
            // window.document.title = title;
            if(exact){
                return <div className="FrontendAuth-contaner">
                            <Route exact path={path} render={props => (<Component {...props} />)}/>
                            {isFoot ? <Tabbar path={path}/> : null}
                        </div>
            }else{
                return <div className="FrontendAuth-contaner">
                            <Route path={path} render={props => (<Component {...props} />)}/>
                            {isFoot ? <Tabbar path={path}/> : null}
                        </div>
            }
        }else{
            return <Redirect to='/' />
        }
    }
}
export default withRouter(FrontendAuth)
// export default withRouter(FrontendAuth)