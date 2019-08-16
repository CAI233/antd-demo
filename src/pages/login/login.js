import React from 'react';
import {getSellerList} from '../../HttpClientRequest/Api';
import formProvider from '../../utils/formProvider';
import { List, InputItem, WhiteSpace ,Button,WingBlank,PickerView,Toast} from 'antd-mobile';
import { createForm } from 'rc-form';//金额键盘 受控组件建议使用rc-form
import { async } from 'q';

import logo from '../../logo.svg';
import './login.css';



class login extends React.Component{
    constructor (props) {
        console.log(props)
        super(props)
        console.log(props)
    }
    state ={
        isShow:false,
        SellerData:[]
    }
    componentDidMount(){
        getSellerList().then((res) => {
          console.log(res);
          this.setState({
            SellerData:res.data
          })
        }).catch((error)=>{
            // error something
        })
    }
    handlClick(e){
      console.log(123);
      // const {isShow} = this.state;
      // this.setState({
      //   isShow:!isShow
      // })
    }

    Login(e){
        const {form: {UserPhone, PassWord}, formValid} = this.props;
        // console.log(form);
        console.log(UserPhone)
    }
    render() {

        const SellerList = (restProps) => (
          <div className={`downList ${restProps.bool ? 'aa' : 'bb'}`} >
          { restProps.data.map((item)=> {item['label'] = item.SellerName;item['value'] = item.SellerNo;})}
            <PickerView data={restProps.data} cascade={false} value={['800018']} />
          </div>
        );
        const {form: {UserPhone, PassWord}, handleChange} = this.props;
        const {SellerData,isShow} = this.state;
        let newData = [...SellerData];
        return (
            <div id="container">
              <div className="cont">
                <div className="logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="cont">
                    <List>
                        <InputItem placeholder="选择渠道品牌" disabled onChange={(e) => this.handlClick(e)} value={UserPhone.value}>渠道品牌</InputItem>
                        <InputItem clear placeholder="手机号/微信号" onChange={(e) => handleChange('UserPhone', e)} value={UserPhone.value}>账号</InputItem>
                        <InputItem type="PassWord" placeholder="输入密码" onChange={(e) => handleChange('PassWord', e)} value={PassWord.value} >密码</InputItem>
                    </List>
                    <WingBlank>
                        <Button onClick={(e) => this.Login(e)}>登录</Button><WhiteSpace />
                    </WingBlank>
                    {/* <div className="cont-foot">
                        <p onClick={() => this.props.history.push('/forgetPass')}>忘记密码？</p>
                    </div> */}
                </div>
              </div>
              <div className="foot">
                    {/* <SellerList {...SellerData} /> */}
                    <SellerList bool={isShow} data={newData} />
              </div>
           </div>
       );
   }
}

// 必须给UserAdd定义一个包含router属性的contextTypes
// 使得组件中可以通过this.context.router来使用React Router提供的方法
// this.context.router.push('/user') 跳转
// UserAdd.contextTypes = {
//     router: React.PropTypes.object.isRequired
// };

login = formProvider({
  UserPhone: {
      defaultValue: '',
      rules: [
        {
          pattern: function (value) {
            return value.length > 0;
          },
          error: '请输入用户名'
        },
        {
          pattern: /^.{1,11}$/,
          error: '用户名最多11个字符'
        }
      ]
    },
    PassWord: {
      defaultValue: '',
      rules: [
        {
          pattern: function (value) {
            return value.length>=6;
          },
          error: '密码最少6个字符'
        }
      ]
    }
  })(login);

  login = createForm()(login);
  export default login
