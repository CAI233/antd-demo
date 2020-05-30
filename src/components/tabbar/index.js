import React from 'react'
import {withRouter} from 'react-router-dom';
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
class Tabbar extends React.Component{
    constructor(props){
        super(props)
        const {path} = this.props;
        this.state = {
            selectedTab:path
        };
    }
    chooseBar(val){
      this.setState({
          selectedTab:val,
      }); 
      this.props.history.push(val)
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
                        onPress={() => this.chooseBar(item.path)}>
                      </TabBar.Item>
                      )
                    )}
                </TabBar>
            </div>
        )
    }
}
export default withRouter(Tabbar)
// export default Tabbar