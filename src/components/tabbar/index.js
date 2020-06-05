import React from 'react'
import {withRouter,Link} from 'react-router-dom';

import { connect } from 'react-redux'

import { TabBar } from 'antd-mobile';
import './index.css'


const select = [
  {path:'/home',title:'首页',pathName:'home'},
  {path:'/goods',title:'商品',pathName:'goods'},
  {path:'/sale',title:'销售',pathName:'sale'},
  {path:'/team',title:'团队',pathName:'team'},
  {path:'/user',title:'我的',pathName:'user'}];
const selectPng = select.map(item => ({
  title:item.title,
  path:item.path,
  src:require("./../../assets/images/tabbar/tab_icon_" + item.pathName + "_nor.png"),
  onsrc:require("./../../assets/images/tabbar/tab_icon_" + item.pathName + "_sel.png")
}));
const style ={
  position: 'fixed',
  bottom: 0,
  width:'100%'
}

const mapStateToProps = (state, ownProps) => {
  return { isFoot: state.puplic.isFoot}
}

@connect(mapStateToProps)

@withRouter
class Tabbar extends React.Component{
    constructor(props){
        super(props)
        const {path} = this.props;
        this.state = {
            selectedTab:path,
            isFoot:false
        };
    }
    componentDidMount(){
      console.log('进入tabbar')
      // const {isFoot,dispatchIsFooter} = this.props
      // dispatchIsFooter(isFoot);
    }
    // componentWillMount() {
    //   // l(this.props)
    //   let { location, history } = this.props;
    //   console.log("tabbar",this.props);
    //   // 确保用户在浏览器改变路由，激活按钮发生变化
    //   this.changeTabbarValue(location.pathname);
    //   // 监听路由的变化，主要用于重定向时确保激活按钮发生变化
    //   history.listen(({ pathname }, action) => {
    //     console.log("router change");
    //     // action === "REPLACE" &&
    //     this.changeTabbarValue(pathname);
    //   });
    // }
    // changeTabbarValue(pathname) {
    //   if(pathname === '/'){
    //     this.setState({
    //       isFoot:true,
    //     });
    //   }else{
    //     let nowPath = selectPng.find(({ path }) => pathname.indexOf(path) > -1);
    //     this.chooseBar(nowPath.path,false);
    //   }
    // }
    chooseBar(val,bool){
      this.setState({
          selectedTab:val,
      }); 
      if(bool){
        this.props.history.push(val)
      }
    }
    render(){
        return (
            <div style={style}>
              <TabBar unselectedTintColor="#000000" tintColor="#0B9486" barTintColor="#fafafa">
                  {selectPng.map((item) =>
                    (
                      <TabBar.Item
                      title={item.title}
                      key={item.path}
                      icon={<div style={{width: '22px',height: '22px',background: 'url('+item.src+') center center /  21px 21px no-repeat' }}/>}
                      selectedIcon={<div style={{width: '22px',height: '22px',background: 'url('+item.onsrc+') center center /  21px 21px no-repeat' }}/>}
                      selected={this.state.selectedTab === item.path}
                      // badge={1}
                      onPress={() => this.chooseBar(item.path,true)}>
                    </TabBar.Item>
                    )
                  )}
              </TabBar>
            </div>
        ) 
    }
}
// export default withRouter(Tabbar)
export default Tabbar